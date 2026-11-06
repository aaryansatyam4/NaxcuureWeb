// Vercel serverless function: POST /api/chat
// Keeps the Gemini API key on the server — it is never sent to visitors' browsers.
// Set GEMINI_API_KEY in Vercel → Project → Settings → Environment Variables.
import { content } from '../data/content';
import { generateContext } from '../lib/chatContext';

export const config = { runtime: 'edge' };

type Role = 'user' | 'model';
interface IncomingMessage {
  role: Role;
  text: string;
}

// Tried in order; the next one is used only if a model has been retired (HTTP 404).
const MODELS = ['gemini-2.5-flash-lite', 'gemini-flash-lite-latest', 'gemini-flash-latest'];
const MAX_MESSAGES = 20;
const MAX_MESSAGE_CHARS = 1500;
const LANGUAGES = ['en', 'ru', 'fr', 'es'] as const;

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { 'content-type': 'application/json', 'cache-control': 'no-store' } });

export default async function handler(req: Request): Promise<Response> {
  if (req.method !== 'POST') return json({ reason: 'METHOD_NOT_ALLOWED' }, 405);

  // Only accept calls from this website itself.
  const origin = req.headers.get('origin');
  const host = req.headers.get('host');
  if (origin && host) {
    try {
      if (new URL(origin).host !== host) return json({ reason: 'FORBIDDEN_ORIGIN' }, 403);
    } catch {
      return json({ reason: 'FORBIDDEN_ORIGIN' }, 403);
    }
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) return json({ reason: 'NOT_CONFIGURED' }, 503);

  let body: { messages?: unknown; language?: unknown };
  try {
    body = await req.json();
  } catch {
    return json({ reason: 'BAD_REQUEST' }, 400);
  }

  const raw = Array.isArray(body.messages) ? body.messages : [];
  const messages: IncomingMessage[] = raw
    .filter(
      (m): m is IncomingMessage =>
        !!m && typeof m === 'object' && ((m as IncomingMessage).role === 'user' || (m as IncomingMessage).role === 'model') && typeof (m as IncomingMessage).text === 'string',
    )
    .slice(-MAX_MESSAGES)
    .map((m) => ({ role: m.role, text: m.text.slice(0, MAX_MESSAGE_CHARS) }));
  // Conversation must start with the visitor.
  const firstUser = messages.findIndex((m) => m.role === 'user');
  const convo = firstUser >= 0 ? messages.slice(firstUser) : [];
  if (convo.length === 0 || convo[convo.length - 1].role !== 'user') return json({ reason: 'BAD_REQUEST' }, 400);

  const language = LANGUAGES.includes(body.language as (typeof LANGUAGES)[number]) ? (body.language as (typeof LANGUAGES)[number]) : 'en';
  const payload = {
    systemInstruction: { parts: [{ text: generateContext(content[language]) }] },
    contents: convo.map((m) => ({ role: m.role, parts: [{ text: m.text }] })),
  };

  for (const model of MODELS) {
    const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`, {
      method: 'POST',
      headers: { 'content-type': 'application/json', 'x-goog-api-key': apiKey },
      body: JSON.stringify(payload),
    });
    const data = (await res.json().catch(() => null)) as
      | { candidates?: { content?: { parts?: { text?: string }[] } }[]; error?: { code?: number; status?: string; message?: string; details?: { reason?: string }[] } }
      | null;

    if (res.ok) {
      const text = (data?.candidates?.[0]?.content?.parts ?? []).map((p) => p.text ?? '').join('').trim();
      return json({ text });
    }
    if (res.status === 404) continue; // model retired — try the next one

    const reason = data?.error?.details?.find((d) => d.reason)?.reason ?? data?.error?.status ?? 'UPSTREAM_ERROR';
    // Full detail goes to the Vercel function logs, not to the visitor.
    console.error('Gemini API error', res.status, reason, data?.error?.message);
    return json({ reason }, res.status);
  }

  console.error('Gemini API error: no available model', MODELS);
  return json({ reason: 'MODEL_NOT_FOUND' }, 404);
}

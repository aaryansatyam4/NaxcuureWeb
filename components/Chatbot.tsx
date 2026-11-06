import React, { useState, useRef, useEffect } from 'react';
import type { GoogleGenAI } from '@google/genai';
import { useLanguage } from '../context/LanguageContext';
import { ChatMessage, Content } from '../types';
import { catalogue, categories, dosageForms } from '../data/catalogue';
import { ChatBubbleIcon, CloseIcon, SendIcon } from './icons';

const API_KEY = (process.env.API_KEY || process.env.GEMINI_API_KEY || '') as string;

// Tried in order; the next one is used only if a model has been retired (HTTP 404).
const MODELS = ['gemini-2.5-flash-lite', 'gemini-flash-lite-latest', 'gemini-flash-latest'];

const errorStatus = (err: unknown): number | undefined => {
  const e = err as { status?: unknown; code?: unknown; message?: unknown };
  if (typeof e?.status === 'number') return e.status;
  if (typeof e?.code === 'number') return e.code;
  const m = typeof e?.message === 'string' ? e.message.match(/\b(400|401|403|404|429|500|503)\b/) : null;
  return m ? Number(m[1]) : undefined;
};

/** Visitor-friendly message that still tells the site owner what went wrong (the code in brackets). */
const describeError = (err: unknown): string => {
  const status = errorStatus(err);
  const msg = String((err as { message?: unknown })?.message ?? '');
  if (/API key not valid|API_KEY_INVALID/i.test(msg)) return 'Sorry, the assistant is not configured correctly right now. (invalid API key)';
  if (status === 429) return 'NaxBot is getting a lot of questions right now. Please try again in a minute. (429)';
  if (status === 403) return 'Sorry, the assistant is temporarily unavailable. (403 — API key blocked or restricted)';
  if (status === 404) return 'Sorry, the assistant is temporarily unavailable. (404 — model not found)';
  if (status === 400) return 'Sorry, the assistant is temporarily unavailable. (400 — request rejected)';
  if (status && status >= 500) return 'The assistant service is having trouble. Please try again shortly. (' + status + ')';
  if (/Failed to fetch|NetworkError|network/i.test(msg)) return 'Could not reach the assistant. Please check your connection and try again.';
  return 'Sorry, I encountered an error. Please try again.' + (status ? ' (' + status + ')' : '');
};

/** Builds the assistant's instructions + site content (answers must come only from this). */
const generateContext = (content: Content['en']) => {
  const home = `
# Naxcuure Home Page Information
- Main Slogan: ${content.home.heroTitle}: ${content.home.heroSubtitle}
- Announcement: ${content.home.announcement.title} — ${content.home.announcement.text}
- Commitment: ${content.home.section1Title}: ${content.home.section1Text} ${content.home.section1P2}
- Presence: ${content.home.section2Title}: ${content.home.section2Text}
- Future: ${content.home.section3Title}: ${content.home.section3Text}
- Contact: ${content.home.contactSection.address} | ${content.home.contactSection.phone} | ${content.home.contactSection.email}
  `;

  const about = `
# About Naxcuure
- Description: ${content.about.p1} ${content.about.p2} ${content.about.p3}
- Mission: ${content.about.missionTitle}: ${content.about.missionText}
- Vision: ${content.about.visionTitle}: ${content.about.visionText}
- Values: ${content.about.values.map((v) => `${v.title}: ${v.text}`).join('; ')}
- Leadership: ${content.about.leadershipText1} ${content.about.leadershipText2}
  `;

  const products = `
# Products
- Intro: ${content.products.intro}
- Product catalogue by therapeutic category (name — dosage form — strength):
${categories
  .map((c) => {
    const items = catalogue
      .filter((p) => p.category === c.id)
      .map((p) => `  - ${p.name}${p.form ? ` — ${dosageForms[p.form].en}` : ''}${p.strength ? ` — ${p.strength}` : ''}`)
      .join('\n');
    return `## ${c.label.en}\n${items}`;
  })
  .join('\n')}
  `;

  const quality = `
# Quality Commitment
- ${content.quality.p1} ${content.quality.p2} ${content.quality.p3}
- Promise: ${content.quality.commitmentText}
- Systems: ${content.quality.section2Text}
- ${content.quality.certificationsTitle}: ${content.quality.certificationsText}
  `;

  const career = `
# Careers at Naxcuure
- Why join: ${content.career.introText}
- Benefits: ${content.career.benefits.join(', ')}
- Openings:
${content.career.jobs.map((j) => `  - Title: ${j.title}\n    Department: ${j.department}\n    Location: ${j.location}`).join('\n')}
  `;

  return `You are NaxBot — a helpful and concise AI assistant for Naxcuure (a pharmaceutical company).
Follow these rules EXACTLY:

1. ANSWER ONLY using the information provided below (do NOT fabricate facts).
2. Be friendly, professional, and concise. Reply in the language the user writes in.
3. If the user asks for medical advice, legal advice, competitor info, pricing, or anything outside of the provided information, respond that you can only provide information found on Naxcuure's website and recommend contacting the company or a qualified professional.
4. Do NOT state how many products Naxcuure has. If the user asks about the catalogue, availability, pricing or ordering, answer from the product list where possible and invite them to get in touch via the Contact page on the website for details.

Now, here is the site information you should use to answer queries:
---
${[home, about, products, quality, career].join('\n\n')}
---`;
};

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [userInput, setUserInput] = useState('');
  const { t } = useLanguage();
  const chatContentRef = useRef<HTMLDivElement>(null);
  const clientRef = useRef<GoogleGenAI | null>(null);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([{ role: 'model', text: "Hello! I'm NaxBot, your virtual assistant for Naxcuure. How can I help you today?" }]);
    }
  }, [isOpen, messages.length]);

  useEffect(() => {
    chatContentRef.current?.scrollTo({ top: chatContentRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages, isLoading]);

  // Without an API key there is nothing to talk to — don't render the widget at all.
  if (!API_KEY) return null;

  const getClient = async () => {
    if (!clientRef.current) {
      const { GoogleGenAI } = await import('@google/genai');
      clientRef.current = new GoogleGenAI({ apiKey: API_KEY });
    }
    return clientRef.current;
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInput.trim() || isLoading) return;

    const userMessage: ChatMessage = { role: 'user', text: userInput.trim() };
    setMessages((prev) => [...prev, userMessage]);
    setUserInput('');
    setIsLoading(true);

    try {
      const ai = await getClient();
      // Send only the real conversation: start at the visitor's first message (the greeting is UI-only).
      const convo = [...messages, userMessage];
      const firstUser = convo.findIndex((m) => m.role === 'user');
      const history = convo.slice(firstUser).map((msg) => ({ role: msg.role, parts: [{ text: msg.text }] }));
      const systemInstruction = generateContext(t);

      let response: Awaited<ReturnType<typeof ai.models.generateContent>> | undefined;
      let lastError: unknown;
      for (const model of MODELS) {
        try {
          response = await ai.models.generateContent({ model, contents: history, config: { systemInstruction } });
          break;
        } catch (err) {
          lastError = err;
          // Only try the next model if this one doesn't exist (e.g. retired); any other error is final.
          if (errorStatus(err) !== 404) throw err;
        }
      }
      if (!response) throw lastError;

      const modelText = response.text ?? '';
      setMessages((prev) => [...prev, { role: 'model', text: modelText || 'Sorry, I could not generate a response.' }]);
    } catch (error) {
      console.error('Gemini API error:', error);
      setMessages((prev) => [...prev, { role: 'model', text: describeError(error) }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Launcher */}
      <div className={`fixed bottom-5 right-5 z-40 transition-all duration-300 sm:bottom-7 sm:right-7 ${isOpen ? 'pointer-events-none scale-90 opacity-0' : 'scale-100 opacity-100'}`}>
        <button
          onClick={() => setIsOpen(true)}
          className="group flex items-center rounded-full bg-ink p-1.5 text-white shadow-[0_20px_40px_-12px_rgba(15,14,36,0.5)] ring-2 ring-white/50 transition-all hover:bg-primary"
          aria-label="Open chat"
        >
          <span className="relative grid h-11 w-11 place-items-center rounded-full bg-accent">
            <ChatBubbleIcon className="h-5 w-5" />
            <span className="absolute right-0 top-0 h-3 w-3 rounded-full border-2 border-ink bg-emerald-400" />
          </span>
        </button>
      </div>

      {/* Panel */}
      <div
        className={`fixed inset-0 z-50 flex flex-col overflow-hidden bg-white shadow-2xl transition-all duration-300 origin-bottom-right sm:inset-auto sm:bottom-7 sm:right-7 sm:h-[600px] sm:max-h-[calc(100dvh-3.5rem)] sm:w-[400px] sm:rounded-4xl sm:ring-1 sm:ring-ink/10 ${
          isOpen ? 'scale-100 opacity-100' : 'pointer-events-none scale-95 opacity-0'
        }`}
        role="dialog"
        aria-label="NaxBot Assistant"
      >
        <div className="relative isolate flex items-center justify-between overflow-hidden bg-gradient-to-br from-primary to-ink px-5 py-4 text-white">
          <div className="absolute -right-10 -top-10 -z-10 h-32 w-32 rounded-full bg-accent/40 blur-2xl" />
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-white/10"><ChatBubbleIcon className="h-5 w-5" /></span>
            <div>
              <h3 className="text-base font-semibold">NaxBot Assistant</h3>
              <p className="flex items-center gap-1.5 text-xs text-white/60"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Naxcuure Healthcare</p>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="grid h-9 w-9 place-items-center rounded-full transition-colors hover:bg-white/15" aria-label="Close chat">
            <CloseIcon className="h-5 w-5" />
          </button>
        </div>

        <div ref={chatContentRef} className="flex-1 space-y-3 overflow-y-auto bg-canvas p-4">
          {messages.map((message, index) => (
            <div key={index} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div
                className={`max-w-[82%] whitespace-pre-line rounded-3xl px-4 py-3 text-sm leading-relaxed ${
                  message.role === 'user' ? 'rounded-br-md bg-primary text-white' : 'rounded-bl-md bg-white text-ink ring-1 ring-ink/5'
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="flex items-center gap-1.5 rounded-3xl rounded-bl-md bg-white px-4 py-4 ring-1 ring-ink/5">
                {[0, 150, 300].map((d) => (
                  <span key={d} className="h-2 w-2 animate-bounce rounded-full bg-primary/50" style={{ animationDelay: `${d}ms` }} />
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="border-t border-ink/5 bg-white p-3">
          <form onSubmit={handleSendMessage} className="flex items-center gap-2 rounded-full bg-canvas p-1.5 ring-1 ring-ink/10 focus-within:ring-2 focus-within:ring-primary">
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="Ask about Naxcuure..."
              className="flex-1 bg-transparent px-3 text-sm text-ink placeholder:text-ink/40 focus:outline-none"
              disabled={isLoading}
              aria-label="Message"
            />
            <button
              type="submit"
              disabled={isLoading || !userInput.trim()}
              className="grid h-10 w-10 place-items-center rounded-full bg-accent text-white transition-colors hover:bg-primary disabled:bg-ink/20"
              aria-label="Send message"
            >
              <SendIcon className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Chatbot;

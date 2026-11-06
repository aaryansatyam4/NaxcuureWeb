import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ChatMessage } from '../types';
import { ChatBubbleIcon, CloseIcon, SendIcon } from './icons';

/** Error carrying the HTTP status and reason returned by /api/chat. */
class ChatError extends Error {
  constructor(public status: number, public reason: string) {
    super(`${status} ${reason}`);
  }
}

/** Visitor-friendly message that still tells the site owner what went wrong (the code in brackets). */
const describeError = (err: unknown): string => {
  if (!(err instanceof ChatError)) return 'Could not reach the assistant. Please check your connection and try again.';
  const { status, reason } = err;
  if (reason === 'NOT_CONFIGURED') return 'Sorry, the assistant is not set up yet. (no API key on the server)';
  if (reason === 'API_KEY_INVALID') return 'Sorry, the assistant is not configured correctly right now. (invalid API key)';
  if (reason === 'CONSUMER_SUSPENDED') return 'Sorry, the assistant is temporarily unavailable. (403 — Google project suspended)';
  if (status === 429) return 'NaxBot is getting a lot of questions right now. Please try again in a minute. (429)';
  if (status === 403) return `Sorry, the assistant is temporarily unavailable. (403 — ${reason})`;
  if (reason === 'MODEL_NOT_FOUND') return 'Sorry, the assistant is temporarily unavailable. (404 — model not found)';
  if (status >= 500) return `The assistant service is having trouble. Please try again shortly. (${status})`;
  return `Sorry, I encountered an error. Please try again. (${status} ${reason})`;
};

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [userInput, setUserInput] = useState('');
  const { language } = useLanguage();
  const chatContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([{ role: 'model', text: "Hello! I'm NaxBot, your virtual assistant for Naxcuure. How can I help you today?" }]);
    }
  }, [isOpen, messages.length]);

  useEffect(() => {
    chatContentRef.current?.scrollTo({ top: chatContentRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages, isLoading]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInput.trim() || isLoading) return;

    const userMessage: ChatMessage = { role: 'user', text: userInput.trim() };
    setMessages((prev) => [...prev, userMessage]);
    setUserInput('');
    setIsLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ messages: [...messages, userMessage], language }),
      });
      const data = (await res.json().catch(() => null)) as { text?: string; reason?: string } | null;
      if (!res.ok || !data) throw new ChatError(res.status, data?.reason ?? 'UNREACHABLE');
      setMessages((prev) => [...prev, { role: 'model', text: data.text || 'Sorry, I could not generate a response.' }]);
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

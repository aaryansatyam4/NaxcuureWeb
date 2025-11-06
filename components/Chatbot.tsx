import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';
import { useLanguage } from '../context/LanguageContext';
import { ChatMessage, Content } from '../types';
import { ChatBubbleIcon, CloseIcon, SendIcon, SpinnerIcon } from './icons';

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [userInput, setUserInput] = useState('');
  const { t } = useLanguage();
  const chatContentRef = useRef<HTMLDivElement>(null);

  // instantiate Google GenAI client (ensure API key is set in env)
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });

  // initial greeting when chat opens (keeps it simple — product detail is NOT here)
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          role: 'model',
          text: "Hello! I'm NaxBot, your virtual assistant for Naxcuure. How can I help you today?"
        }
      ]);
    }
  }, [isOpen]);

  // auto-scroll to bottom when messages or loading state change
  useEffect(() => {
    chatContentRef.current?.scrollTo(0, chatContentRef.current.scrollHeight);
  }, [messages, isLoading]);

  /**
   * generateContext
   * Builds the system instruction + site content that will be provided to the model.
   *
   * NOTE:
   * - We explicitly instruct the model to mention "Naxcuure has over 200 products" and
   *   to refer users to the Contact page WHEN the user asks about product counts, catalogs,
   *   pricing, availability, ordering, or similar product-specific queries.
   * - We DO NOT put that marketing line into the initial greeting; it will be used only when relevant.
   */
  const generateContext = (content: Content['en']) => {
    const home = `
# Naxcuure Home Page Information
- Main Slogan: ${content.home.heroTitle}: ${content.home.heroSubtitle}
- Announcement: ${content.home.announcement.title} — ${content.home.announcement.text}
- Commitment: ${content.home.section1Title}: ${content.home.section1Text} ${content.home.section1P2}
- Presence: ${content.home.section2Title}: ${content.home.section2Text}
- Future: ${content.home.section3Title}: ${content.home.section3Text}
    `;

    const about = `
# About Naxcuure
- Description: ${content.about.p1} ${content.about.p2} ${content.about.p3}
- Mission: ${content.about.missionTitle}: ${content.about.missionText}
- Vision: ${content.about.visionTitle}: ${content.about.visionText}
- Values: ${content.about.values.map(v => `${v.title}: ${v.text}`).join('; ')}
    `;

    const products = `
# Products
- Intro: ${content.products.intro}
- Product List:
${content.products.productList.map(p => `  - Name: ${p.productName}\n    Use: ${p.indicationsForUse}\n    Composition: ${p.composition}`).join('\n')}
    `;

    const quality = `
# Quality Commitment
- ${content.quality.p1} ${content.quality.p2} ${content.quality.p3}
- Promise: ${content.quality.commitmentText}
- Systems: ${content.quality.section2Text}
    `;

    const career = `
# Careers at Naxcuure
- Why join: ${content.career.introText}
- Benefits: ${content.career.benefits.join(', ')}
- Openings:
${content.career.jobs.map(j => `  - Title: ${j.title}\n    Department: ${j.department}\n    Location: ${j.location}`).join('\n')}
    `;

    // System instruction with clear guidance for product-related queries
    return `You are NaxBot — a helpful and concise AI assistant for Naxcuure (a pharmaceutical company).
Follow these rules EXACTLY:

1. ANSWER ONLY using the information provided below (do NOT fabricate facts).
2. Be friendly, professional, and concise.
3. If the user asks for medical advice, legal advice, competitor info, pricing, or anything outside of the provided information, respond that you can only provide information found on Naxcuure's website and recommend contacting the company or a qualified professional.
4. **Special product guidance** (use this only when relevant):
   - If the user asks about the number of products, product catalog, product range, availability, ordering, or asks "how many products do you have" / "do you have X product" / "can I get the catalog", then include this information in your reply:
     "Naxcuure manufactures and supplies over 200 high-quality pharmaceutical products across multiple therapeutic categories. For detailed product specifications, pricing, availability, or to request the full catalog, please contact us via the Contact page on our website."
   - Do NOT include the above sentence unless the user's question is specifically about product counts, catalog, availability, ordering, or closely related topics.

Now, here is the site information you should use to answer queries:
---
${[home, about, products, quality, career].join('\n\n')}
---`;
  };

  // handle sending a user message
  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInput.trim() || isLoading) return;

    const userMessage: ChatMessage = { role: 'user', text: userInput.trim() };
    setMessages(prev => [...prev, userMessage]);
    setUserInput('');
    setIsLoading(true);

    try {
      const systemInstruction = generateContext(t);
      // prepare history — convert to the simple shape expected by your usage
      const history = [...messages, userMessage].map(msg => ({
        role: msg.role,
        parts: [{ text: msg.text }]
      }));

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash-lite',
        contents: history,
        config: { systemInstruction },
      });

      // handle model response — keep safe fallback if shape differs
      const modelText = (response && (response.text ?? (response.outputText ?? ''))) as string;
      const modelMessage: ChatMessage = { role: 'model', text: modelText || 'Sorry, I could not generate a response.' };
      setMessages(prev => [...prev, modelMessage]);
    } catch (error) {
      console.error('Gemini API error:', error);
      const errorMessage: ChatMessage = { role: 'model', text: 'Sorry, I encountered an error. Please try again.' };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* collapsed chat button */}
      <div className={`fixed bottom-0 right-0 m-6 z-50 transition-all duration-300 ease-in-out ${isOpen ? 'opacity-0 scale-90 pointer-events-none' : 'opacity-100 scale-100'}`}>
        <button
          onClick={() => setIsOpen(true)}
          className="bg-primary hover:bg-accent text-white rounded-full p-4 shadow-2xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors"
          aria-label="Open Chat"
        >
          <ChatBubbleIcon className="w-8 h-8" />
        </button>
      </div>

      {/* open chat panel */}
      <div className={`fixed bottom-0 right-0 w-full h-full sm:bottom-6 sm:right-6 sm:w-[400px] sm:h-[580px] sm:max-h-[calc(100dvh-3rem)] z-50 bg-white sm:rounded-xl shadow-2xl flex flex-col transition-all duration-300 ease-in-out origin-bottom-right ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-90 pointer-events-none'}`}>
        {/* Header */}
        <div className="flex items-center justify-between p-4 bg-primary text-white sm:rounded-t-xl">
          <div className="flex items-center space-x-3">
            <ChatBubbleIcon className="w-6 h-6" />
            <h3 className="text-lg font-serif font-semibold">NaxBot Assistant</h3>
          </div>
          <button onClick={() => setIsOpen(false)} className="p-1 rounded-full hover:bg-white/20 transition-colors" aria-label="Close Chat">
            <CloseIcon className="w-6 h-6" />
          </button>
        </div>

        {/* Chat Content */}
        <div ref={chatContentRef} className="flex-1 p-4 overflow-y-auto bg-light-bg space-y-4">
          {messages.map((message, index) => (
            <div key={index} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[80%] p-3 rounded-2xl font-sans text-sm ${message.role === 'user' ? 'bg-primary text-white rounded-br-none' : 'bg-gray-200 text-gray-800 rounded-bl-none'}`}>
                {/* render message text */}
                {message.text}
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex justify-start">
              <div className="max-w-[80%] p-3 rounded-2xl font-sans text-sm bg-gray-200 text-gray-800 rounded-bl-none flex items-center space-x-2">
                <SpinnerIcon className="w-4 h-4 text-primary" />
                <span>Thinking...</span>
              </div>
            </div>
          )}
        </div>

        {/* Input */}
        <div className="p-4 border-t border-gray-200 bg-white sm:rounded-b-xl">
          <form onSubmit={handleSendMessage} className="flex items-center space-x-2">
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="Ask about Naxcuure..."
              className="flex-1 px-4 py-2 bg-light-bg border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={isLoading || !userInput.trim()}
              className="bg-primary text-white rounded-full p-3 hover:bg-accent transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
              aria-label="Send Message"
            >
              <SendIcon className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Chatbot;

import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { Language } from '../types';
import { content } from '../data/content';
import { ui } from '../data/ui';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (typeof content)['en'];
  u: (typeof ui)['en'];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = 'naxcuure-lang';
const isLanguage = (v: unknown): v is Language => v === 'en' || v === 'ru' || v === 'fr' || v === 'es';

const readStoredLanguage = (): Language => {
  try {
    const v = window.localStorage.getItem(STORAGE_KEY);
    return isLanguage(v) ? v : 'en';
  } catch {
    return 'en';
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(readStoredLanguage);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* storage unavailable — language still changes for this visit */
    }
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: content[language], u: ui[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

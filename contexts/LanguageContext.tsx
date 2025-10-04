import React, { createContext, useState, useEffect, ReactNode, ReactElement } from 'react';
import { translations } from '@/lib/data';

type Language = 'en' | 'ar';

export interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  // FIX: Made children optional to fix type error in _app.tsx
  children?: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps): ReactElement {
  const [lang, setLang] = useState<Language>('en');
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);
  const t = (key: string): string => {
    return (translations as any)[lang][key] || key;
  };
  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
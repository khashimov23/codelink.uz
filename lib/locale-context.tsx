"use client";

import { createContext, useContext, useState, useCallback } from "react";
import { translations, type Locale } from "./translations";

type Translations = typeof translations["en"];

interface LocaleContextValue {
  locale: Locale;
  t: Translations;
  toggleLocale: () => void;
}

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en");

  const toggleLocale = useCallback(() => {
    setLocale((prev) => (prev === "en" ? "uz" : "en"));
  }, []);

  const t = translations[locale];

  return (
    <LocaleContext.Provider value={{ locale, t, toggleLocale }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used within LocaleProvider");
  return ctx;
}

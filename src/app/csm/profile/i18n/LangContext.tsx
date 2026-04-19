"use client";
import { createContext, useContext, useState, type ReactNode } from "react";
import { langs, type Lang, type Translations } from "./Langs";

type LangContextValue = {
  t: Translations;
  lang: Lang;
  toggle: () => void;
};

const LangContext = createContext<LangContextValue>({
  t: langs.vi,
  lang: "vi",
  toggle: () => {},
});

export const LangProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>("vi");

  const toggle = () => {
    setLang((prev) => (prev === "vi" ? "en" : "vi"));
  };

  const t = langs[lang]; // 👈 Lấy trực tiếp từ langs

  return (
    <LangContext.Provider value={{ t, lang, toggle }}>
      {children}
    </LangContext.Provider>
  );
};

export const useLang = () => useContext(LangContext);

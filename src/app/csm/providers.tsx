"use client";
import { LangProvider } from "@/src/i18n/LangContext";

export function CsmProviders({ children }: { children: React.ReactNode }) {
  return <LangProvider>{children}</LangProvider>;
}

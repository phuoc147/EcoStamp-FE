"use client";
import { LangProvider } from "@/src/i18n/LangContext";

export function LoginProviders({ children }: { children: React.ReactNode }) {
  return <LangProvider>{children}</LangProvider>;
}

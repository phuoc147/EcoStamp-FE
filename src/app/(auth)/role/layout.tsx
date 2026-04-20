"use client";
import { LangProvider } from "@/src/i18n/LangContext";

export default function RoleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <LangProvider>{children}</LangProvider>;
}

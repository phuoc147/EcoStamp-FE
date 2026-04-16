"use client";

import { AuthProvider } from "@/src/providers/auth-provider";
import type { PropsWithChildren } from "react";

export function Providers({ children }: PropsWithChildren) {
  return <AuthProvider>{children}</AuthProvider>;
}

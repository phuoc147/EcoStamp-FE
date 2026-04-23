import type { ReactNode } from "react";
import BottomBar from "@/src/components/BottomBars";
import ConsumerHeader from "@/src/components/ConsumerHeader";
import { CsmProviders } from "./providers";
import { useAuth } from "@/src/providers/auth-provider";
import checkRole from "@/src/features/auth/lib";

export default async function ConsumerLayout({
  children,
}: {
  children: ReactNode;
}) {
  if (!(await checkRole("USER"))) {
    return (
      <div className="flex h-screen items-center justify-center">
        <h1 className="text-2xl font-bold">Access Denied</h1>
      </div>
    );
  }
  return (
    <CsmProviders>
      <div className="flex h-screen flex-col overflow-hidden bg-[#f2f9ea]">
        <ConsumerHeader />

        <main className="flex-1 overflow-y-auto scroll-smooth scrollbar-hide">
          {children}
        </main>

        <BottomBar role="consumer" />
      </div>
    </CsmProviders>
  );
}

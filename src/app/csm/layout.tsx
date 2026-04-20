import type { ReactNode } from "react";
import BottomBar from "@/src/components/BottomBars";
import ConsumerHeader from "@/src/components/ConsumerHeader";
import { CsmProviders } from "./providers";

export default async function ConsumerLayout({
  children,
}: {
  children: ReactNode;
}) {
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
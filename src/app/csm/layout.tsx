import type { ReactNode } from "react";
import BottomBar from "@/src/components/BottomBars";
import ConsumerHeader from "@/src/components/ConsumerHeader";
import { LangProvider } from "@/src/i18n/LangContext";
import { CsmProviders } from "./providers";

export default async function ConsumerLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <CsmProviders>
      <div className="bg-[#f2f9ea]">
        <ConsumerHeader />
        <main>{children}</main>
        <BottomBar role="consumer" />
      </div>
    </CsmProviders>
  );
}

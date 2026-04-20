import { ReactNode } from "react";
import BottomBar from "@/src/components/BottomBars";
import ConsumerHeader from "@/src/components/ConsumerHeader";

export default async function ConsumerLayout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-[#f2f9ea] min-h-screen flex flex-col">
      <ConsumerHeader />
      
      <main className="flex-1 pt-18 h-screen overflow-hidden">
        {children}
      </main>

      <BottomBar role="consumer" />
    </div>
  );
}
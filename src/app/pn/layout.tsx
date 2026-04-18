import type { ReactNode } from "react";
import PartnerHeader from "@/src/components/PartnerHeader";
import BottomBar from "@/src/components/BottomBars";
import { redirect } from "next/navigation";
import { getServerSessionUser } from "@/src/features/auth/lib";

export default async function PartnerLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#fcfdfa]">
      <PartnerHeader />
      
      <main className="pt-[72px] max-w-7xl mx-auto">
        {children}
      </main>

      <BottomBar role="partner" />
    </div>
  );
}

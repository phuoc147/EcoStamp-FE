import type { ReactNode } from "react";
import { redirect } from "next/navigation";
import { getServerSessionUser } from "@/src/lib/auth/session-server";
import BottomBar from "@/src/components/BottomBars";
import ConsumerHeader from "@/src/components/ConsumerHeader";

export default async function ConsumerLayout({
  children,
}: {
  children: ReactNode;
}) {
  // const user = await getServerSessionUser();

  // if (!user || user.role !== "consumer") {
  //   redirect("/login");
  // }

  return <div className="bg-[#f2f9ea]">
      <ConsumerHeader />
      <main>{children}</main>
      <BottomBar role="consumer" />
    </div>;
}

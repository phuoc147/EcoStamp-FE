import type { ReactNode } from "react";
import { redirect } from "next/navigation";
import BottomBar from "@/src/components/BottomBars";
import ConsumerHeader from "@/src/components/ConsumerHeader";
import { getServerSessionUser } from "@/src/features/auth/lib";

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

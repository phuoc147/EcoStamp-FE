import type { ReactNode } from "react";
import { redirect } from "next/navigation";
import { getServerSessionUser } from "@/src/lib/auth/session-server";

export default async function PartnerLayout({
  children,
}: {
  children: ReactNode;
}) {
  const user = await getServerSessionUser();

  if (!user || user.role !== "partner") {
    redirect("/login");
  }

  return <>{children}</>;
}

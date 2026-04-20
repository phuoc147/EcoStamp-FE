import type { ReactNode } from "react";
import { redirect } from "next/navigation";

export default async function PartnerLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <>{children}</>;
}

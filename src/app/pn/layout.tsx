import type { ReactNode } from "react";
import { redirect } from "next/navigation";
import checkRole from "@/src/features/auth/lib";

export default async function PartnerLayout({
  children,
}: {
  children: ReactNode;
}) {
  if (!(await checkRole("PARTNER"))) {
    return (
      <div className="flex h-screen items-center justify-center">
        <h1 className="text-2xl font-bold">Access Denied</h1>
      </div>
    );
  }
  return <>{children}</>;
}

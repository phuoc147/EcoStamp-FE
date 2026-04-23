import { useAuth } from "@/src/providers/auth-provider";
import { use, type ReactNode } from "react";
import { redirect } from "next/navigation";
import { checkExistAccount } from "@/src/features/auth/lib";

export default async function LoginLayout({
  children,
}: {
  children: ReactNode;
}) {
  if (await checkExistAccount()) {
    return redirect("/csm/home");
  }

  return (
    <div className="h-screen w-full overflow-hidden bg-[#f2f9ea]">
      {children}
    </div>
  );
}

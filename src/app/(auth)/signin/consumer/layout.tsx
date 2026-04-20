import type { ReactNode } from "react";

export default function ConsumerRegisterLayout({ children }: { children: ReactNode }) {
  return (
    <div className="h-screen w-full overflow-hidden bg-[#f2f9ea]">
      {children}
    </div>
  );
}
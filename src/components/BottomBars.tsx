"use client";

import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";

type Role = "consumer" | "partner" | "employee";

type Tab = {
  label: string;
  href: string;
  icon: string;
};

function getTabs(role: Role): Tab[] {
  switch (role) {
    case "consumer":
      return [
        { label: "Trang chủ", href: "/csm/home", icon: "home" },
        { label: "Trạm xanh", href: "/csm/map", icon: "map" },
        { label: "Quét", href: "/csm/scan", icon: "qr_code_scanner" },
        { label: "Sưu tập", href: "/csm/collection", icon: "collections" },
        { label: "Cá nhân", href: "/csm/profile", icon: "person" },
      ];
    case "partner":
      return [
        { label: "HOME", href: "/pn/dashboard", icon: "home" },
        { label: "STAFF", href: "/pn/staff-management", icon: "group" },
        { label: "SCAN", href: "/pn/scan", icon: "qr_code_scanner" },
        { label: "HISTORY", href: "/pn/history", icon: "history" },
        { label: "CAMPAIGN", href: "/pn/campaign", icon: "redeem" },
      ];
    default:
      return [];
  }
}

export default function BottomBar({ role }: { role: Role }) {
  const pathname = usePathname();
  const router = useRouter();
  const tabs = getTabs(role);

  const activeIndex = Math.max(
    0,
    tabs.findIndex((t) => pathname === t.href || pathname.startsWith(t.href + "/"))
  );

  return (
    <nav className="fixed bottom-0 left-0 right-0 flex justify-center z-50 md:hidden px-4 pb-4">
      <div className="w-full max-w-[430px]">
        <div className="relative flex justify-around items-end rounded-2xl bg-white/80 backdrop-blur-3xl py-3 shadow-[0_-12px_48px_rgba(0,0,0,0.08)] border border-white/20">
          <motion.div
            className="absolute bottom-4 h-12 w-12 rounded-2xl bg-[#1a6d2f]"
            animate={{ left: `${(activeIndex + 0.5) * (100 / tabs.length)}%` }}
            style={{ translateX: "-50%" }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          />

          {tabs.map((tab, i) => {
            const isActive = i === activeIndex;
            return (
              <button
                key={tab.href}
                onClick={() => router.push(tab.href)}
                className="relative flex flex-col items-center justify-center w-14"
              >
                <motion.span
                  animate={{
                    y: isActive ? -8 : 0,
                    scale: isActive ? 1.1 : 1,
                    color: isActive ? "#ffffff" : "#94a3b8",
                  }}
                  className="material-symbols-outlined z-10 text-[24px]"
                >
                  {tab.icon}
                </motion.span>
                <motion.span
                  animate={{ opacity: isActive ? 0 : 1, y: isActive ? 10 : 0 }}
                  className="text-[9px] font-bold text-slate-400 mt-1 uppercase"
                >
                  {tab.label}
                </motion.span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
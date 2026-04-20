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
        { label: "Trang chủ", href: "/pn/dashboard", icon: "home" },
        { label: "Nhân sự", href: "/pn/staff", icon: "people" },
        { label: "Trạm xanh", href: "/pn/status", icon: "apartment" },
        { label: "Lịch sử", href: "/pn/history", icon: "history" },
        { label: "Chiến dịch", href: "/pn/campaign", icon: "campaign" },
      ];
    case "employee":
      return [
        { label: "Trang chủ", href: "/pn/dashboard", icon: "home" },
        { label: "Trạm xanh", href: "/pn/status", icon: "apartment" },
        { label: "Lịch sử", href: "/pn/history", icon: "history" },
        { label: "Chiến dịch", href: "/pn/campaign", icon: "campaign" },
      ];
    default:
      return [];
  }
}

export default function BottomBar({ role }: { role: Role }) {
  const pathname = usePathname();
  const router = useRouter();
  const tabs = getTabs(role);

  const activeIndex = tabs.findIndex((t) => pathname === t.href);

  return (
    /* Bottom nav cho mobile */
    <nav className="w-full border-t border-gray-200 rounded-t-2xl">
      <div className="relative flex justify-around items-end bg-white py-2 rounded-t-2xl shadow-[0_-2px_8px_rgba(0,0,0,0.04)]">
        <motion.div
          className="absolute bottom-3 h-13 w-13 rounded-2xl bg-[#267a32]"
          animate={{ left: `${((activeIndex + 0.5) * 100) / tabs.length}%` }}
          style={{ translateX: "-50%" }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
        />

        {tabs.map((tab, i) => {
          const isActive = i === activeIndex;
          return (
            <button
              key={tab.href}
              onClick={() => router.push(tab.href)}
              className="relative flex flex-col items-center justify-center w-16 py-2"
            >
              <motion.span
                animate={{
                  scale: isActive ? 1.1 : 1,
                  color: isActive ? "#ffffff" : "#000000",
                }}
                className="material-symbols-outlined text-2xl z-10"
              >
                {tab.icon}
              </motion.span>
              <motion.span
                animate={{
                  color: isActive ? "#ffffff" : "#000000",
                }}
                className="text-[10px] font-semibold mt-0.5"
              >
                {tab.label}
              </motion.span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
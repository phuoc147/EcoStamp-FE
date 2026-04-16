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
        { label: "Trang chủ", href: "/home", icon: "home" },
        { label: "Trạm xanh", href: "/map", icon: "map" },
        { label: "Quét", href: "/scan", icon: "qr_code_scanner" },
        { label: "Sưu tập", href: "/collection", icon: "collections" },
        { label: "Cá nhân", href: "/profile", icon: "person" },
      ];

    case "partner":
      return [
        { label: "Dashboard", href: "/dashboard", icon: "home" },
        { label: "Campaign", href: "/campaign", icon: "map" },
        { label: "Verify", href: "/verification", icon: "qr_code_scanner" },
      ];

    case "employee":
      return [{ label: "Employee", href: "/employee", icon: "person" }];
  }
}

export default function BottomBar({ role }: { role: Role }) {
  const pathname = usePathname();
  const router = useRouter();

  const tabs = getTabs(role);

  const activeIndex = Math.max(
    0,
    tabs.findIndex(
      (t) => pathname === t.href || pathname.startsWith(t.href + "/")
    )
  );

  return (
    <nav className="fixed bottom-0 left-0 right-0 flex justify-center z-50">
      <div className="w-full max-w-[430px]">
        <div className="relative flex justify-around items-end rounded-t-2xl bg-emerald-50/70 backdrop-blur-3xl py-3 shadow-[0_-12px_48px_rgba(0,0,0,0.06)]">

          {/* INDICATOR */}
          <motion.div
            className="absolute bottom-4 h-14 w-14 rounded-full bg-emerald-600"
            animate={{
              left: `${(activeIndex + 0.5) * (100 / tabs.length)}%`,
            }}
            style={{
              translateX: "-50%",
            }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          />

          {tabs.map((tab, i) => {
            const isActive = i === activeIndex;

            return (
              <button
                key={tab.href}
                onClick={() => router.push(tab.href)}
                className="relative flex flex-col items-center justify-center w-16"
              >
                {/* ICON */}
                <motion.span
                animate={{
                    y: isActive ? -10 : 0,
                    scale: isActive ? 1.2 : 1,
                    color: isActive ? "#ffffff" : "#065f46",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="material-symbols-outlined z-10"
                >
                {tab.icon}
                </motion.span>

                {/* LABEL */}
                <motion.span
                  animate={{
                    opacity: isActive ? 0 : 1,
                    y: isActive ? 8 : 0,
                  }}
                  className="text-[10px] font-semibold tracking-wider text-emerald-800/50"
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
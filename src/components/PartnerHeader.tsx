"use client";

import { Bell, Sprout } from "lucide-react";

export default function PartnerHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#fcfdfa]/80 backdrop-blur-xl border-b border-gray-100">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 bg-[#1a6d2f] rounded-xl flex items-center justify-center text-white shadow-sm">
            <Sprout className="w-5 h-5" />
          </div>
          <span className="text-xl font-bold tracking-tight text-[#1a6d2f]">
            Trạm xanh
          </span>
        </div>

        <div className="flex items-center gap-4">
          <button className="p-2.5 bg-white rounded-full shadow-sm text-gray-500 border border-gray-50 hover:bg-gray-50 transition-colors">
            <Bell className="w-5 h-5" />
          </button>
          
          <div className="h-10 w-10 overflow-hidden rounded-full border-2 border-white shadow-sm">
            <img
              className="h-full w-full object-cover"
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Aneka"
              alt="Partner Profile"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
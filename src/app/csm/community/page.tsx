"use client";

import { useState } from "react";
import FeedTab from "./_components/FeedTab";
import ValidationTab from "./_components/ValidationTab";
import LeaderboardTab from "./_components/LeaderboardTab";

export default function CommunityPage() {
  const [activeTab, setActiveTab] = useState<"feed" | "verify" | "rank">("feed");

  return (
    // 1. Khóa thanh cuộn trình duyệt và căn giữa ứng dụng trên desktop
    <div className="h-screen w-full bg-white flex justify-center overflow-hidden">
      
      {/* 2. Khung hình Mobile cố định */}
      <div className="relative h-full w-full max-w-2xl bg-[#f2f9ea] flex flex-col shadow-2xl border-x border-gray-100 overflow-hidden">
        
        {/* Tabs Navigation */}
        <div className="flex px-6 border-b border-gray-100 bg-white/80 backdrop-blur-md shrink-0 z-10">
          {(["feed", "verify", "rank"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-4 text-sm font-bold transition-all relative ${
                activeTab === tab ? "text-[#176a21]" : "text-gray-400"
              }`}
            >
              {tab === "feed" && "Bảng tin"}
              {tab === "verify" && "Xác thực"}
              {tab === "rank" && "Xếp hạng"}
              {activeTab === tab && (
                <div className="absolute bottom-0 left-1/4 right-1/4 h-1 bg-[#176a21] rounded-t-full" />
              )}
            </button>
          ))}
        </div>

        {/* 3. Vùng nội dung duy nhất được cuộn, ẩn scrollbar triệt để */}
        <main className="flex-1 overflow-y-auto no-scrollbar scroll-smooth">
          <div className="px-4 py-6 pb-40">
            {activeTab === "feed" && <FeedTab />}
            {activeTab === "verify" && <ValidationTab />}
            {activeTab === "rank" && <LeaderboardTab />}
          </div>
        </main>

        {/* 4. Nút Edit được đặt ABSOLUTE so với khung hình ứng dụng */}
        {activeTab === "feed" && (
          <button className="absolute bottom-28 right-6 z-30 w-14 h-14 bg-[#176a21] text-white rounded-full shadow-xl flex items-center justify-center active:scale-95 transition-all border-4 border-white">
            <span className="material-symbols-outlined text-2xl">edit</span>
          </button>
        )}
      </div>
    </div>
  );
}
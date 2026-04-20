"use client";

import { useRouter } from "next/navigation";

export default function GeoSetup({ onBack }: { onBack: () => void }) {
  const router = useRouter();
  
  return (
    <div className="flex flex-col gap-8 animate-in fade-in slide-in-from-right-4 duration-500">
      <div className="flex flex-col items-center gap-3 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#e8f5e9] text-[#176a21]">
          <span className="material-symbols-outlined text-3xl">location_on</span>
        </div>
        <h1 className="text-2xl font-black text-[#176a21]">Vị trí của bạn</h1>
        <p className="text-xs font-medium text-[#575e52]">Chúng tôi cần vị trí để tìm trạm xanh gần nhất</p>
      </div>

      <div className="rounded-[32px] bg-white p-8 shadow-sm border border-gray-50 flex flex-col items-center gap-6">
        <div className="h-48 w-full rounded-2xl bg-gray-100 flex items-center justify-center border-2 border-dashed border-gray-200">
          <p className="text-[11px] font-bold text-gray-400">Bản đồ thu nhỏ</p>
        </div>
        <button className="flex h-12 w-full items-center justify-center gap-2 rounded-2xl border-2 border-[#c1fd7c] bg-[#f0fdf4] text-sm font-black text-[#176a21] active:scale-[0.98] transition-all">
          <span className="material-symbols-outlined text-lg">my_location</span>
          Sử dụng vị trí hiện tại
        </button>
      </div>

      <div className="flex gap-4">
        <button onClick={onBack} className="flex-1 h-13 rounded-2xl border border-gray-200 font-bold text-[#575e52] active:scale-[0.98]">
          Quay lại
        </button>
        <button onClick={() => router.push("/login")} className="flex-2 h-13 bg-[#176a21] rounded-2xl font-bold text-white shadow-md active:scale-[0.98]">
          Hoàn tất
        </button>
      </div>
    </div>
  );
}
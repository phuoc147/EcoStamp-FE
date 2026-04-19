export default function RecentHistoryTimeline() {
  return (
    <div className="bg-[#e9f0df] rounded-[24px] p-5 mb-8">
      <h3 className="text-[10px] font-bold text-gray-500 tracking-wider mb-4 uppercase flex items-center gap-1.5">
        <span className="material-symbols-outlined text-[14px]">history</span>
        Lịch sử gần đây
      </h3>

      <div className="space-y-4">
        {/* Item 1 */}
        <div className="flex gap-3 relative">
          <div className="absolute left-[3px] top-3 bottom-[-20px] w-0.5 bg-[#d1e0c5]" />
          <div className="w-2 h-2 rounded-full bg-[#2a833b] mt-1.5 relative z-10 ring-4 ring-[#e9f0df]" />
          <div>
            <h4 className="text-[11px] font-bold text-[#1c3f25]">Cập nhật 08:30 Sáng</h4>
            <p className="text-[10px] text-gray-500">Bởi Station Manager</p>
          </div>
        </div>

        {/* Item 2 */}
        <div className="flex gap-3 relative">
          <div className="w-2 h-2 rounded-full bg-gray-400 mt-1.5 relative z-10 ring-4 ring-[#e9f0df]" />
          <div>
            <h4 className="text-[11px] font-bold text-[#1c3f25]">Cập nhật 09:15 Sáng (Hôm qua)</h4>
            <p className="text-[10px] text-gray-500">Hệ thống tự động</p>
          </div>
        </div>
      </div>
    </div>
  );
}
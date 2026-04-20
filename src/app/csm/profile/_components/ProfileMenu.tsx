export default function ProfileMenu() {
    const MENU = [
        { icon: "history", label: "Lịch sử giao dịch" },
        { icon: "settings", label: "Cài đặt ứng dụng" },
        { icon: "language", label: "Ngôn ngữ", value: "Tiếng Việt" },
        { icon: "help", label: "Trợ giúp & Hỗ trợ" },
    ];
  
    return (
        <section className="space-y-3">
            <h2 className="text-[11px] font-black uppercase tracking-widest text-[#7b5e52]">Hoạt động & Cài đặt</h2>
            <div className="overflow-hidden rounded-[28px] bg-white shadow-sm border border-gray-50">
            {MENU.map((item, idx) => (
                <div key={idx}>
                <button className="flex w-full items-center justify-between p-4 transition-colors hover:bg-gray-50">
                    <div className="flex items-center gap-4">
                    <span className="material-symbols-outlined text-[#176a21]">{item.icon}</span>
                    <span className="text-sm font-medium text-[#2a3127]">{item.label}</span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-400">
                    {item.value && <span className="text-xs font-bold text-[#176a21] mr-1">{item.value}</span>}
                    <span className="material-symbols-outlined text-lg">chevron_right</span>
                    </div>
                </button>
                {idx < MENU.length - 1 && <div className="mx-4 h-[1px] bg-gray-50" />}
                </div>
            ))}
            </div>
        </section>
    );
}
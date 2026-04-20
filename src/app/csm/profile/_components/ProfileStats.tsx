export default function ProfileStats() {
    return (
        <section className="space-y-4">
            {/* Hero Stat Card */}
            <div className="relative overflow-hidden rounded-[32px] bg-[#9df197] p-6 shadow-sm">
            <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-[#176a21]/5 blur-2xl" />
            <p className="text-[10px] font-bold uppercase tracking-widest text-[#005c15] opacity-70">
                Tổng rác thải đã cứu
            </p>
            <div className="mt-1 flex items-baseline gap-2">
                <span className="text-4xl font-black text-[#005c15]">124.5</span>
                <span className="text-xl font-bold text-[#005c15]">kg</span>
            </div>
            <div className="mt-4 inline-flex items-center gap-1 rounded-full bg-[#176a21]/10 px-3 py-1 text-[10px] font-bold text-[#176a21]">
                <span className="material-symbols-outlined text-xs">trending_up</span>
                +12% so với tháng trước
            </div>
            </div>
    
            {/* Mini Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
            <div className="rounded-[28px] bg-white p-5 shadow-sm border border-gray-50">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f7c7b7] mb-3 text-[#603f33]">
                <span className="material-symbols-outlined">co2</span>
                </div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">CO2 GIẢM</p>
                <p className="text-xl font-black text-[#2a3127]">42.8 kg</p>
            </div>
            <div className="rounded-[28px] bg-white p-5 shadow-sm border border-gray-50">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 mb-3 text-orange-600">
                <span className="material-symbols-outlined">water_drop</span>
                </div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">NƯỚC TIẾT KIỆM</p>
                <p className="text-xl font-black text-[#2a3127]">1,200 L</p>
            </div>
            </div>
        </section>
    );
}
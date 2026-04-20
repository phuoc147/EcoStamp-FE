export default function ProfileQR() {
    return (
        <section className="space-y-3">
            <h2 className="text-[11px] font-black uppercase tracking-widest text-[#7b5e52]">Mã QR cá nhân</h2>
            <button className="w-full rounded-[32px] bg-white p-8 shadow-sm border border-gray-50 flex flex-col items-center gap-4 transition-transform active:scale-[0.98]">
            <div className="h-28 w-28 rounded-2xl border-2 border-dashed border-green-200 bg-[#f4f9f4] flex items-center justify-center">
                <span className="material-symbols-outlined text-6xl text-[#176a21]">qr_code_2</span>
            </div>
            <div className="text-center">
                <p className="text-sm font-black text-[#2a3127]">Nhấn để mở mã QR</p>
                <p className="text-[10px] font-medium text-gray-400 mt-1">Dùng để xác nhận tại các trạm thu gom</p>
            </div>
            </button>
        </section>
    );
}
export default function LoginHeader() {
    return (
        <div className="mb-10 flex flex-col items-center gap-3">
        <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-[#176a21] text-white shadow-lg">
            <span className="material-symbols-outlined text-4xl">eco</span>
        </div>
        <h1 className="text-3xl font-black text-[#176a21]">EcoStamp</h1>
        <p className="text-xs font-medium text-[#575e52]">Hành trình xanh, tích điểm nhanh</p>
        </div>
    );
}
export default function HomeHero() {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-[#9df197] p-6 shadow-sm">
      <div className="absolute -top-12 -right-12 h-48 w-48 rounded-full bg-[#176a21]/10 blur-3xl" />

      <div className="relative z-10 flex flex-col gap-1">
        <span className="text-[10px] font-semibold uppercase tracking-wide text-[#005c15]">
          Tiến độ của bạn
        </span>

        <div className="flex items-baseline gap-2">
          <h1 className="text-3xl font-black text-[#005c15]">Chuỗi 7 ngày</h1>
          <span className="text-xl">🔥</span>
        </div>

        <div className="mt-4 flex gap-3">
          <div className="flex items-center gap-2 rounded-2xl border border-[#176a21]/5 bg-[#176a21]/10 px-3 py-1.5">
            <span className="material-symbols-outlined text-xs text-[#176a21]">
              bolt
            </span>
            <span className="text-xs font-bold text-[#176a21]">Hệ số 1.2x</span>
          </div>
          <div className="flex items-center gap-2 rounded-2xl bg-[#ffffff]/60 px-3 py-1.5">
            <span className="text-xs font-medium text-[#575e52]">Cố lên nhé!</span>
          </div>
        </div>
      </div>
    </section>
  );
}
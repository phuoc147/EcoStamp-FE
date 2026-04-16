export default function HomeStats() {
  return (
    <section className="grid grid-cols-2 gap-4">
      <div className="col-span-2 flex flex-col gap-2 rounded-3xl bg-[#ffffff] p-6">
        <span className="flex items-center gap-2 text-sm font-medium text-[#575e52]">
          <span className="material-symbols-outlined scale-75 text-[#176a21]">
            token
          </span>
          Tổng tem đã tích lũy
        </span>
        <span className="text-5xl font-black text-[#176a21]">1,240</span>
      </div>

      <div className="flex flex-col gap-3 rounded-3xl bg-[#ebf3e3] p-6">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f7c7b7]">
          <span className="material-symbols-outlined text-[#603f33]">co2</span>
        </div>
        <div>
          <span className="block text-2xl font-bold text-[#2a3127]">42.5 kg</span>
          <span className="text-xs font-medium uppercase tracking-wider text-[#575e52]">
            CO2 đã giảm
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-3 rounded-3xl bg-[#ebf3e3] p-6">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#c1fd7c]">
          <span className="material-symbols-outlined text-[#396100]">park</span>
        </div>
        <div>
          <span className="block text-2xl font-bold text-[#2a3127]">12 Cây</span>
          <span className="text-xs font-medium uppercase tracking-wider text-[#575e52]">
            Cây được cứu
          </span>
        </div>
      </div>
    </section>
  );
}

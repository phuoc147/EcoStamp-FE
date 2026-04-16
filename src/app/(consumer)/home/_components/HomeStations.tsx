const STATIONS = [
  {
    name: "GreenPoint Landmark 81",
    distance: "Cách 450m",
    status: "Mở",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAkdyXzjg6wBMqnjnDUZg2zkLxO_Z7AHfoXuKHUrAhfnxEHZuwuxQi0D-jTcSvfxGZS9PZzjvfnmcqywLEqpD2fTEUrlzFxItpIBpn_ybWinr4RhX2b8_hlrx7Wx_sZaVon-efwRg1sOJs7xO_UNfFTceOHsfVhl8T_5Rc4oOU6zOSthALFKcZ0Z9ca9mKleCgT_DVFqDojb_oZg2NAD13ccADL6RtAbSGUrPnsdOexlckrKzeMQT_LmzvbFl0HOojL7082tOvxwJnQ",
    statusClass: "bg-[#c1fd7c] text-[#396100]",
  },
  {
    name: "EcoHub District 1",
    distance: "Cách 1.2km",
    status: "Đầy",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCLitjnwo1Ss-rOo8ra-vWUQ02egcJnK0SuF7xTFGq-Xu7pAT8E7oaJll4hVltqs3gIV12MmjTsoPH_fS8VW1Hpzcy5oMKea6D92s_97t3X8WFJeSmh8-SivxiFNVNu1Ody9aCnXOgLs-ZzAVfNuS8wpXRAHFvWGxRR_WL_grW3NWlJQWqw7J6y_zIvIU1ADUWjJ-yXyZenVeun9lUAnHglTXqGuwXdOYmmj3EZKokTcbBQfTn-ZD2-7j0afdn2n7KDG1E8lSAAJqfr",
    statusClass: "bg-[#f7c7b7] text-[#603f33]",
  },
];

export default function HomeStations() {
  return (
    <section className="space-y-4">
      <div className="flex items-end justify-between">
        <h2 className="text-xl font-extrabold text-[#2a3127]">Trạm Xanh gần bạn</h2>
        <button type="button" className="text-sm font-bold text-[#176a21]">
          Xem tất cả
        </button>
      </div>

      <div className="-mx-6 flex gap-4 overflow-x-auto px-6 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {STATIONS.map((station) => (
          <article
            key={station.name}
            className="min-w-70 overflow-hidden rounded-3xl bg-[#ffffff] shadow-sm"
          >
            <div className="h-32 bg-[#e2ebda]">
              <img
                src={station.image}
                alt={station.name}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-2 p-4">
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-lg font-bold leading-tight text-[#2a3127]">
                  {station.name}
                </h3>
                <span
                  className={`rounded-full px-2 py-1 text-[10px] font-black uppercase ${station.statusClass}`}
                >
                  {station.status}
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm text-[#575e52]">
                <span className="material-symbols-outlined text-sm">near_me</span>
                <span>{station.distance}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

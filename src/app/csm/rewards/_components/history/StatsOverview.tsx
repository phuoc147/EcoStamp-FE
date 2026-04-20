export default function StatsOverview() {
  return (
    <div className="flex gap-4">
      <div className="bg-white rounded-[28px] p-5 flex-1 shadow-sm border border-gray-50">
        <p className="text-[9px] font-black text-gray-400 mb-1 uppercase tracking-wider">Tổng tem tích lũy</p>
        <h3 className="text-2xl font-black text-[#1c3f25]">1.240 <span className="text-[10px] font-bold text-[#00875a]">Tem</span></h3>
      </div>
      <div className="bg-white rounded-[28px] p-5 flex-1 shadow-sm border border-gray-50">
        <p className="text-[9px] font-black text-gray-400 mb-1 uppercase tracking-wider">CO2 giảm thiểu</p>
        <h3 className="text-2xl font-black text-[#1c3f25]">45.2 <span className="text-sm">kg</span></h3>
      </div>
    </div>
  );
}
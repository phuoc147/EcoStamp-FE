export default function QuickStats({ points, co2, rank }: any) {
  return (
    <div className="grid grid-cols-3 gap-3">
      <StatItem label="Tem" value={points} color="#1c3f25" />
      <StatItem label="CO2 (kg)" value={co2} color="#00875a" />
      <StatItem label="Hạng" value={rank} color="#00875a" />
    </div>
  );
}

function StatItem({ label, value, color }: any) {
  return (
    <div className="bg-white p-4 rounded-3xl shadow-sm border border-gray-50 flex flex-col items-center justify-center">
      <span className="text-[9px] font-black text-gray-400 uppercase mb-1">{label}</span>
      <span className="text-lg font-black" style={{ color }}>{value}</span>
    </div>
  );
}
import { Recycle } from 'lucide-react';

const HISTORY_DATA = [
  { id: 1, title: "GreenPoint Landmark 81", detail: "Nhựa PET - 2.5kg", pts: "+25 Tem", time: "Hôm nay" },
  { id: 2, title: "EcoHub Thảo Điền", detail: "Giấy carton - 1.2kg", pts: "+12 Tem", time: "Hôm nay" },
  { id: 3, title: "Trạm thu gom Quận 1", detail: "Lon nhôm - 4.5kg", pts: "+45 Tem", time: "Hôm qua" },
];

export default function ActivityTimeline() {
  return (
    <div className="flex flex-col gap-6">
      {/* Logic chia group theo ngày có thể làm ở đây */}
      <div className="flex flex-col gap-3">
        {HISTORY_DATA.map(item => (
          <div key={item.id} className="bg-white p-4 rounded-3xl flex items-center gap-4 shadow-sm border border-gray-50">
            <div className="w-12 h-12 bg-[#f4faec] rounded-full flex items-center justify-center text-[#1c3f25]">
              <Recycle size={20} />
            </div>
            <div className="flex-1">
              <h6 className="text-sm font-black text-[#1c3f25] leading-tight">{item.title}</h6>
              <p className="text-[10px] text-gray-400 font-bold">{item.detail}</p>
            </div>
            <span className="text-xs font-black text-[#00875a]">{item.pts}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
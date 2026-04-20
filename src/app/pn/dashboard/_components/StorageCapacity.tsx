import { Recycle, FileText, GlassWater, Wrench } from 'lucide-react';

const items = [
  { icon: Recycle, name: 'Nhựa (Plastic)', percent: 82, color: 'bg-red-600', left: '125kg' },
  { icon: FileText, name: 'Giấy (Paper)', percent: 45, color: 'bg-green-500', left: '580kg' },
  { icon: GlassWater, name: 'Thủy tinh (Glass)', percent: 12, color: 'bg-lime-400', left: '880kg' },
  { icon: Wrench, name: 'Kim loại (Metal)', percent: 68, color: 'bg-orange-800', left: '320kg' },
];

export default function StorageCapacity() {
  return (
    <section className="bg-white rounded-4xl p-5 shadow-sm mb-5">
      <div className="flex justify-between items-start mb-5">
        <div>
          <h2 className="font-bold text-[#1c3f25]">Khả năng lưu trữ hiện tại</h2>
          <p className="text-[11px] text-gray-400">Theo dõi dung lượng các loại rác thải tại trạm</p>
        </div>
        <div className="bg-[#b4f07a] text-[10px] font-black px-2 py-1 rounded-lg text-center leading-tight">
          LIVE<br/>UPDATE
        </div>
      </div>

      <div className="space-y-4">
        {items.map((item, idx) => (
          <div key={idx}>
            <div className="flex justify-between items-center mb-1.5">
              <div className="flex items-center gap-2">
                <div className="bg-gray-50 p-1.5 rounded-lg text-green-700">
                  <item.icon size={14} />
                </div>
                <span className="text-xs font-bold">{item.name}</span>
              </div>
              <span className="text-xs font-bold">{item.percent}%</span>
            </div>
            <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
              <div className={`${item.color} h-full rounded-full`} style={{ width: `${item.percent}%` }}></div>
            </div>
            <p className="text-[10px] text-gray-400 mt-1">Còn lại {item.left} sức chứa</p>
          </div>
        ))}
      </div>
    </section>
  );
}
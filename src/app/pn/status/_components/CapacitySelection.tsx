import { Check, TriangleAlert, OctagonAlert, Ban, CheckSquare } from 'lucide-react';

interface CapacitySelectionProps {
  selected: string;
  onChange: (val: string) => void;
}

const CAPACITY_OPTIONS = [
  {
    id: 'normal',
    title: 'Bình Thường (Normal)',
    desc: 'Dưới 70% công suất thiết kế',
    icon: Check,
    iconBg: 'bg-[#dcf4c9]',
    iconColor: 'text-[#2a833b]',
  },
  {
    id: 'near',
    title: 'Sắp Đầy (Near Capacity)',
    desc: 'Từ 70% đến 90% công suất',
    icon: TriangleAlert,
    iconBg: 'bg-[#fce6d5]',
    iconColor: 'text-[#d97736]',
  },
  {
    id: 'overloaded',
    title: 'Quá Tải (Overloaded)',
    desc: 'Trên 90% công suất, ưu tiên khẩn cấp',
    icon: OctagonAlert,
    iconBg: 'bg-[#fcd5d5]',
    iconColor: 'text-[#d93636]',
  },
  {
    id: 'cease',
    title: 'Ngừng Nhận (Cease Receiving)',
    desc: 'Bảo trì hoặc dừng khẩn cấp',
    icon: Ban,
    iconBg: 'bg-[#f0f0f0]',
    iconColor: 'text-[#6b7280]',
  }
];

export default function CapacitySelection({ selected, onChange }: CapacitySelectionProps) {
  return (
    <div className="mb-6">
      <div className="flex items-center gap-2 mb-4">
        <CheckSquare size={16} className="text-[#3a7d22]" />
        <h3 className="font-bold text-[#1c3f25] text-sm">Khả Năng Tiếp Nhận</h3>
      </div>

      <div className="space-y-3">
        {CAPACITY_OPTIONS.map((opt) => {
          const isSelected = selected === opt.id;
          return (
            <div 
              key={opt.id}
              onClick={() => onChange(opt.id)}
              className={`flex items-center justify-between p-4 rounded-2xl cursor-pointer transition-all border-2 ${
                isSelected ? 'bg-white border-[#2a833b] shadow-sm' : 'bg-white/60 border-transparent hover:bg-white'
              }`}
            >
              <div className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${opt.iconBg}`}>
                  <opt.icon size={20} className={opt.iconColor} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#1c3f25] leading-tight mb-0.5">{opt.title}</h4>
                  <p className="text-[10px] text-gray-400">{opt.desc}</p>
                </div>
              </div>
              
              {/* Radio Circle */}
              <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                isSelected ? 'border-[#2a833b]' : 'border-gray-200'
              }`}>
                {isSelected && <div className="w-2.5 h-2.5 rounded-full bg-[#2a833b]" />}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
import { Trophy } from 'lucide-react';

const BADGES = [
  { id: 1, label: "Năm mới", active: true },
  { id: 2, label: "Kiên trì", active: true },
  { id: 3, label: "Bền bỉ", active: true },
  { id: 4, label: "Mới tập", active: false },
];

export default function BadgeGrid() {
  return (
    <div className="grid grid-cols-4 gap-4">
      {BADGES.map(badge => (
        <div key={badge.id} className="flex flex-col items-center gap-2">
          <div className={`w-14 h-14 rounded-full flex items-center justify-center ${badge.active ? 'bg-[#e9fae3] text-[#00875a]' : 'bg-gray-100 text-gray-300'}`}>
            <Trophy size={22} strokeWidth={badge.active ? 2.5 : 1.5} />
          </div>
          <span className="text-[9px] font-bold text-gray-500">{badge.label}</span>
        </div>
      ))}
    </div>
  );
}
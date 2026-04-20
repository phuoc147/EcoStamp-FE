import { Target, Award } from 'lucide-react';
import ProgressBar from '../shared/ProgressBar';

const MISSIONS = [
  { id: 1, icon: <Target size={20} />, title: "Quét 50 món rác thải", progress: 90, label: "45/50" },
  { id: 2, icon: <Award size={20} />, title: "Mời 5 bạn bè tham gia", progress: 60, label: "3/5" },
];

export default function MissionList() {
  return (
    <div className="flex flex-col gap-3">
      {MISSIONS.map(m => (
        <div key={m.id} className="bg-white p-4 rounded-3xl flex items-center gap-4 shadow-sm border border-gray-50">
          <div className="w-12 h-12 bg-[#f4faec] rounded-2xl flex items-center justify-center text-[#1c3f25]">
            {m.icon}
          </div>
          <div className="flex-1">
            <h6 className="text-[13px] font-black text-[#1c3f25] mb-1">{m.title}</h6>
            <ProgressBar progress={m.progress} />
          </div>
          <span className="text-[10px] font-black text-[#00875a]">{m.label}</span>
        </div>
      ))}
    </div>
  );
}
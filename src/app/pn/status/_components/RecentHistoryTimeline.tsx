'use client';

interface HistoryEntry {
  id: string;
  time: string;
  description: string;
  changes: string;
}

interface RecentHistoryTimelineProps {
  history: HistoryEntry[];
}

export default function RecentHistoryTimeline({ history }: RecentHistoryTimelineProps) {
  return (
    <div className="bg-[#e9f0df] rounded-3xl p-5 mb-8">
      <h3 className="text-[10px] font-bold text-gray-500 tracking-wider mb-4 uppercase flex items-center gap-1.5">
        <span className="material-symbols-outlined text-[14px]">history</span>
        Lịch sử gần đây
      </h3>

      <div className="space-y-4">
        {history.map((item, index) => (
          <div key={item.id} className="flex gap-3 relative">
            {index < history.length - 1 && (
              <div className="absolute left-0.75 top-3 -bottom-5 w-0.5 bg-[#d1e0c5]" />
            )}
            <div className={`w-2 h-2 rounded-full mt-1.5 relative z-10 ring-4 ring-[#e9f0df] ${index === 0 ? 'bg-[#2a833b]' : 'bg-gray-400'}`} />
            <div>
              <h4 className="text-[11px] font-bold text-[#1c3f25]">{item.description} {item.time}</h4>
              <p className="text-[10px] text-gray-600 mt-0.5">{item.changes}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
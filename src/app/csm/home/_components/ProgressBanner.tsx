import React from 'react';
import { Zap } from 'lucide-react';

export default function ProgressBanner() {
  return (
    <div className="bg-linear-to-r from-[#90ea81] to-[#aef897] rounded-4xl p-6 text-[#134216] relative overflow-hidden shadow-sm">
      <p className="text-[10px] font-extrabold uppercase tracking-widest mb-1 opacity-80">
        Your Progress
      </p>
      <h2 className="text-[28px] leading-none font-black mb-5">
        7 Day Streak 🔥
      </h2>
      <div className="flex gap-2">
        <div className="bg-[#79d66a] px-3.5 py-2 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-sm">
          <Zap size={14} fill="currentColor" /> 1.2x Multiplier
        </div>
        <div className="bg-[#e9fae3] px-4 py-2 rounded-full text-xs font-bold opacity-90 shadow-sm">
          Keep it up!
        </div>
      </div>
    </div>
  );
}
import React from 'react';
import { Recycle } from 'lucide-react';

export default function TotalStamps() {
  return (
    <div className="bg-white rounded-4xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.02)] mt-4">
      <div className="flex items-center gap-1.5 mb-1">
        <div className="w-5 h-5 rounded-full bg-[#e6f4df] flex items-center justify-center">
          <Recycle size={12} className="text-[#267a32]" />
        </div>
        <p className="text-[11px] text-gray-500 font-bold uppercase tracking-wider">Total Stamps earned</p>
      </div>
      <h2 className="text-[42px] leading-tight font-black text-[#1c3f25]">
        1,240
      </h2>
    </div>
  );
}
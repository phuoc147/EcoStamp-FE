import React from 'react';
import { Wind, TreePine } from 'lucide-react';

export default function ImpactStats() {
  return (
    <div className="flex gap-4 mt-4">
      <div className="bg-white rounded-[28px] p-5 flex-1 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
        <div className="w-10 h-10 rounded-full bg-[#fceee8] text-[#e07e60] flex items-center justify-center mb-3">
          <Wind size={18} />
        </div>
        <h3 className="font-black text-xl text-[#1c3f25] mb-0.5">42.5 kg</h3>
        <p className="text-[9px] text-gray-400 font-bold uppercase tracking-widest">CO2 REDUCED</p>
      </div>
      
      <div className="bg-white rounded-[28px] p-5 flex-1 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
        <div className="w-10 h-10 rounded-full bg-[#e9f4e3] text-[#429938] flex items-center justify-center mb-3">
          <TreePine size={18} />
        </div>
        <h3 className="font-black text-xl text-[#1c3f25] mb-0.5">12 Trees</h3>
        <p className="text-[9px] text-gray-400 font-bold uppercase tracking-widest">TREES SAVED</p>
      </div>
    </div>
  );
}
import React from 'react';
import { Navigation } from 'lucide-react';

export default function NearbyStations() {
  return (
    <div className="mt-8">
      <div className="flex justify-between items-end mb-4 px-1">
        <h3 className="font-extrabold text-[#1c3f25] text-[17px]">Trạm Xanh gần bạn</h3>
        <button className="text-[11px] font-bold text-[#267a32] hover:underline">View all</button>
      </div>
      
      <div className="flex gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden pb-2 -mx-5 px-5">
        {/* Station Card 1 */}
        <div className="min-w-[220px] bg-white rounded-[28px] p-3 shadow-sm border border-gray-50">
          <div className="w-full h-[110px] bg-gray-100 rounded-[20px] mb-3 overflow-hidden">
            <img src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b" alt="Station" className="w-full h-full object-cover" />
          </div>
          <div className="px-1 pb-1">
            <div className="flex justify-between items-start gap-2 mb-1.5">
              <h4 className="font-extrabold text-[#1c3f25] text-[13px] leading-snug">GreenPoint Landmark 81</h4>
              <span className="bg-[#b4f07a] text-[#134216] text-[8px] font-black px-2 py-0.5 rounded-full shrink-0">OPEN</span>
            </div>
            <p className="text-[10px] text-gray-400 font-medium flex items-center gap-1">
              <Navigation size={10} /> 450m away
            </p>
          </div>
        </div>

        {/* Station Card 2 */}
        <div className="min-w-[220px] bg-white rounded-[28px] p-3 shadow-sm border border-gray-50">
          <div className="w-full h-[110px] bg-gray-100 rounded-[20px] mb-3 overflow-hidden">
            <img src="https://images.unsplash.com/photo-1611284446314-60a58ac0deb9" alt="Station" className="w-full h-full object-cover" />
          </div>
          <div className="px-1 pb-1">
            <div className="flex justify-between items-start gap-2 mb-1.5">
              <h4 className="font-extrabold text-[#1c3f25] text-[13px] leading-snug">EcoHub District 1</h4>
              <span className="bg-gray-200 text-gray-500 text-[8px] font-black px-2 py-0.5 rounded-full shrink-0">CLOSED</span>
            </div>
            <p className="text-[10px] text-gray-400 font-medium flex items-center gap-1">
              <Navigation size={10} /> 1.2km away
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
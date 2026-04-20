'use client';
import React from 'react';
import { Star, MapPin, CornerUpRight, X } from 'lucide-react';

export default function StationDetailCard({ station, onClose }: any) {
  return (
    <div className="absolute bottom-4 inset-x-4 z-1000 animate-in slide-in-from-bottom-8 duration-300">
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
        <button 
          onClick={onClose}
          className="absolute top-3 right-3 z-10 w-8 h-8 bg-black/20 text-white rounded-full flex items-center justify-center backdrop-blur-md"
        >
          <X size={16} />
        </button>

        <div className="p-4">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="font-black text-[#1c3f25] text-lg">{station.name}</h3>
              <p className="text-[11px] text-gray-500 font-bold flex items-center gap-1">
                <MapPin size={12} /> {station.distance} • {station.address}
              </p>
            </div>
            <div className="bg-[#e9fae3] text-[#267a32] px-2 py-1 rounded-full text-[9px] font-black">
              {station.status}
            </div>
          </div>

          <div className="flex items-center gap-1 text-orange-400 mb-4">
            <Star size={12} fill="currentColor" />
            <span className="text-xs font-black text-gray-700">{station.rating}</span>
          </div>

          <button className="w-full bg-[#1c3f25] text-white rounded-full py-3 text-xs font-extrabold flex items-center justify-center gap-2">
            <CornerUpRight size={16} /> CHỈ ĐƯỜNG NGAY
          </button>
        </div>
      </div>
    </div>
  );
}
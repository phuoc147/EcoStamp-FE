'use client';
import React from 'react';
import { Search, SlidersHorizontal, Recycle, FileText, Battery } from 'lucide-react';

const CATEGORIES = [
  { id: 'all', label: 'Tất cả', icon: null },
  { id: 'plastic', label: 'Nhựa', icon: <Recycle size={14} /> },
  { id: 'paper', label: 'Giấy', icon: <FileText size={14} /> },
  { id: 'battery', label: 'Pin', icon: <Battery size={14} /> },
];

export default function SearchAndFilter({ activeCategory, setActiveCategory }: any) {
  return (
    <div className="absolute top-4 inset-x-4 z-1000 pointer-events-none flex flex-col gap-3">
      <div className="h-12 bg-white rounded-full flex items-center px-4 shadow-xl w-full pointer-events-auto border border-gray-100">
        <Search size={20} className="text-gray-400 shrink-0" />
        <input 
          type="text" 
          placeholder="Tìm trạm thu gom gần bạn..." 
          className="flex-1 bg-transparent border-none outline-none text-sm px-3 font-medium placeholder:text-gray-400"
        />
        <button className="shrink-0 p-1 hover:bg-gray-100 rounded-full transition-colors">
          <SlidersHorizontal size={20} className="text-[#1c3f25]" />
        </button>
      </div>

      <div className="flex gap-2 overflow-x-auto [&::-webkit-scrollbar]:hidden pb-1 pointer-events-auto">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-bold whitespace-nowrap shadow-md transition-colors ${
              activeCategory === cat.id 
                ? 'bg-[#1c3f25] text-white' 
                : 'bg-white text-gray-600'
            }`}
          >
            {cat.icon && cat.icon}
            {cat.label}
          </button>
        ))}
      </div>
    </div>
  );
}
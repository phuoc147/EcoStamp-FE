import { Search, SlidersHorizontal } from 'lucide-react';

export default function SearchBar() {
  return (
    <div className="flex gap-3">
      <div className="flex-1 bg-white h-12 rounded-2xl flex items-center px-4 border border-gray-100 shadow-sm">
        <Search size={18} className="text-gray-400" />
        <input type="text" placeholder="Tìm trà sữa, cafe..." className="bg-transparent border-none outline-none text-xs px-2 w-full font-bold" />
      </div>
      <button className="w-12 h-12 bg-[#1c3f25] text-white rounded-2xl flex items-center justify-center shadow-md">
        <SlidersHorizontal size={20} />
      </button>
    </div>
  );
}
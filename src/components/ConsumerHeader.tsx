import React from 'react';
import { Bell, Leaf } from 'lucide-react';
// import Image from 'next/image';

export default function ConsumerHeader() {
  return (
    <header className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] px-6 py-4 flex items-center justify-between z-50 bg-[#f2f9ea]/80 backdrop-blur-md border-b border-white/50">
      {/* Logo */}
      <div className="flex items-center gap-1.5">
        <Leaf className="text-[#267a32]" size={22} strokeWidth={2.5} />
        <h1 className="text-xl font-extrabold text-[#1c3f25] tracking-tight">
          EcoStamp
        </h1>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-4">
        <button className="relative text-gray-600 hover:text-[#1c3f25] transition-colors active:scale-95">
          <Bell size={20} strokeWidth={2} />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border-2 border-[#f2f9ea]"></span>
        </button>
        
        {/* Avatar */}
        <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-white shadow-sm bg-gray-200">
          <img 
            src="https://i.pravatar.cc/150?img=47" 
            alt="User Avatar" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </header>
  );
}
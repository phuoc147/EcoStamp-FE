'use client'; 

import React, { useEffect, useState } from 'react';
import { Home, Map, ScanLine, Gift, User } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAV_ITEMS = [
  { path: '/csm/home', icon: Home, label: 'Home' },
  { path: '/csm/map', icon: Map, label: 'Map' },
  { path: '/csm/scan', icon: ScanLine, label: 'Scan' },
  { path: '/csm/rewards', icon: Gift, label: 'Rewards' },
  { path: '/csm/profile', icon: User, label: 'Profile' },
];

export default function BottomBar({ role }: { role?: string }) {
  const pathname = usePathname();
  
  // Logic so khớp đường dẫn chính xác hơn
  const getActiveIndex = () => {
    if (!pathname) return 0;
    
    // Ưu tiên so khớp các trang con trước (ví dụ: /scan/ai khớp với /scan)
    const index = NAV_ITEMS.findIndex(item => {
      if (item.path === '/csm/home') return pathname === '/csm/home';
      return pathname.startsWith(item.path);
    });
    
    return index !== -1 ? index : 0;
  };

  const activeIndex = getActiveIndex();

  return (
    <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] z-50 px-5 pb-5 pointer-events-none">
      <nav className="pointer-events-auto relative bg-[#ecf7df]/95 backdrop-blur-lg border border-white/60 rounded-[32px] flex items-center shadow-lg h-[72px] px-2">

        <div
          className="absolute top-0 left-2 h-full flex justify-center items-center pointer-events-none transition-transform duration-500 cubic-bezier(0.16, 1, 0.3, 1)"
          style={{
            width: 'calc((100% - 16px) / 5)', 
            transform: `translateX(${activeIndex * 100}%)` 
          }}
        >
          <div className="w-14 h-14 bg-[#00875a] rounded-full shadow-md -translate-y-3" />
        </div>

        {/* CÁC NÚT BẤM (Icons) */}
        {NAV_ITEMS.map((item, index) => {
          const isActive = index === activeIndex;
          const Icon = item.icon;

          return (
            <Link
              key={item.path}
              href={item.path}
              className="relative z-10 flex flex-col items-center justify-center w-full h-full"
            >
              <div 
                className={`transition-all duration-500 ease-out ${
                  isActive ? '-translate-y-3.5 text-white' : 'text-gray-400'
                }`}
              >
                <Icon size={isActive ? 22 : 20} strokeWidth={isActive ? 2.5 : 2} />
              </div>

              <span
                className={`absolute bottom-2 text-[9px] font-bold uppercase tracking-wider transition-all duration-300 ${
                  isActive ? 'opacity-0 translate-y-2' : 'opacity-100 text-gray-400'
                }`}
              >
                {item.label}
              </span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
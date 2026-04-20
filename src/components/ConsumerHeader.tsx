"use client";

import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function ConsumerHeader() {
  const router = useRouter();

  return (
    <header className="bg-emerald-50/70 border-b border-emerald-100 shadow-sm sticky top-0 z-50">
      {/* Container này sẽ giúp nội dung phù hợp với mobile 375px */}
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-xl text-[#176a21]">
            eco
          </span>
          <span className="text-lg font-bold tracking-tight text-[#2a3127]">
            EcoStamp
          </span>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            className="flex h-8 w-8 items-center justify-center rounded-full transition-colors hover:bg-[#dce6d4]/60"
            aria-label="Thông báo"
          >
            <span className="material-symbols-outlined text-[#176a21] text-lg">
              notifications
            </span>
          </button>

          <Link 
            href="/csm/profile" 
            className="h-8 w-8 overflow-hidden rounded-full border-2 border-[#9df197] transition-transform active:scale-95 shadow-sm"
          >
            <img
              className="h-full w-full object-cover"
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
              alt="Ảnh đại diện"
            />
          </Link>
        </div>
      </div>
    </header>
  );
}
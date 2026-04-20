import React from 'react';
import { Ticket } from 'lucide-react';

interface WalletProps {
  used: number;
  remaining: number;
}

export default function WalletSummary({ used, remaining }: WalletProps) {
  return (
    <div className="bg-[#aef897] rounded-[28px] p-5 flex items-center justify-between shadow-sm relative overflow-hidden">
      {/* Nội dung chữ */}
      <div className="relative z-10">
        <p className="text-[10px] font-black uppercase text-[#1c3f25]/60 mb-1">
          Tem đã dùng: {used}
        </p>
        <h3 className="text-xl font-black text-[#1c3f25]">
          Tem còn lại: {remaining}
        </h3>
      </div>

      {/* Icon minh họa */}
      <div className="w-12 h-12 bg-[#1c3f25] rounded-full flex items-center justify-center text-white shadow-lg relative z-10 transition-transform active:scale-90">
        <Ticket size={24} />
      </div>

      {/* Hiệu ứng decor nền */}
      <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-white/10 rounded-full" />
      <div className="absolute right-8 top-0 w-12 h-12 bg-white/5 rounded-full" />
    </div>
  );
}
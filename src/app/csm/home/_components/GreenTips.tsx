import React from 'react';
import { Lightbulb, ShoppingBag, Recycle, Leaf } from 'lucide-react';

export default function GreenTips() {
  return (
    <div className="mt-8">
      <h3 className="font-extrabold text-[#1c3f25] text-[17px] mb-4 px-1">Mẹo Xanh cho bạn</h3>
      <div className="flex gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden pb-2 -mx-5 px-5">
        <div className="min-w-[240px] bg-[#7a594f] rounded-[28px] p-5 text-white relative overflow-hidden">
          <div className="flex items-center gap-1.5 mb-2 text-white/70">
            <Lightbulb size={12} />
            <span className="text-[9px] font-black uppercase tracking-wider">Làm Sạch</span>
          </div>
          <p className="text-[13px] font-medium leading-relaxed">
            Rửa sạch hộp sữa trước khi tái chế có thể giúp giảm 30% lượng vi khuẩn và mùi hôi!
          </p>
          <Recycle size={80} className="absolute -right-4 -bottom-4 text-white opacity-5" />
        </div>

        <div className="min-w-[240px] bg-[#3a7d22] rounded-[28px] p-5 text-white relative overflow-hidden">
          <div className="flex items-center gap-1.5 mb-2 text-white/70">
            <ShoppingBag size={12} />
            <span className="text-[9px] font-black uppercase tracking-wider">Mua Sắm</span>
          </div>
          <p className="text-[13px] font-medium leading-relaxed">
            Mang theo túi vải khi đi chợ giúp bạn giảm thiểu 5-10 túi nilon mỗi ngày.
          </p>
          <Leaf size={80} className="absolute -right-4 -bottom-4 text-white opacity-10" />
        </div>
      </div>
    </div>
  );
}
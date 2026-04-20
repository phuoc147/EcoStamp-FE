import React from 'react';
import { Recycle, ShoppingBag } from 'lucide-react';

export default function RecentActivity() {
  return (
    <div className="mt-8 mb-4">
      <h3 className="font-extrabold text-[#1c3f25] text-[17px] mb-4 px-1">Recent Activity</h3>
      <div className="bg-white rounded-4xl p-2 shadow-sm border border-gray-50">
        
        <ActivityItem 
          icon={<Recycle size={16} className="text-[#267a32]" />} 
          title="Nhựa PET & Giấy" 
          desc="Landmark 81 • 2 hours ago" 
          points="+25" 
          isPositive={true} 
        />
        <div className="h-px w-full bg-gray-100 ml-14"></div>
        
        <ActivityItem 
          icon={<ShoppingBag size={16} className="text-[#1c3f25]" />} 
          title="Đổi thưởng: Túi vải" 
          desc="EcoShop • Yesterday" 
          points="-150" 
          isPositive={false} 
        />
        <div className="h-px w-full bg-gray-100 ml-14"></div>
        
        <ActivityItem 
          icon={<Recycle size={16} className="text-[#267a32]" />} 
          title="Lon nhôm" 
          desc="District 1 Hub • 2 days ago" 
          points="+12" 
          isPositive={true} 
        />

      </div>
    </div>
  );
}

function ActivityItem({ icon, title, desc, points, isPositive }: any) {
  return (
    <div className="flex items-center gap-4 p-3 hover:bg-gray-50 rounded-2xl transition-colors cursor-pointer">
      <div className="w-10 h-10 rounded-full bg-[#f5fae4] flex items-center justify-center shrink-0">
        {icon}
      </div>
      <div className="flex-1">
        <h4 className="font-extrabold text-[#1c3f25] text-[13px]">{title}</h4>
        <p className="text-[10px] text-gray-400 font-medium">{desc}</p>
      </div>
      <div className={`font-black text-[15px] pr-2 ${isPositive ? 'text-[#267a32]' : 'text-red-500'}`}>
        {points}
      </div>
    </div>
  );
}
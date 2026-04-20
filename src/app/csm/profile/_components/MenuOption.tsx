import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function MenuOption({ icon, label, href, badge, isLast }: any) {
  return (
    <Link 
      href={href} 
      className={`flex items-center justify-between p-4 hover:bg-gray-50 transition-colors ${!isLast ? 'border-b border-gray-50' : ''}`}
    >
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 bg-[#f4faec] rounded-2xl flex items-center justify-center text-[#1c3f25]">
          {icon}
        </div>
        <span className="text-sm font-black text-[#1c3f25]">{label}</span>
      </div>
      <div className="flex items-center gap-2">
        {badge && (
          <span className="bg-red-500 text-white text-[10px] font-black w-5 h-5 flex items-center justify-center rounded-full">
            {badge}
          </span>
        )}
        <ChevronRight size={18} className="text-gray-300" />
      </div>
    </Link>
  );
}
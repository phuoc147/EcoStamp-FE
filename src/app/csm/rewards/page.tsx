'use client';

import { useState } from 'react';
import TabAchievement from './_components/TabAchievement';
import TabVoucher from './_components/TabVoucher';
import TabHistory from './_components/TabHistory';

// Định nghĩa các loại Tab để tránh viết sai chính tả
type TabType = 'ACHIEVEMENT' | 'VOUCHER' | 'HISTORY';

export default function RewardsPage() {
  const [activeTab, setActiveTab] = useState<TabType>('ACHIEVEMENT');

  return (
    <div className="flex flex-col min-h-screen bg-[#f2f9ea]">
      
      {/* 1. HEADER CỦA TRANG (Tiêu đề chính) */}
      <div className="px-5 pt-4 mb-4">
        <h2 className="text-2xl font-black text-[#1c3f25]">Sưu tập của tôi</h2>
        <p className="text-[11px] text-gray-500 font-bold uppercase tracking-wider">
          Tích tem đổi quà & bảo vệ môi trường
        </p>
      </div>

      {/* 2. THANH CHUYỂN TAB (Sticky để luôn thấy khi cuộn) */}
      <div className="px-5 mb-6 sticky top-0 z-20 bg-[#f2f9ea]/80 backdrop-blur-md py-2">
        <div className="bg-[#e9fae3] p-1 rounded-2xl flex items-center shadow-inner border border-[#d4edc9]">
          <TabButton 
            active={activeTab === 'ACHIEVEMENT'} 
            label="Thành tựu" 
            onClick={() => setActiveTab('ACHIEVEMENT')} 
          />
          <TabButton 
            active={activeTab === 'VOUCHER'} 
            label="Voucher" 
            onClick={() => setActiveTab('VOUCHER')} 
          />
          <TabButton 
            active={activeTab === 'HISTORY'} 
            label="Hoạt động" 
            onClick={() => setActiveTab('HISTORY')} 
          />
        </div>
      </div>

      {/* 3. NỘI DUNG THAY ĐỔI THEO TAB */}
      {/* pb-32 để không bị BottomBar che mất nội dung cuối cùng */}
      <div className="flex-1 px-5 pb-32">
        <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
          {activeTab === 'ACHIEVEMENT' && <TabAchievement />}
          {activeTab === 'VOUCHER' && <TabVoucher />}
          {activeTab === 'HISTORY' && <TabHistory />}
        </div>
      </div>
      
    </div>
  );
}

/**
 * Component nút bấm Tab nhỏ gọn
 */
function TabButton({ active, label, onClick }: { active: boolean, label: string, onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className={`flex-1 py-2.5 rounded-xl text-[11px] font-black transition-all duration-300 ${
        active 
          ? 'bg-white text-[#1c3f25] shadow-sm scale-100' 
          : 'text-gray-400 hover:text-[#1c3f25] scale-95 opacity-80'
      }`}
    >
      {label}
    </button>
  );
}
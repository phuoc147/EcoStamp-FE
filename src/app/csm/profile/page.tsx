'use client';

import ProfileHeader from './_components/ProfileHeader';
import QuickStats from './_components/QuickStats';
import MenuOption from './_components/MenuOption';
import { User, Bell, ShieldCheck, HelpCircle, Info, LogOut } from 'lucide-react';

export default function ProfilePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f2f9ea] animate-in fade-in duration-500">
      
      {/* 1. Header & Stats */}
      <div className="px-5 pt-8 pb-6 flex flex-col gap-6">
        <ProfileHeader 
          name="Gia Đạo" 
          level="Đại Sứ Xanh" 
          avatar="https://api.dicebear.com/7.x/avataaars/svg?seed=GiaDao"
        />
        <QuickStats points={1240} co2={45.2} rank={15} />
      </div>

      {/* 2. Menu Options Group */}
      <div className="px-5 flex flex-col gap-2 pb-32">
        <div className="bg-white rounded-4xl p-2 shadow-sm border border-gray-50">
          <MenuOption icon={<User size={20} />} label="Thông tin cá nhân" href="/profile/edit" />
          <MenuOption icon={<Bell size={20} />} label="Thông báo" href="/profile/notifications" badge="3" />
          <MenuOption icon={<ShieldCheck size={20} />} label="Bảo mật & Quyền riêng tư" href="/profile/privacy" />
          <MenuOption icon={<HelpCircle size={20} />} label="Trung tâm trợ giúp" href="/profile/help" />
          <MenuOption icon={<Info size={20} />} label="Về EcoStamp" href="/profile/about" isLast />
        </div>

        {/* Nút Đăng xuất */}
        <button className="mt-4 w-full bg-white py-4 rounded-2xl flex items-center justify-center gap-2 text-red-500 font-black shadow-sm border border-gray-50 active:scale-95 transition-all">
          <LogOut size={20} />
          <span className="text-sm uppercase tracking-wider">Đăng xuất</span>
        </button>
      </div>
      
    </div>
  );
}
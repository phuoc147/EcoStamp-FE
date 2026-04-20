import React from 'react';
import { LogOut } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = () => {
    // 1. Thêm logic xóa dữ liệu ở đây (Ví dụ: localStorage.clear(), cookie...)
    console.log("Đang đăng xuất...");
    
    // 2. Chuyển hướng về trang chủ hoặc trang đăng nhập
    router.push('/'); 
  };

  return (
    <button 
      onClick={handleLogout}
      className="mt-4 w-full bg-white py-4 rounded-2xl flex items-center justify-center gap-2 text-red-500 font-black shadow-sm border border-gray-50 active:scale-95 transition-all duration-200"
    >
      <LogOut size={20} strokeWidth={2.5} />
      <span className="text-sm uppercase tracking-wider">Đăng xuất</span>
    </button>
  );
}
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterForm({ onNext }: { onNext: () => void }) {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  
  // State quản lý dữ liệu nhập liệu
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    password: ""
  });

  const handleNext = () => {
    // Logic check điều kiện: Phải điền đủ tất cả các trường
    if (!formData.fullName.trim() || !formData.phone.trim() || !formData.password.trim()) {
      alert("Vui lòng điền đầy đủ thông tin để tiếp tục!");
      return;
    }
    
    // Nếu hợp lệ thì chuyển sang bước cài đặt vị trí
    onNext();
  };

  return (
    <div className="flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Ẩn icon "con mắt" mặc định của trình duyệt Edge/Chrome */}
      <style jsx>{`
        input::-ms-reveal,
        input::-ms-clear {
          display: none;
        }
      `}</style>

      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-black text-[#176a21]">Tạo tài khoản mới</h1>
        <p className="text-xs font-medium text-[#575e52]">Tham gia cộng đồng EcoStamp ngay hôm nay</p>
      </div>

      <div className="space-y-4">
        <div className="space-y-1.5">
          <label className="px-1 text-[11px] font-bold uppercase tracking-widest text-[#7b5e52]">Họ và tên</label>
          <input 
            type="text" 
            placeholder="Trần Anh Tuấn" 
            value={formData.fullName}
            onChange={(e) => setFormData({...formData, fullName: e.target.value})}
            className="w-full rounded-2xl border border-gray-100 bg-white p-4 text-sm font-medium shadow-sm outline-none focus:border-[#176a21]" 
          />
        </div>

        <div className="space-y-1.5">
          <label className="px-1 text-[11px] font-bold uppercase tracking-widest text-[#7b5e52]">Số điện thoại</label>
          <input 
            type="tel" 
            placeholder="0901 234 567" 
            value={formData.phone}
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
            className="w-full rounded-2xl border border-gray-100 bg-white p-4 text-sm font-medium shadow-sm outline-none focus:border-[#176a21]" 
          />
        </div>

        <div className="space-y-1.5">
          <label className="px-1 text-[11px] font-bold uppercase tracking-widest text-[#7b5e52]">Mật khẩu</label>
          <div className="relative">
            <input 
              type={showPassword ? "text" : "password"} 
              placeholder="••••••••" 
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              className="w-full rounded-2xl border border-gray-100 bg-white p-4 pr-12 text-sm font-medium shadow-sm outline-none focus:border-[#176a21]" 
            />
            <button 
              type="button" 
              onClick={() => setShowPassword(!showPassword)} 
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 active:scale-90"
            >
              <span className="material-symbols-outlined text-xl">
                {showPassword ? 'visibility' : 'visibility_off'}
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 mt-4">
        <button 
          onClick={handleNext}
          className="flex h-13 w-full items-center justify-center rounded-2xl bg-[#176a21] text-base font-bold text-white shadow-md active:scale-[0.98] transition-all"
        >
          Tiếp tục
        </button>
        <p className="text-sm text-center font-medium text-[#575e52] py-3">
          Đã có tài khoản?{" "}
          <button 
            onClick={() => router.push('/login')}
            className="font-bold text-[#176a21] underline-offset-4 decoration-2 active:opacity-70"
          >
            Đăng nhập
          </button>
        </p>
      </div>
    </div>
  );
}
"use client";

import { Clock, Bell, ShieldCheck, Home } from "lucide-react";
import { motion } from "framer-motion";

interface SuccessProps {
  onHome: () => void;
}

export default function SuccessPage({ onHome }: SuccessProps) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col flex-1 p-6 lg:p-12 bg-[#f2f9ea]"
    >
      {/* 1. Header ẩn trên Desktop (vì đã có Logo/Tên ở layout chung) */}
      <header className="lg:hidden flex items-center justify-center mb-8">
        <h1 className="font-bold text-lg text-[#176a21]">Trạm xanh</h1>
      </header>

      {/* 2. Layout Grid: 1 cột trên Mobile, 2 cột trên Desktop (lg) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center flex-1">
        
        {/* Cột trái: Biểu tượng minh họa & Trạng thái */}
        <div className="flex flex-col items-center justify-center">
          <div className="relative mb-6">
            {/* Thu nhỏ kích thước icon trên laptop để không bị chiếm diện tích */}
            <div className="w-40 h-40 lg:w-60 lg:h-60 bg-white rounded-[48px] lg:rounded-[64px] shadow-sm flex items-center justify-center relative overflow-hidden">
              <div className="absolute top-2 right-2 w-8 h-8 lg:w-12 lg:h-12 bg-[#c1fd7c] rounded-full" />
              <div className="flex flex-col items-center gap-2">
                <Clock size={56} className="text-[#176a21] lg:w-20 lg:h-20" strokeWidth={1.5} />
                <div className="w-10 h-1 bg-[#176a21]/20 rounded-full">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "65%" }}
                    className="h-full bg-[#176a21] rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="inline-flex items-center gap-2 bg-[#f7ede2] px-4 py-2 rounded-full border border-[#f3e0cc]">
            <ShieldCheck size={16} className="text-[#8d6e63]" />
            <span className="text-[10px] lg:text-[11px] font-bold text-[#8d6e63] uppercase tracking-wider">
              Trạng thái: Chờ duyệt
            </span>
          </div>
        </div>

        {/* Cột phải: Nội dung chi tiết & Hành động */}
        <div className="flex flex-col text-center lg:text-left h-full justify-center">
          <h2 className="text-3xl lg:text-5xl font-black mb-4 text-[#2a3127] leading-tight">
            Đăng ký thành công!
          </h2>
          
          <p className="text-gray-500 font-medium leading-relaxed mb-8 text-sm lg:text-base">
            Tài khoản của bạn đang được xét duyệt. Chúng tôi sẽ thông báo cho bạn ngay khi có kết quả <span className="text-[#176a21] font-bold">(thường trong vòng 24h)</span>.
          </p>

          {/* Các thẻ thông tin bổ sung */}
          <div className="space-y-4 mb-10 max-w-md mx-auto lg:mx-0">
            <div className="flex items-center gap-4 bg-white p-4 lg:p-5 rounded-[24px] lg:rounded-[32px] shadow-sm border border-emerald-50">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-[#f2f9ea] rounded-xl lg:rounded-2xl flex items-center justify-center shrink-0">
                <ShieldCheck size={20} className="text-[#176a21]" />
              </div>
              <div>
                <h4 className="font-bold text-[#2a3127] text-sm mb-0.5">Quy trình chuyên gia</h4>
                <p className="text-[11px] lg:text-[12px] text-gray-400 leading-snug">
                  Đội ngũ của chúng tôi đang kiểm tra các thông tin chứng chỉ sinh thái của doanh nghiệp.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white p-4 lg:p-5 rounded-[24px] lg:rounded-[32px] shadow-sm border border-emerald-50">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-[#f2f9ea] rounded-xl lg:rounded-2xl flex items-center justify-center shrink-0">
                <Bell size={20} className="text-[#176a21]" />
              </div>
              <div>
                <h4 className="font-bold text-[#2a3127] text-sm mb-0.5">Thông báo đẩy</h4>
                <p className="text-[11px] lg:text-[12px] text-gray-400 leading-snug">
                  Đảm bảo bật thông báo để nhận cập nhật tức thì về quyền truy cập Dashboard.
                </p>
              </div>
            </div>
          </div>

          <button 
            onClick={onHome}
            className="w-full lg:max-w-xs bg-[#176a21] text-white font-bold py-4 lg:py-5 rounded-2xl lg:rounded-3xl flex items-center justify-center gap-3 shadow-lg hover:bg-[#115018] transition-all active:scale-95 shadow-green-900/10"
          >
            <Home size={20} />
            Về trang chủ
          </button>
        </div>
      </div>
    </motion.div>
  );
}
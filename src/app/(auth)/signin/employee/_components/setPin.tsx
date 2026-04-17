"use client";

import { ArrowLeft, Delete, Lock, ArrowRight } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

interface StepProps {
  onNext: () => void;
  onBack: () => void;
}

export default function SetPinPage({ onNext, onBack }: StepProps) {
  const [pin, setPin] = useState("");

  const handleNum = (n: string) => { 
    if (pin.length < 6) setPin(prev => prev + n); 
  };
  
  const handleDel = () => setPin(prev => prev.slice(0, -1));

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="flex flex-col flex-1 p-6 lg:p-12 bg-[#f2f9ea]"
    >
      {/* 1. Header */}
      <header className="flex items-center justify-between mb-8">
        <button onClick={onBack} className="p-2 -ml-2 text-[#176a21] hover:bg-emerald-50 rounded-full transition">
          <ArrowLeft size={24} />
        </button>
        <h1 className="font-bold text-lg text-[#176a21]">Đăng ký nhân viên</h1>
        <div className="w-10" />
      </header>

      {/* 2. Grid Layout: 1 cột trên Mobile, 2 cột trên Desktop (lg) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center flex-1">
        
        {/* Cột trái: Tiến trình & Thông tin hero */}
        <div className="flex flex-col justify-center text-center lg:text-left">
          <div className="flex flex-col items-center lg:items-start mb-6">
            <span className="text-[10px] font-bold text-gray-400 mb-2 uppercase tracking-widest">
              BƯỚC 2 / 2
            </span>
            <div className="w-32 h-1.5 bg-gray-200 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: "0%" }} 
                animate={{ width: "100%" }} 
                className="h-full bg-[#176a21] rounded-full" 
              />
            </div>
          </div>

          <h2 className="text-3xl lg:text-5xl font-black mb-4 text-[#2a3127] leading-tight">
            Thiết Lập PIN Bảo Mật
          </h2>
          <p className="text-gray-500 text-base lg:text-lg font-medium leading-relaxed max-w-md mx-auto lg:mx-0">
            Mã PIN 6 số giúp bạn bảo vệ tài khoản và thực hiện các thao tác xác nhận nhanh chóng hơn.
          </p>
        </div>

        {/* Cột phải: Bàn phím số & Dots */}
        <div className="bg-[#f2f9ea]/40 lg:bg-white p-6 lg:p-10 rounded-[40px] border border-emerald-100/50 shadow-sm flex flex-col items-center">
          {/* Biểu tượng Lock thu nhỏ trên laptop */}
          <div className="w-14 h-14 lg:w-16 lg:h-16 bg-[#dce6d4] rounded-2xl flex items-center justify-center mb-6 text-[#176a21]">
            <Lock size={28} fill="currentColor" />
          </div>

          {/* PIN Dots Display */}
          <div className="flex justify-center gap-3 mb-8">
            {[...Array(6)].map((_, i) => (
              <div 
                key={i} 
                className={`w-9 h-9 lg:w-11 lg:h-11 rounded-xl flex items-center justify-center transition-all duration-300 ${
                  pin.length > i ? "bg-[#176a21] scale-105 shadow-md" : "bg-white lg:bg-[#f2f9ea]"
                }`}
              >
                {pin.length > i && <div className="w-2.5 h-2.5 bg-white rounded-full" />}
              </div>
            ))}
          </div>

          {/* Numeric Keypad - Tối ưu khoảng cách cho Web */}
          <div className="grid grid-cols-3 gap-y-3 lg:gap-y-1 gap-x-10 lg:gap-x-12 max-w-[280px] w-full mb-8">
            {["1", "2", "3", "4", "5", "6", "7", "8", "9"].map(n => (
              <button 
                key={n} 
                onClick={() => handleNum(n)} 
                className="h-14 w-14 lg:h-16 lg:w-16 flex items-center justify-center text-2xl font-black hover:bg-emerald-50 rounded-full transition-colors active:scale-90"
              >
                {n}
              </button>
            ))}
            <div />
            <button 
              onClick={() => handleNum("0")} 
              className="h-14 w-14 lg:h-16 lg:w-16 flex items-center justify-center text-2xl font-black hover:bg-emerald-50 rounded-full transition-colors active:scale-90"
            >
              0
            </button>
            <button 
              onClick={handleDel} 
              className="flex items-center justify-center text-[#775346] hover:bg-red-50 rounded-full transition-colors"
            >
              <Delete size={28} />
            </button>
          </div>

          <button 
            onClick={onNext} 
            disabled={pin.length < 6} 
            className="w-full bg-[#176a21] text-white font-bold py-4 lg:py-5 rounded-2xl shadow-lg disabled:opacity-40 transition-all flex items-center justify-center gap-2 hover:bg-[#115018] active:scale-[0.98]"
          >
            Hoàn tất thiết lập <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
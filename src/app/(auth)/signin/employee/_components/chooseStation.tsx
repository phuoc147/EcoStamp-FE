"use client";

import { ArrowLeft, ImagePlus, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface StepProps {
  onNext: () => void;
  onBack: () => void;
}

export default function ChooseStationPage({ onNext, onBack }: StepProps) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col flex-1 p-6 md:p-12">
      <header className="flex items-center justify-between mb-8">
      <button 
          onClick={onBack} 
          className="p-2 -ml-2 text-[#176a21] hover:bg-emerald-50 rounded-full transition-colors"
        >
          <ArrowLeft size={24} />
        </button>
        <h1 className="font-bold text-lg text-[#176a21]">Đăng ký nhân viên</h1>
        <div className="w-10" />
      </header>

      {/* Grid: 1 cột trên mobile, 2 cột trên desktop */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 flex-1">
        {/* Cột trái: Tiêu đề và Mô tả */}
        <div className="flex flex-col justify-center">
        <div className="flex flex-col items-center lg:items-start mb-6">
            <span className="text-[10px] font-bold text-gray-400 mb-2 uppercase tracking-widest">
              BƯỚC 1 / 2
            </span>
            <div className="w-32 h-1.5 bg-gray-200 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: "50%" }} 
                animate={{ width: "50%" }} 
                className="h-full bg-[#176a21] rounded-full" 
              />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">Chọn Trạm Làm Việc</h2>
          <p className="text-gray-500 text-lg font-medium leading-relaxed">
            Để bắt đầu nhiệm vụ, hãy xác định cơ sở bạn đang trực thuộc và cung cấp giấy tờ xác minh danh tính.
          </p>
        </div>

        {/* Cột phải: Form nhập liệu */}
        <div className="bg-[#f2f9ea]/50 lg:bg-white p-2 lg:p-8 rounded-[32px] space-y-6">
          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-600 uppercase">Tên cơ sở kinh doanh</label>
            <input type="text" placeholder="Tên trạm..." className="w-full bg-white lg:bg-[#f2f9ea]/40 border-none rounded-2xl py-4 px-6 focus:ring-2 focus:ring-[#176a21] outline-none shadow-sm" />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-600 uppercase">Mã cơ sở kinh doanh</label>
            <input type="text" placeholder="Mã trạm..." className="w-full bg-white lg:bg-[#f2f9ea]/40 border-none rounded-2xl py-4 px-6 focus:ring-2 focus:ring-[#176a21] outline-none shadow-sm" />
          </div>

          {/* Responsive Upload Area: Dàn hàng ngang trên desktop */}
          <label className="text-xs font-bold text-gray-600 uppercase">Tải ảnh CCCD</label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border-2 border-dashed border-gray-300 rounded-3xl p-6 flex flex-col items-center bg-white">
              <ImagePlus size={24} className="text-[#176a21] mb-2" />
              <p className="text-sm font-bold">CCCD Mặt trước</p>
            </div>
            <div className="border-2 border-dashed border-gray-300 rounded-3xl p-6 flex flex-col items-center bg-white">
              <ImagePlus size={24} className="text-[#176a21] mb-2" />
              <p className="text-sm font-bold">CCCD Mặt sau</p>
            </div>
          </div>

          <button onClick={onNext} className="w-full bg-[#176a21] text-white font-bold py-5 rounded-full flex items-center justify-center gap-3 shadow-lg hover:bg-[#115018] transition-all transform active:scale-95">
            Tiếp tục <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ValidationTab() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="space-y-6">
      {/* Progress Header giữ nguyên */}
      <div className="bg-white rounded-3xl p-5 shadow-sm space-y-3">
        <div className="flex justify-between items-center">
          <p className="text-sm font-medium text-gray-600">
            Hôm nay bạn đã giúp xác thực <span className="font-bold text-[#176a21]">3/10 túi rác</span>
          </p>
          <span className="text-sm font-black text-[#176a21]">+150 XP</span>
        </div>
        <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
          <div className="h-full w-[30%] bg-[#176a21] rounded-full" />
        </div>
      </div>

      <AnimatePresence mode="wait">
        {isVisible ? (
          <motion.div
            key="validation-card" // Thêm key để Framer Motion xử lý Exit
            initial={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8, x: 100, transition: { duration: 0.3 } }} // Hiệu ứng lướt sang phải khi mất bài
            className="space-y-6"
          >
            {/* Nội dung Card rác thải */}
            <div className="bg-white rounded-[40px] overflow-hidden shadow-lg border border-gray-50 relative">
              <div className="relative aspect-square">
                <img src="https://images.unsplash.com/photo-1618477461853-cf6ed80fafa5?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover" />
                <div className="absolute top-4 left-4 bg-[#176a21] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">Nhựa</div>
              </div>
              <div className="p-6 grid grid-cols-2 gap-y-4">
                 {/* Các thông tin Loại rác, Số lượng... giữ nguyên */}
              </div>
            </div>

            {/* Actions: Nhấn vào sẽ mất bài luôn */}
            <div className="grid grid-cols-2 gap-4">
              <button 
                onClick={() => setIsVisible(false)}
                className="flex flex-col items-center justify-center bg-white rounded-3xl p-6 border-b-4 border-red-100 active:scale-95 transition-all shadow-sm"
              >
                <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center mb-2 text-red-500">
                  <span className="material-symbols-outlined text-3xl">close</span>
                </div>
                <span className="text-xs font-bold text-red-500">Không hợp lệ</span>
              </button>
              <button 
                onClick={() => setIsVisible(false)}
                className="flex flex-col items-center justify-center bg-[#176a21] rounded-3xl p-6 border-b-4 border-green-900 active:scale-95 transition-all shadow-sm"
              >
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-2 text-white">
                  <span className="material-symbols-outlined text-3xl">check</span>
                </div>
                <span className="text-xs font-bold text-white">Hợp lệ</span>
              </button>
            </div>
          </motion.div>
        ) : (
          /* Trạng thái sau khi mất bài (Không tự động hiện lại bài cũ) */
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            className="py-20 text-center"
          >
            <span className="material-symbols-outlined text-6xl text-[#176a21] mb-4">task_alt</span>
            <p className="text-gray-500 font-bold">Bạn đã hoàn thành xác thực bài này!</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
"use client";

import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

interface StepProps {
  onNext: () => void;
  onBack: () => void;
}

export default function SetPinPage({ onNext, onBack }: StepProps) {
  const [pin, setPin] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleInputChange = (value: string) => {
    setErrorMessage(null);
    setPin(value);
  };

  const handleNum = (n: string) => {
    if (pin.length < 6) {
      handleInputChange(pin + n);
    }
  };

  const handleDel = () => {
    handleInputChange(pin.slice(0, -1));
  };

  const handleSubmit = () => {
    if (pin.length !== 6) {
      setErrorMessage("Vui lòng nhập mã PIN 6 số");
      return;
    }
    onNext();
  };

  return (
    <div className="w-full bg-[#f2f9ea] min-h-screen flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between mb-6">
        <button
          onClick={onBack}
          className="p-2 -ml-2 text-[#176a21] hover:bg-emerald-50 rounded-full transition-colors"
        >
          <ArrowLeft size={24} />
        </button>
        <h1 className="font-bold text-base text-[#176a21]">Đăng ký nhân viên</h1>
        <div className="w-10" />
      </header>      

      {/* Content */}
      <div className="flex-1 px-4 pb-4 overflow-y-auto flex flex-col scrollbar-hide">
        {/* Progress */}
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col items-center mb-6">
            <span className="text-[10px] font-bold text-gray-900 mb-2 uppercase tracking-widest">
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
        </div>

        {/* Title */}
        <h1 className="text-[28px] font-bold text-gray-900 mb-4 leading-tight text-center">
          Thiết lập mã PIN bảo mật
        </h1>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-6 leading-relaxed text-center">
          Thiết lập mã PIN 6 số để bảo vệ tài khoản và đăng nhập nhanh hơn.
        </p>

        {/* Error Message */}
        {errorMessage && (
          <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm mb-6">
            {errorMessage}
          </div>
        )}

        {/* PIN Input Boxes */}
        <div className="flex justify-center gap-3 mb-6">
          {/* Hidden input for PIN entry */}
          <input
            type="text"
            maxLength={6}
            inputMode="numeric"
            value={pin}
            onChange={(e) => {
              const value = e.target.value.replace(/\D/g, '').slice(0, 6);
              handleInputChange(value);
            }}
            style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }}
            autoFocus
          />
          {/* Display boxes */}
          {[0, 1, 2, 3, 4, 5].map((index) => (
            <div
              key={index}
              onClick={() => {
                const input = document.querySelector('input[style*="opacity: 0"]') as HTMLInputElement;
                input?.focus();
              }}
              className="w-12 h-12 flex items-center justify-center text-lg font-black rounded-2xl bg-white border-2 border-[#176a21] cursor-pointer hover:bg-emerald-50 hover:border-[#115018] transition text-gray-900"
            >
              {pin[index] ? '•' : ''}
            </div>
          ))}
        </div>

        {/* Number Pad */}
        <div className="flex-1 flex flex-col justify-center">
          <div className="grid grid-cols-3 gap-4 mb-6">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
              <button
                key={num}
                onClick={() => handleNum(String(num))}
                className="py-3 bg-white text-lg font-bold text-gray-900 rounded-xl border border-gray-300 hover:bg-gray-50 transition active:scale-95"
              >
                {num}
              </button>
            ))}
          </div>

          {/* Bottom Row: 0 and Delete */}
          <div className="grid grid-cols-3 gap-4">
            <div></div>
            <button
              onClick={() => handleNum('0')}
              className="py-3 bg-white text-lg font-bold text-gray-900 rounded-xl border border-gray-300 hover:bg-gray-50 transition active:scale-95"
            >
              0
            </button>
            <button
              onClick={handleDel}
              className="py-3 bg-white text-lg font-bold text-red-600 rounded-xl border border-gray-300 hover:bg-gray-50 transition active:scale-95 flex items-center justify-center"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Complete Button */}
        <button
          onClick={handleSubmit}
          className="w-full py-4 bg-[#176a21] text-white font-semibold rounded-full hover:bg-[#115018] transition disabled:opacity-40 mt-10"
          disabled={pin.length !== 6}
        >
          Hoàn tất thiết lập
        </button>
      </div>
    </div>
  );
}
"use client";

import { ArrowLeft } from "lucide-react";
import { useState } from "react";

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
      <div className="flex items-center justify-between px-6 py-4 bg-[#f2f9ea]">
        <span className="text-[#176a21] hover:opacity-70 cursor-pointer text-xl" onClick={onBack}>←</span>
        <span className="text-center text-lg font-semibold text-[#176a21]">
          Đăng ký nhân viên
        </span>
        <div className="w-6"></div>
      </div>

      {/* Progress */}
      <div className="px-6 py-4">
        <p className="text-center text-sm font-medium text-gray-700 mb-3">
          BƯỚC 2 / 2
        </p>
        <div className="w-full bg-gray-300 rounded-full h-2">
          <div className="bg-[#176a21] h-2 rounded-full" style={{ width: '100%' }}></div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 px-6 pb-6 overflow-y-auto flex flex-col">
        {/* Title */}
        <h1 className="text-[28px] font-bold text-gray-900 mb-4 leading-tight text-center">
          Thiết lập Mã PIN bảo mật
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
          className="w-full py-4 bg-[#176a21] text-white font-semibold rounded-full hover:bg-[#115018] transition disabled:opacity-40"
          disabled={pin.length !== 6}
        >
          Hoàn tất thiết lập
        </button>
      </div>
    </div>
  );
}
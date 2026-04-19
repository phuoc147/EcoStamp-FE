import React from 'react';

interface OperationToggleProps {
  isOpen: boolean;
  onToggle: () => void;
}

export default function OperationToggle({ isOpen, onToggle }: OperationToggleProps) {
  return (
    <div className="bg-white rounded-3xl p-5 mb-6 shadow-sm border border-gray-50 flex items-center justify-between">
      <div>
        <h3 className="text-[10px] font-extrabold text-green-800 tracking-wider mb-1 uppercase">
          Trạng thái vận hành
        </h3>
        <h2 className="text-lg font-bold text-[#1c3f25] mb-1">
          {isOpen ? 'Đang Mở Cửa' : 'Đang Đóng Cửa'}
        </h2>
        <p className="text-[10px] text-gray-400 leading-relaxed pr-4">
          Tắt để ngừng tiếp nhận tất cả các yêu cầu mới ngay lập tức.
        </p>
      </div>

      {/* Toggle Switch */}
      <button
        onClick={onToggle}
        className={`relative inline-flex items-center h-6 w-11 rounded-full transition-colors overflow-hidden ${isOpen
          ? 'bg-[#4caf50]'
          : 'bg-gray-300'
          }`}
      >
        <span
          className={`inline-block h-5 w-5 rounded-full bg-white shadow transition-transform ${isOpen ? 'translate-x-5' : 'translate-x-0'
            }`}
        ></span>
      </button>
    </div>
  );
}
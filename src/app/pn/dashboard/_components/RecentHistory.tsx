"use client";

import { useState } from 'react';

export default function RecentHistory() {
  const history = [
    { name: 'Nguyễn Lan', type: 'Nhựa', weight: '12.5 kg', color: 'bg-orange-100', text: 'text-orange-700' },
    { name: 'Trần Anh', type: 'Giấy carton', weight: '45.0 kg', color: 'bg-green-800', text: 'text-white' },
    { name: 'Hoàng Dung', type: 'Kim loại', weight: '8.2 kg', color: 'bg-green-100', text: 'text-green-800' },
  ];

  const [selectedFilter, setSelectedFilter] = useState('TẤT CẢ');

  const filteredHistory = selectedFilter === 'TẤT CẢ'
    ? history
    : history.filter(item => {
      if (selectedFilter === 'NHỰA' && item.type === 'Nhựa') return true;
      if (selectedFilter === 'GIẤY' && item.type === 'Giấy carton') return true;
      if (selectedFilter === 'KIM LOẠI' && item.type === 'Kim loại') return true;
      return false;
    });

  return (
    <section className="mb-6">
      <h2 className="font-bold text-[#1c3f25] mb-3">Lịch sử nhận rác gần đây</h2>
      <div className="flex gap-2 mb-4 text-[10px] font-bold">
        <button
          onClick={() => setSelectedFilter('TẤT CẢ')}
          className={`px-4 py-2 rounded-full transition-all ${selectedFilter === 'TẤT CẢ'
            ? 'bg-white shadow-sm text-gray-800'
            : 'text-gray-400 hover:text-gray-600'
            }`}
        >
          TẤT CẢ
        </button>
        <button
          onClick={() => setSelectedFilter('NHỰA')}
          className={`px-4 py-2 rounded-full transition-all ${selectedFilter === 'NHỰA'
            ? 'bg-white shadow-sm text-gray-800'
            : 'text-gray-400 hover:text-gray-600'
            }`}
        >
          PLASTIC
        </button>
        <button
          onClick={() => setSelectedFilter('GIẤY')}
          className={`px-4 py-2 rounded-full transition-all ${selectedFilter === 'GIẤY'
            ? 'bg-white shadow-sm text-gray-800'
            : 'text-gray-400 hover:text-gray-600'
            }`}
        >
          PAPER
        </button>
        <button
          onClick={() => setSelectedFilter('KIM LOẠI')}
          className={`px-4 py-2 rounded-full transition-all ${selectedFilter === 'KIM LOẠI'
            ? 'bg-white shadow-sm text-gray-800'
            : 'text-gray-400 hover:text-gray-600'
            }`}
        >
          METAL
        </button>
      </div>

      <div className="flex text-[10px] text-gray-800 font-bold px-2 mb-2">
        <span className="w-1/2">KHÁCH HÀNG</span>
        <span className="w-3/10 text-center">LOẠI RÁC</span>
        <span className="w-1/5 text-right">KHỐI LƯỢNG</span>
      </div>

      <div className="space-y-2">
        {filteredHistory.map((item, i) => (
          <div key={i} className="bg-white p-3 rounded-2xl flex items-center justify-between shadow-sm">
            <div className="flex items-center gap-2 w-1/2">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold ${item.color} ${item.text}`}>
                {item.name.split(' ').map(n => n[0]).join('')}
              </div>
              <span className="text-[11px] font-bold leading-tight">{item.name}</span>
            </div>
            <div className="w-3/10 text-center">
              <span className="bg-[#f0f6ea] text-gray-800 text-[9px] px-2 py-1 rounded-full font-bold uppercase tracking-tighter">
                {item.type}
              </span>
            </div>
            <span className="w-1/5 text-right text-[11px] font-bold">{item.weight}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
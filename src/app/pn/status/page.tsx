"use client";

import React, { useState } from 'react';
import Head from 'next/head';
import { Plus_Jakarta_Sans } from 'next/font/google';

// Components
import Header from '../../../components/PartnerHeader';
import BottomBar from '../../../components/BottomBars';
import OperationToggle from './_components/OperationToggle';
import CapacitySelection from './_components/CapacitySelection';
import RecentHistoryTimeline from './_components/RecentHistoryTimeline';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin', 'vietnamese'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

interface HistoryEntry {
  id: string;
  time: string;
  description: string;
  changes: string;
}

export default function UpdateStatus() {
  // Quản lý trạng thái đóng/mở cửa
  const [isOpen, setIsOpen] = useState(true);
  // Quản lý mức độ tiếp nhận (mặc định là Bình Thường)
  const [capacity, setCapacity] = useState('normal');
  // Quản lý lịch sử cập nhật
  const [history, setHistory] = useState<HistoryEntry[]>([
    {
      id: '1',
      time: '08:30 Sáng',
      description: 'Cập nhật',
      changes: 'Trạng thái: Mở cửa | Mức độ: Bình Thường',
    },
    {
      id: '2',
      time: '09:15 Sáng (Hôm qua)',
      description: 'Cập nhật',
      changes: 'Hệ thống tự động',
    },
  ]);

  const getCapacityLabel = (cap: string) => {
    const labels: Record<string, string> = {
      normal: 'Bình Thường',
      near: 'Sắp Đầy',
      overloaded: 'Quá Tải',
    };
    return labels[cap] || 'Không xác định';
  };

  const handleConfirm = () => {
    const now = new Date();
    const timeStr = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')} ${now.getHours() >= 12 ? 'Chiều' : 'Sáng'}`;

    const newEntry: HistoryEntry = {
      id: Date.now().toString(),
      time: timeStr,
      description: 'Cập nhật',
      changes: `Trạng thái: ${isOpen ? 'Mở cửa' : 'Đóng cửa'} | Mức độ: ${getCapacityLabel(capacity)}`,
    };

    console.log('Adding new entry:', newEntry);
    console.log('Current history:', history);

    // Update history first
    setHistory(prevHistory => {
      const updated = [newEntry, ...prevHistory];
      console.log('Updated history:', updated);
      return updated;
    });

    // Then show alert
    setTimeout(() => {
      alert(`Đã cập nhật trạng thái hệ thống:\n- Vận hành: ${isOpen ? 'Mở cửa' : 'Đóng cửa'}\n- Mức độ: ${getCapacityLabel(capacity)}`);
    }, 100);
  };

  return (
    <div className={`${plusJakarta.className} w-full h-screen bg-[#f4faec] font-sans text-gray-800 flex flex-col overflow-hidden`}>
      <Head>
        <title>Cập Nhật Trạng Thái Trạm</title>
      </Head>

      {/* Fixed Header */}
      <div className="shrink-0 z-40 bg-[#f4faec]">
        <Header />
      </div>

      {/* Scrollable Content */}
      <main className="flex-1 px-5 py-4 overflow-y-auto overflow-x-hidden scrollbar-hide">
        {/* Tiêu đề trang */}
        <div className="mb-6">
          <h1 className="text-[26px] font-extrabold text-[#1c3f25] leading-tight mb-1">
            Cập Nhật Trạng Thái<br />Trạm Xanh
          </h1>
          <p className="text-[11px] font-medium text-gray-500">
            Trạm xanh Quận 1 • Mã: DS-9921
          </p>
        </div>

        {/* Khối 1: Toggle Vận hành */}
        <OperationToggle isOpen={isOpen} onToggle={() => setIsOpen(!isOpen)} />

        {/* Khối 2: Chọn khả năng tiếp nhận */}
        <CapacitySelection selected={capacity} onChange={setCapacity} />

        {/* Khối 3: Nút xác nhận */}
        <button
          onClick={handleConfirm}
          className="w-full bg-[#1b5e20] text-white font-bold py-3 rounded-xl text-xs transition-colors hover:bg-[#144718] mb-6"
        >
          Xác Nhận Cập Nhật
        </button>

        {/* Khối 4: Lịch sử mini */}
        <RecentHistoryTimeline history={history} />

      </main>

      {/* Fixed Bottom Bar */}
      <div className="shrink-0 z-40 bg-[#f4faec]">
        <BottomBar role="partner" />
      </div>
    </div>
  );
}
"use client";

import React, { useState } from 'react';
import Head from 'next/head';
import { Plus_Jakarta_Sans } from 'next/font/google';

// Components
import Header from '../../../components/ConsumerHeader';
import BottomBar from '../../../components/BottomBars';
import OperationToggle from './_components/OperationToggle';
import CapacitySelection from './_components/CapacitySelection';
import ConfirmUpdateCard from './_components/ConfirmUpdateCard';
import RecentHistoryTimeline from './_components/RecentHistoryTimeline';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin', 'vietnamese'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

export default function UpdateStatus() {
  // Quản lý trạng thái đóng/mở cửa
  const [isOpen, setIsOpen] = useState(true);
  // Quản lý mức độ tiếp nhận (mặc định là Bình Thường)
  const [capacity, setCapacity] = useState('normal');

  const handleConfirm = () => {
    alert(`Đã cập nhật trạng thái hệ thống:\n- Vận hành: ${isOpen ? 'Mở cửa' : 'Đóng cửa'}\n- Mức độ: ${capacity}`);
  };

  return (
    <div className={`${plusJakarta.className} min-h-screen bg-[#f4faec] pb-24 font-sans text-gray-800 flex justify-center`}>
      <Head>
        <title>Cập Nhật Trạng Thái Trạm</title>
      </Head>

      <div className="w-full max-w-md bg-[#f4faec] min-h-screen shadow-lg relative overflow-x-hidden flex flex-col pt-20">
        <Header />

        <main className="flex-1 px-5 mt-6">
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
          <ConfirmUpdateCard onConfirm={handleConfirm} />

          {/* Khối 4: Lịch sử mini */}
          <RecentHistoryTimeline />

        </main>

        <BottomBar role="partner" />
      </div>
    </div>
  );
}
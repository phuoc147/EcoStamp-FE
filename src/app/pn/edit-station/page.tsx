"use client";

import React, { useState } from 'react';
import Head from 'next/head';
import { Plus_Jakarta_Sans } from 'next/font/google';

// Components
import Header from '../../../components/ConsumerHeader';
import BottomBar from '../../../components/BottomBars';
import EditBasicInfo from './_components/EditBasicInfo';
import EditWasteTypes from './_components/EditWasteTypes';
import EditOperatingHours from './_components/EditOperatingHours';
import CurrentStatusPreview from './_components/CurrentStatusPreview';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin', 'vietnamese'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

export default function EditStationInfo() {
  // Mock State quản lý form
  const [stationName, setStationName] = useState('Trạm xanh Quận 1');
  const [capacityKg, setCapacityKg] = useState('5000');
  const [capacityL, setCapacityL] = useState('2000');
  const [openTime, setOpenTime] = useState('06:00');
  const [closeTime, setCloseTime] = useState('18:00'); // 06:00 PM
  const [isWeekendWork, setIsWeekendWork] = useState(true);

  const handleSave = () => {
    alert("Đã lưu thông tin trạm thành công!");
  };

  const handleCancel = () => {
    alert("Đã hủy các thay đổi.");
  };

  return (
    <div className={`${plusJakarta.className} min-h-screen bg-[#f4faec] pb-24 font-sans text-gray-800 flex justify-center`}>
      <Head>
        <title>Chỉnh Sửa Thông Tin Trạm</title>
      </Head>

      <div className="w-full max-w-md bg-[#f4faec] min-h-screen shadow-lg relative overflow-x-hidden flex flex-col pt-16">
        <Header />

        <main className="flex-1 px-5 mt-4">
          
          {/* Header Section */}
          <div className="mb-6">
            <h1 className="text-[24px] font-extrabold text-[#1c3f25] leading-tight mb-2">
              Chỉnh sửa thông tin trạm
            </h1>
            <p className="text-[11px] font-medium text-gray-500 mb-4 pr-4 leading-relaxed">
              Cập nhật: công suất, loại chất thải và thời gian hoạt động cho Trạm Oakwood.
            </p>
            
            <div className="flex gap-2">
              <button 
                onClick={handleCancel}
                className="flex-1 bg-[#e3ecd9] text-[#1c3f25] font-bold py-2.5 rounded-full text-xs transition-colors hover:bg-[#d5e2c7]"
              >
                Hủy bỏ
              </button>
              <button 
                onClick={handleSave}
                className="flex-2` bg-[#1b5e20] text-white font-bold py-2.5 rounded-full text-xs shadow-sm transition-colors hover:bg-[#144718]"
              >
                Lưu thay đổi
              </button>
            </div>
          </div>

          {/* Form Sections */}
          <EditBasicInfo 
            name={stationName} onNameChange={setStationName}
            capKg={capacityKg} onCapKgChange={setCapacityKg}
            capL={capacityL} onCapLChange={setCapacityL}
          />
          
          <EditWasteTypes />
          
          <EditOperatingHours 
            openTime={openTime} onOpenTimeChange={setOpenTime}
            closeTime={closeTime} onCloseTimeChange={setCloseTime}
            weekend={isWeekendWork} onWeekendChange={setIsWeekendWork}
          />

          <CurrentStatusPreview />

        </main>

        <BottomBar role="partner" />
      </div>
    </div>
  );
}
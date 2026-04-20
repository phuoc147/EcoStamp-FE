"use client";

import React, { useState } from 'react';
import Head from 'next/head';
import { Plus_Jakarta_Sans } from 'next/font/google';

// Components
import Header from '../../../components/PartnerHeader';
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
  const [stationStatus, setStationStatus] = useState('open'); // 'open' or 'closed'

  const handleSave = () => {
    alert("Đã lưu thông tin trạm thành công!");
  };

  const handleCancel = () => {
    alert("Đã hủy các thay đổi.");
  };

  const toggleStationStatus = () => {
    setStationStatus(stationStatus === 'open' ? 'closed' : 'open');
  };

  return (
    <div className={`${plusJakarta.className} w-full h-screen bg-[#f4faec] font-sans text-gray-800 flex flex-col overflow-hidden`}>
      <Head>
        <title>Chỉnh Sửa Thông Tin Trạm</title>
      </Head>

      {/* Fixed Header */}
      <div className="shrink-0 z-40 bg-[#f4faec]">
        <Header />
      </div>

      {/* Scrollable Content */}
      <main className="flex-1 px-5 py-4 overflow-y-auto overflow-x-hidden scrollbar-hide">

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
              className="flex-1 bg-[#1b5e20] text-white font-bold py-2.5 rounded-full text-xs shadow-sm transition-colors hover:bg-[#144718]"
            >
              Lưu thay đổi
            </button>
          </div>
        </div>

        {/* Current Status Section */}
        <section className="mb-6 bg-[#1b5e20] rounded-3xl p-5 text-white relative overflow-hidden">
          <div className="flex items-center justify-between mb-3.5">
            <span className="text-[10px] font-bold tracking-widest opacity-90">TRẠNG THÁI HIỆN TẠI</span>
            <button
              onClick={toggleStationStatus}
              className={`relative inline-flex items-center h-6 w-11 rounded-full transition-colors ${stationStatus === 'open'
                ? 'bg-[#4caf50]'
                : 'bg-red-500'
                }`}
            >
              <span
                className={`inline-block h-5 w-5 rounded-full bg-white transition-transform ${stationStatus === 'open' ? 'translate-x-5' : 'translate-x-0.5'
                  }`}
              ></span>
            </button>
          </div>

          <h2 className="text-2xl font-extrabold mb-0.5 leading-tight">{stationStatus === 'open' ? 'Đang Mở Cửa' : 'Đã Đóng Cửa'}</h2>
          <p className="text-[11px] opacity-85 mb-4">{stationName}</p>

          <div className="flex gap-1.5">
            <button className="text-[10px] text-white font-bold px-2.5 py-1 rounded-full bg-[#0d3817] hover:bg-[#0a2512] transition">
              HỮU CƠ
            </button>
            <button className="text-[10px] text-white font-bold px-2.5 py-1 rounded-full bg-[#0d3817] hover:bg-[#0a2512] transition">
              NHỰA
            </button>
            <button className="text-[10px] text-white font-bold px-2.5 py-1 rounded-full bg-[#0d3817] hover:bg-[#0a2512] transition">
              GIẤY
            </button>
          </div>
        </section>

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

      </main>

      {/* Fixed Bottom Bar */}
      <div className="shrink-0 z-40 bg-[#f4faec]">
        <BottomBar role="partner" />
      </div>
    </div>
  );
}
"use client";

import React, { useState } from 'react';
import Head from 'next/head';
import { Plus_Jakarta_Sans } from 'next/font/google';

// Components
import Header from '../../../components/ConsumerHeader';
import BottomBar from '../../../components/BottomBars';
import SuccessAlert from './_components/SuccessAlert';
import RequestBanner from './_components/RequestBanner';
import WasteSelection from './_components/WasteSelection';
import ScheduleLocation from './_components/ScheduleLocation';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin', 'vietnamese'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

export default function CreateRequest() {
  // Quản lý trạng thái chung của toàn bộ form
  const [showAlert, setShowAlert] = useState(true);
  const [selectedType, setSelectedType] = useState('Giấy');
  const [weight, setWeight] = useState('');
  const [date, setDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('Sáng (08:00 - 11:30)');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Đã gửi yêu cầu:\nLoại: ${selectedType}\nKhối lượng: ${weight}kg\nThời gian: ${date} | ${timeSlot}`);
    setShowAlert(true); // Hiện lại thông báo khi gửi thành công
  };

  return (
    <div className={`${plusJakarta.className} min-h-screen bg-[#f4faec] pb-24 font-sans text-gray-800 flex justify-center`}>
      <Head>
        <title>Tạo Yêu Cầu Vận Chuyển</title>
      </Head>

      <div className="w-full max-w-md bg-[#f4faec] min-h-screen shadow-lg relative overflow-x-hidden flex flex-col pt-20">
        {/* Nhớ dùng ConsumerHeader của bạn, giả sử tên là Header */}
        <Header />

        <main className="flex-1">
          {/* Component: Cảnh báo thành công */}
          {showAlert && (
            <SuccessAlert 
              code="#EVG-8821" 
              onClose={() => setShowAlert(false)} 
            />
          )}

          {/* Component: Banner hình ảnh */}
          <RequestBanner />

          {/* Tiêu đề */}
          <div className="px-5 mt-8 mb-6">
            <h1 className="text-[32px] font-extrabold text-[#1c3f25] leading-[1.1]">
              Tạo Yêu Cầu<br />
              <span className="text-[#267a32] italic">Vận Chuyển Mới</span>
            </h1>
            <p className="text-[11px] text-gray-500 mt-3 leading-relaxed pr-4">
              Cùng nhau xây dựng môi trường bền vững. Vui lòng cung cấp chi tiết loại phế liệu để chúng tôi sắp xếp nhân sự phù hợp nhất.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="mx-5 bg-[#eef6e6] rounded-4xl p-6 mb-6 shadow-sm">
            
            {/* Component: Bước 1 - Chọn loại rác */}
            <WasteSelection 
              selectedType={selectedType}
              onChangeType={setSelectedType}
              weight={weight}
              onChangeWeight={setWeight}
            />

            {/* Component: Bước 2 - Chọn địa điểm & thời gian */}
            <ScheduleLocation 
              date={date}
              onChangeDate={setDate}
              timeSlot={timeSlot}
              onChangeTimeSlot={setTimeSlot}
              address="264 Lý Thường Kiệt, Phường 14, Quận 10, Thành phố Hồ Chí Minh"
            />

            {/* Nút Submit */}
            <button 
              type="submit"
              className="w-full bg-[#1b5e20] text-white font-bold py-4 rounded-full text-sm shadow-md hover:bg-[#144718] transition-colors"
            >
              Gửi yêu cầu thu gom
            </button>
            
            <p className="text-[8px] text-center text-gray-400 mt-4 px-4 leading-relaxed">
              Bằng cách nhấn gửi, bạn đồng ý với Điều khoản dịch vụ môi trường của chúng tôi.
            </p>

          </form>
        </main>

        <BottomBar role="consumer" />
      </div>
    </div>
  );
}
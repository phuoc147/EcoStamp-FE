"use client";

import Head from 'next/head';
import { Plus_Jakarta_Sans } from 'next/font/google';
import { RefreshCw, Truck } from 'lucide-react';

// Import các component con
import Header from '../../../components/PartnerHeader';
import StorageCapacity from './_components/StorageCapacity';
import EnvImpact from './_components/EnvImpact';
import RecentHistory from './_components/RecentHistory';
import TransportSupport from './_components/TransportSupport';
import Ranking from './_components/Ranking';
import BottomNav from '../../../components/BottomBars';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin', 'vietnamese'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

export default function Dashboard() {
  // Logic xử lý nút (có thể thay bằng API thật sau này)
  const handleRefresh = () => alert("Đang cập nhật trạng thái...");
  const handleRequest = () => alert("Đã gửi yêu cầu vận chuyển!");

  return (
    <div className={`${plusJakarta.className} w-full h-full flex flex-col overflow-hidden bg-[#f4faec] font-sans text-gray-800`}>
      <Head>
        <title>Trạm Xanh Dashboard</title>
      </Head>

      <Header />

      <main className="px-4 overflow-y-auto flex-1 scrollbar-hide">
        {/* Greeting */}
        <section className="mt-8 mb-6">
          <h1 className="text-[28px] leading-tight font-extrabold text-[#1c3f25] mb-2">
            Chào buổi sáng,<br />Trạm xanh Quận 1
          </h1>
          <p className="text-sm text-gray-500 mb-5">
            Giám sát trạng thái trạm và quản lý dòng chảy tài nguyên của bạn một cách hiệu quả.
          </p>

          <div className="flex gap-2">
            <button
              onClick={handleRefresh}
              className="flex items-center justify-center gap-2 flex-1 bg-[#e4f0de] text-[#1c3f25] font-bold py-3 rounded-full text-xs hover:bg-[#d5e8cd] transition"
            >
              <RefreshCw size={14} /> Cập nhật trạng thái
            </button>
            <button
              onClick={handleRequest}
              className="flex items-center justify-center gap-2 flex-1 bg-[#267a32] text-white font-bold py-3 rounded-full text-xs hover:bg-[#1f6328] transition"
            >
              <Truck size={14} /> Yêu cầu vận chuyển
            </button>
          </div>
        </section>

        <StorageCapacity />
        <EnvImpact />
        <RecentHistory />
        <TransportSupport />
        <Ranking />
      </main>

      <BottomNav role="partner" />
    </div>
  );
}
'use client';

import { useState } from 'react';
import Header from '../../../components/PartnerHeader';
import BottomNav from '../../../components/BottomBars';
import { Plus_Jakarta_Sans } from 'next/font/google';
import { Search, Filter } from 'lucide-react';

const plusJakarta = Plus_Jakarta_Sans({
    subsets: ['latin', 'vietnamese'],
    weight: ['400', '500', '600', '700', '800'],
    display: 'swap',
});

export default function HistoryPage() {
    const [collectionTab, setCollectionTab] = useState('month');
    const [chartViewMode, setChartViewMode] = useState('month');
    const [searchTerm, setSearchTerm] = useState('');

    // Chart data for different view modes
    const chartDataByMode: Record<string, { label: string; value: number }[]> = {
        year: [
            { label: '2022', value: 45 },
            { label: '2023', value: 58 },
            { label: '2024', value: 72 },
            { label: '2025', value: 85 },
        ],
        month: [
            { label: 'JAN', value: 32 },
            { label: 'FEB', value: 45 },
            { label: 'MAR', value: 68 },
            { label: 'APR', value: 52 },
            { label: 'MAY', value: 78 },
            { label: 'JUN', value: 91 },
        ],
        week: [
            { label: 'W1', value: 20 },
            { label: 'W2', value: 35 },
            { label: 'W3', value: 48 },
            { label: 'W4', value: 62 },
            { label: 'W5', value: 55 },
            { label: 'W6', value: 78 },
        ],
    };

    const currentChartData = chartDataByMode[chartViewMode];
    const maxValue = Math.max(...currentChartData.map((d: { label: string; value: number }) => d.value));

    const transactions = [
        {
            id: 1,
            date: 'Oct 24, 2023',
            time: '09:42 AM',
            customer: 'Elena Woods',
            type: 'EW',
            wasteType: 'Rác hữu cơ',
            color: '#4CAF50',
        },
        {
            id: 2,
            date: 'Oct 24, 2023',
            time: '08:15 AM',
            customer: 'Marcus Kane',
            type: 'MK',
            wasteType: 'Rác hỗn hợp',
            color: '#E57373',
        },
        {
            id: 3,
            date: 'Oct 23, 2023',
            time: '04:30 PM',
            customer: 'Sarah Linn',
            type: 'SL',
            wasteType: 'Giấy tái chế',
            color: '#81C784',
        },
    ];

    const filteredTransactions = transactions.filter(txn => {
        const search = searchTerm.toLowerCase();
        if (!search) return true;
        return (
            txn.customer.toLowerCase().includes(search) ||
            txn.wasteType.toLowerCase().includes(search)
        );
    });

    return (
        <div className={`${plusJakarta.className} w-full h-full flex flex-col overflow-hidden bg-[#f4faec] font-sans text-gray-800`}>
            <Header />

            <main className="px-5 pb-6 overflow-y-auto flex-1 scrollbar-hide">
                {/* Collection History Section */}
                <section className="mt-6 mb-6">
                    <h2 className="text-2xl font-extrabold text-[#1c3f25] mb-1">Lịch sử thu gom</h2>
                    <p className="text-[11px] text-gray-600">Tính đến thời điểm hiện tại</p>

                    {/* Impact Card */}
                    <div className="mt-4 mb-4 bg-linear-to-br from-[#d4ecc8] to-[#b8dfa8] rounded-3xl p-6 text-center space-y-3">
                        <div className="text-5xl">🌿</div>
                        <p className="text-[9px] font-bold text-[#1c3f25] tracking-widest uppercase">TÁC ĐỘNG MỘI TRƯỜNG</p>
                        <div>
                            <p className="text-4xl font-extrabold text-[#1c3f25] leading-tight">
                                2.4 Tấn<span className="text-2xl align-baseline ml-1">CO₂</span>
                            </p>
                            <p className="text-sm text-[#1c3f25]">được giảm</p>
                        </div>
                        <p className="text-[10px] text-[#2d5016] leading-relaxed px-2">
                            Tương đương trồng 142 cây trong giai đoạn này
                        </p>
                    </div>

                    {/* Chart Section */}
                    <div className="bg-white rounded-3xl p-5 shadow-sm mb-4">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-[13px] font-extrabold text-[#1c3f25]">Xu hướng thu gom</h3>
                            <button className="text-gray-400 hover:text-gray-600">⋯</button>
                        </div>

                        {/* Chart View Mode Buttons */}
                        <div className="flex gap-2 mb-4">
                            <button
                                onClick={() => setChartViewMode('year')}
                                className={`px-3 py-1 rounded-full text-[10px] font-bold transition ${chartViewMode === 'year'
                                    ? 'bg-[#267a32] text-white'
                                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                    }`}
                            >
                                Theo năm
                            </button>
                            <button
                                onClick={() => setChartViewMode('month')}
                                className={`px-3 py-1 rounded-full text-[10px] font-bold transition ${chartViewMode === 'month'
                                    ? 'bg-[#267a32] text-white'
                                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                    }`}
                            >
                                Theo tháng
                            </button>
                            <button
                                onClick={() => setChartViewMode('week')}
                                className={`px-3 py-1 rounded-full text-[10px] font-bold transition ${chartViewMode === 'week'
                                    ? 'bg-[#267a32] text-white'
                                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                    }`}
                            >
                                Theo tuần
                            </button>
                        </div>

                        {/* Dynamic Chart */}
                        <div className="h-40 flex items-end justify-between gap-1 mb-4">
                            {currentChartData.map((data, idx) => (
                                <div key={idx} className="flex-1 flex flex-col items-center justify-end">
                                    <div className="text-[9px] font-bold text-gray-700 mb-1">{data.value}</div>
                                    <div
                                        className="w-full bg-linear-to-t from-[#267a32] to-[#4CAF50] rounded-t transition-all"
                                        style={{
                                            height: `${(data.value / maxValue) * 140}px`,
                                        }}
                                    ></div>
                                </div>
                            ))}
                        </div>

                        {/* Labels */}
                        <div className="flex justify-between px-1">
                            {currentChartData.map((data, idx) => (
                                <span key={idx} className="text-[9px] font-bold text-gray-600 flex-1 text-center">
                                    {data.label}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Waste Classification */}
                    <div className="bg-[#1b5e20] rounded-3xl p-5 text-white shadow-sm">
                        <h3 className="text-[14px] font-extrabold mb-4">Phân loại rác</h3>

                        {/* HỮU CƠ */}
                        <div className="mb-4">
                            <div className="flex justify-between mb-1">
                                <span className="text-[11px] font-bold">HỮU CƠ</span>
                                <span className="text-[11px] font-bold">64%</span>
                            </div>
                            <div className="w-full bg-white/20 rounded-full h-2">
                                <div className="bg-[#d4ecc8] h-2 rounded-full" style={{ width: '64%' }}></div>
                            </div>
                        </div>

                        {/* NHỰA */}
                        <div className="mb-4">
                            <div className="flex justify-between mb-1">
                                <span className="text-[11px] font-bold">NHỰA</span>
                                <span className="text-[11px] font-bold">18%</span>
                            </div>
                            <div className="w-full bg-white/20 rounded-full h-2">
                                <div className="bg-[#ffb6b9] h-2 rounded-full" style={{ width: '18%' }}></div>
                            </div>
                        </div>

                        {/* THỦY TINH/KIM LOẠI */}
                        <div className="mb-4">
                            <div className="flex justify-between mb-1">
                                <span className="text-[11px] font-bold">THỦY TINH/KIM LOẠI</span>
                                <span className="text-[11px] font-bold">12%</span>
                            </div>
                            <div className="w-full bg-white/20 rounded-full h-2">
                                <div className="bg-[#a9d5ba] h-2 rounded-full" style={{ width: '12%' }}></div>
                            </div>
                        </div>

                        <p className="text-[10px] italic text-[#d4ecc8] mt-4 border-t border-white/20 pt-3">
                            "Lượng rác hữu cơ cao nhất thương vào thủ Tư"
                        </p>
                    </div>
                </section>

                {/* Transaction History Section */}
                <section className="mt-8 mb-6">
                    <h2 className="text-2xl font-extrabold text-[#1c3f25] mb-3 flex items-center gap-2">
                        📋 Lịch sử giao dịch
                    </h2>

                    {/* Search and Filter */}
                    <div className="flex gap-2 mb-4">
                        <div className="flex-1 relative">
                            <Search size={14} className="absolute left-3 top-2.5 text-gray-400" />
                            <input
                                type="text"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                placeholder="Tìm kiếm giao dịch"
                                className="w-full bg-white text-[11px] pl-8 pr-3 py-2 rounded-full outline-none focus:ring-2 focus:ring-[#267a32]/30 shadow-sm"
                            />
                        </div>
                        {/* <button className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-gray-400 hover:text-[#267a32] shadow-sm">
                            <Filter size={14} />
                        </button> */}
                    </div>

                    {/* Transaction List */}
                    <div className="space-y-3 mb-4">
                        {filteredTransactions.map(txn => (
                            <div key={txn.id} className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex items-start gap-3">
                                    <div
                                        className="w-8 h-8 rounded-full flex items-center justify-center text-white text-[10px] font-bold shrink-0"
                                        style={{ backgroundColor: txn.color }}
                                    >
                                        {txn.type}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-[12px] font-bold text-[#1c3f25]">{txn.customer}</p>
                                        <p className="text-[10px] text-gray-600">{txn.wasteType}</p>
                                        <p className="text-[10px] text-gray-500 mt-1">
                                            {txn.date} • {txn.time}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {filteredTransactions.length === 0 && (
                            <div className="flex flex-col items-center py-5 opacity-40">
                                <p className="text-xs font-bold italic">Không tìm thấy giao dịch</p>
                            </div>
                        )}
                    </div>

                    {/* View All Link */}
                    <div className="text-center">
                        <a href="#" className="text-[11px] text-[#267a32] font-bold hover:underline">
                            Xem tất cả các giao dịch
                        </a>
                    </div>
                </section>
            </main>

            <BottomNav role="partner" />
        </div>
    );
}

"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function PartnerHeader() {
    const [showDropdown, setShowDropdown] = useState(false);
    const router = useRouter();

    const handleEditStation = () => {
        setShowDropdown(false);
        router.push('/pn/edit-station');
    };

    const handleHistory = () => {
        setShowDropdown(false);
        router.push('/pn/history');
    };

    const handleExit = () => {
        setShowDropdown(false);
        // Navigate to consumer home
        router.push('/csm/home');
    };

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    return (
        <header className="bg-[#f4faec] border-b border-gray-100 shadow-sm sticky top-0 z-50">
            <div className="flex items-center justify-between px-5 py-3">
                {/* Logo và Text */}
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-[#1b5e20] rounded-lg flex items-center justify-center">
                        <span className="material-symbols-outlined text-white text-lg">shopping_basket</span>
                    </div>
                    <span className="text-base font-bold tracking-tight text-[#1c3f25]">
                        Trạm xanh
                    </span>
                </div>

                {/* Notification & Avatar */}
                <div className="flex items-center gap-3">
                    <button
                        type="button"
                        className="flex h-8 w-8 items-center justify-center rounded-full transition-colors hover:bg-[#dce6d4]/60"
                        aria-label="Thông báo"
                    >
                        <span className="material-symbols-outlined text-[#1b5e20] text-lg">
                            notifications
                        </span>
                    </button>

                    {/* Avatar with Dropdown */}
                    <div className="relative">
                        <button
                            onClick={toggleDropdown}
                            className="h-8 w-8 overflow-hidden rounded-full border-2 border-[#1b5e20] hover:opacity-80 transition-opacity"
                            aria-label="Menu"
                        >
                            <img
                                className="h-full w-full object-cover"
                                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Partner"
                                alt="Partner Avatar"
                            />
                        </button>

                        {/* Dropdown Menu */}
                        {showDropdown && (
                            <div className="absolute right-0 -ml-32 mt-2 w-48 bg-white rounded-2xl shadow-lg border border-gray-100 z-50 overflow-hidden">
                                <button
                                    onClick={handleEditStation}
                                    className="w-full text-left px-4 py-3 text-sm font-medium text-[#1c3f25] hover:bg-[#f4faec] transition-colors flex items-center gap-2 border-b border-gray-100"
                                >
                                    <span className="material-symbols-outlined text-lg">edit</span>
                                    Chỉnh sửa thông tin Trạm Xanh
                                </button>
                                <button
                                    onClick={handleHistory}
                                    className="w-full text-left px-4 py-3 text-sm font-medium text-[#1c3f25] hover:bg-[#f4faec] transition-colors flex items-center gap-2 border-b border-gray-100"
                                >
                                    <span className="material-symbols-outlined text-lg">history</span>
                                    Lịch sử
                                </button>
                                <button
                                    onClick={handleExit}
                                    className="w-full text-left px-4 py-3 text-sm font-medium text-red-600 hover:bg-red-50 transition-colors flex items-center gap-2"
                                >
                                    <span className="material-symbols-outlined text-lg">logout</span>
                                    Trở về Trang chủ
                                </button>
                            </div>
                        )}

                        {/* Backdrop to close dropdown */}
                        {showDropdown && (
                            <div
                                className="fixed inset-0 z-40"
                                onClick={() => setShowDropdown(false)}
                            />
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
}

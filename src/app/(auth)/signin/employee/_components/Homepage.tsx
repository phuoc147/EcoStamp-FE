"use client";

import { ArrowLeft, ImagePlus, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface StepProps {
    onNext: () => void;
    onBack: () => void;
}

export default function Homepage({ onNext, onBack }: StepProps) {
    return (
        <div className="w-full bg-[#f5f7f3] p-6 shadow-md">
            {/* Header */}
            <div className="flex items-center gap-2 mb-6">
                <span className="text-green-700 hover:opacity-70 cursor-pointer">←</span>
                <span className="text-base font-semibold text-green-700">
                    EcoStamp
                </span>
            </div>

            {/* Impact Badge */}
            <div className="relative w-full h-32 rounded-2xl overflow-hidden mb-6 bg-linear-to-br from-green-900 to-green-700 flex items-center justify-center">
                <div className="text-6xl">🌲</div>
                <span className="absolute top-3 left-3 bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded-full font-semibold">
                    🌱 Green Station
                </span>
            </div>

            {/* Title */}
            <h1 className="text-[28px] font-bold leading-tight mb-4">
                <span className="text-gray-800">Trở thành Nhân viên</span>
                <span className="text-green-700">Trạm Xanh</span>
            </h1>

            {/* Description */}
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Tham gia đội ngũ Trạm Xanh để cùng nhau xây dựng một tương lai xanh hơn.
                Làm việc trong môi trường tích cực, phát triển kỹ năng và nhận các lợi ích xứng đáng.
            </p>

            {/* Card 1: Attractive Salary */}
            <div className="bg-[#EFF6E7] rounded-xl p-4 mb-3">
                <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-green-200 rounded-lg flex items-center justify-center shrink-0 text-lg">
                        💰
                    </div>
                    <h3 className="font-bold text-gray-800 text-[15px]">Lương hấp dẫn</h3>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                    Mức lương cạnh tranh, thưởng hiệu suất và các phúc lợi toàn diện cho nhân viên.
                </p>
            </div>

            {/* Card 2: Growth Opportunity */}
            <div className="bg-[#EFF6E7] rounded-xl p-4 mb-6">
                <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-green-200 rounded-lg flex items-center justify-center shrink-0 text-lg">
                        🚀
                    </div>
                    <h3 className="font-bold text-gray-800 text-[15px]">Phát triển sự nghiệp</h3>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                    Học hỏi từ những chuyên gia, phát triển kỹ năng và thăng tiến trong tổ chức.
                </p>
            </div>

            {/* Buttons */}
            <button
                onClick={onNext}
                className="w-full bg-green-700 text-white py-3 rounded-full font-semibold hover:bg-green-800 transition mb-3"
            >
                Đăng ký Nhân viên Trạm Xanh
            </button>
        </div>
    );
}
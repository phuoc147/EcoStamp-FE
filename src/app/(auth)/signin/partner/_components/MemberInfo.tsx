"use client";

import { Mail, Phone, User } from "lucide-react";

interface FormData {
    fullName: string;
    phoneNumber: string;
    email: string;
    stationName: string;
    stationType: string;
    address: string;
    operatingHours: string;
    stationImage: string;
    latitude: number;
    longitude: number;
    idType: string;
    idNumber: string;
    idFrontImage: string;
    idBackImage: string;
    businessLicense: string;
    pin: string;
}

interface Step2Props {
    formData: FormData;
    handleInputChange: (field: keyof FormData, value: string | File) => void;
    errorMessage: string | null;
    onNext: () => void;
    onBack: () => void;
}

export default function MemberInfo({
    formData,
    handleInputChange,
    errorMessage,
    onNext,
    onBack,
}: Step2Props) {
    return (
        <div className="w-full bg-[#f5f7f3] min-h-screen flex flex-col overflow-y-auto scrollbar-hide">
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#f5f7f3]">
                <span className="text-green-700 hover:opacity-70 cursor-pointer text-lg" onClick={onBack}>←</span>
                <span className="text-center text-sm font-semibold text-green-700">
                    Đăng ký Trạm Xanh
                </span>
                <div className="w-5"></div>
            </div>

            {/* Progress */}
            <div className="px-4 py-3">
                <p className="text-center text-sm font-medium text-gray-700 mb-3">
                    Bước 1 / 4
                </p>
                <div className="w-full bg-gray-300 rounded-full h-2">
                    <div className="bg-green-700 h-2 rounded-full" style={{ width: '25%' }}></div>
                </div>
            </div>

            {/* Content */}
            <div className="flex-1 px-4 pb-4">
                {/* Title */}
                <h1 className="text-[28px] font-bold text-gray-900 mb-4 leading-tight text-center">
                    Đăng ký Thành viên
                </h1>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-5 leading-relaxed text-center">
                    Bắt đầu hành trình sống xanh cùng cộng đồng EcoStamp.
                </p>

                {/* Form Container */}
                <div className="bg-white rounded-3xl p-6 space-y-6 mb-6">
                    {/* Error Message */}
                    {errorMessage && (
                        <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm">
                            {errorMessage}
                        </div>
                    )}

                    {/* Full Name */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-900 mb-3">
                            Họ tên
                        </label>
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Nguyễn Văn A"
                                value={formData.fullName}
                                onChange={(e) => handleInputChange("fullName", e.target.value)}
                                className="w-full text-[15px] px-4 py-4 rounded-full bg-[#f5f7f3] text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-600"
                            />
                            <User size={20} className="absolute right-4 top-1/2 transform -translate-y-1/2 text-green-600" />
                        </div>
                    </div>

                    {/* Phone */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-900 mb-3">
                            Số điện thoại
                        </label>
                        <div className="relative">
                            <input
                                type="tel"
                                placeholder="012 345 6789"
                                value={formData.phoneNumber}
                                onChange={(e) =>
                                    handleInputChange("phoneNumber", e.target.value)
                                }
                                className="w-full text-[15px] px-4 py-4 rounded-full bg-[#f5f7f3] text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-600"
                            />
                            <Phone size={20} className="absolute right-4 top-1/2 transform -translate-y-1/2 text-green-600" />
                        </div>
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-900 mb-3">
                            Email
                        </label>
                        <div className="relative">
                            <input
                                type="email"
                                placeholder="example@ecostamp.vn"
                                value={formData.email}
                                onChange={(e) => handleInputChange("email", e.target.value)}
                                className="w-full text-[15px] px-4 py-4 rounded-full bg-[#f5f7f3] text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-600"
                            />
                            <Mail size={20} className="absolute right-4 top-1/2 transform -translate-y-1/2 text-green-600" />
                        </div>
                    </div>
                </div>

                {/* Button */}
                <button
                    onClick={onNext}
                    className="w-full py-4 bg-green-700 text-white font-semibold rounded-full hover:bg-green-800 transition mb-5"
                >
                    Tiếp tục →
                </button>

                {/* Footer Text */}
                <p className="text-center text-xs text-gray-600">
                    Bằng cách tiếp tục, bạn đồng ý với{' '}
                    <span className="text-green-700 font-semibold cursor-pointer hover:underline">
                        Điều khoản
                    </span>
                    {' & '}
                    <span className="text-green-700 font-semibold cursor-pointer hover:underline">
                        Chính sách
                    </span>
                    {' '}của chúng tôi.
                </p>
            </div>
        </div>
    );
}
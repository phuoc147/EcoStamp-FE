"use client";

import { Upload, AlertCircle } from "lucide-react";

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

interface StepProps {
    formData: FormData;
    handleInputChange: (field: keyof FormData, value: string | File) => void;
    errorMessage: string | null;
    onNext: () => void;
    onBack: () => void;
}

export default function VerificationInfo({ formData, handleInputChange, errorMessage, onNext, onBack }: StepProps) {
    return (
        <div className="w-full bg-[#f5f7f3] min-h-screen flex flex-col">
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
                    BƯỚC 3 / 4
                </p>
                <div className="w-full bg-gray-300 rounded-full h-2">
                    <div className="bg-green-700 h-2 rounded-full" style={{ width: '75%' }}></div>
                </div>
            </div>

            {/* Content */}
            <div className="flex-1 px-4 pb-4 overflow-y-auto">
                {/* Title */}
                <h1 className="text-[28px] font-bold text-gray-900 mb-4 leading-tight text-center">
                    Xác Nhận Chủ Trạm
                </h1>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-8 leading-relaxed text-center">
                    Vui lòng tải lên tài liệu nhận dạng (CCCD) và giấy phép kinh doanh để hoàn tất xác minh quyền sở hữu trạm.
                </p>

                {/* Error Message */}
                {errorMessage && (
                    <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm mb-6">
                        {errorMessage}
                    </div>
                )}

                {/* Upload Cards Container */}
                <div className="space-y-5 mb-8">
                    {/* Front ID Card */}
                    <div>
                        <p className="text-sm font-medium text-gray-700 mb-2">Mặt trước CCCD</p>
                        <label className="block border-2 border-dashed border-gray-400 rounded-2xl p-8 text-center cursor-pointer hover:bg-gray-50 transition">
                            {formData.idFrontImage ? (
                                <div className="flex flex-col items-center">
                                    <img
                                        src={formData.idFrontImage}
                                        alt="ID Front preview"
                                        className="w-full h-40 object-cover rounded-lg border border-gray-300 mb-2"
                                    />
                                    <p className="text-green-600 text-xs font-semibold">✓ Đã tải lên - Nhấn để thay đổi</p>
                                </div>
                            ) : (
                                <div className="flex flex-col items-center">
                                    <div className="w-16 h-16 bg-[#e8f0e2] rounded-full flex items-center justify-center mb-2">
                                        <Upload size={32} className="text-green-600" />
                                    </div>
                                    <p className="text-gray-900 font-medium mb-1">
                                        Nhấn để tải lên hoặc kéo ảnh
                                    </p>
                                    <p className="text-xs text-gray-600">
                                        PNG, JPG tối đa 10MB
                                    </p>
                                </div>
                            )}
                            <input
                                type="file"
                                accept="image/*,.pdf"
                                onChange={(e) => {
                                    const file = e.target.files?.[0];
                                    if (file) handleInputChange("idFrontImage", file);
                                }}
                                className="hidden"
                            />
                        </label>
                    </div>

                    {/* Back ID Card */}
                    <div>
                        <p className="text-sm font-medium text-gray-700 mb-2">Mặt sau CCCD</p>
                        <label className="block border-2 border-dashed border-gray-400 rounded-2xl p-8 text-center cursor-pointer hover:bg-gray-50 transition">
                            {formData.idBackImage ? (
                                <div className="flex flex-col items-center">
                                    <img
                                        src={formData.idBackImage}
                                        alt="ID Back preview"
                                        className="w-full h-40 object-cover rounded-lg border border-gray-300 mb-2"
                                    />
                                    <p className="text-green-600 text-xs font-semibold">✓ Đã tải lên - Nhấn để thay đổi</p>
                                </div>
                            ) : (
                                <div className="flex flex-col items-center">
                                    <div className="w-16 h-16 bg-[#e8f0e2] rounded-full flex items-center justify-center mb-3">
                                        <Upload size={32} className="text-green-600" />
                                    </div>
                                    <p className="text-gray-900 font-medium mb-1">
                                        Nhấn để tải lên hoặc kéo ảnh
                                    </p>
                                    <p className="text-xs text-gray-600">
                                        PNG, JPG tối đa 10MB
                                    </p>
                                </div>
                            )}
                            <input
                                type="file"
                                accept="image/*,.pdf"
                                onChange={(e) => {
                                    const file = e.target.files?.[0];
                                    if (file) handleInputChange("idBackImage", file);
                                }}
                                className="hidden"
                            />
                        </label>
                    </div>

                    {/* Business License Card */}
                    <div>
                        <p className="text-sm font-medium text-gray-700 mb-3">Giấy phép kinh doanh</p>
                        <label className="block border-2 border-dashed border-gray-400 rounded-2xl p-8 text-center cursor-pointer hover:bg-gray-50 transition">
                            {formData.businessLicense ? (
                                <div className="flex flex-col items-center">
                                    <img
                                        src={formData.businessLicense}
                                        alt="Business License preview"
                                        className="w-full h-40 object-cover rounded-lg border border-gray-300 mb-2"
                                    />
                                    <p className="text-green-600 text-xs font-semibold">✓ Đã tải lên - Nhấn để thay đổi</p>
                                </div>
                            ) : (
                                <div className="flex flex-col items-center">
                                    <div className="w-16 h-16 bg-[#e8f0e2] rounded-full flex items-center justify-center mb-3">
                                        <Upload size={32} className="text-green-600" />
                                    </div>
                                    <p className="text-gray-900 font-medium mb-1">
                                        Nhấn để tải lên hoặc kéo ảnh
                                    </p>
                                    <p className="text-xs text-gray-600">
                                        PNG, JPG tối đa 10MB
                                    </p>
                                </div>
                            )}
                            <input
                                type="file"
                                accept="image/*,.pdf"
                                onChange={(e) => {
                                    const file = e.target.files?.[0];
                                    if (file) handleInputChange("businessLicense", file);
                                }}
                                className="hidden"
                            />
                        </label>
                    </div>
                </div>

                {/* Status Message */}
                <div className="bg-[#e8f0e2] rounded-2xl p-4 mb-6">
                    <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-[#7ec66c] rounded-xl flex items-center justify-center shrink-0">
                            <span className="text-xl">⏱️</span>
                        </div>
                        <div className="flex-1">
                            <h4 className="font-bold text-gray-900 text-sm mb-2">Thông tin sẽ được duyệt trong 24-48 giờ tới</h4>
                            <p className="text-xs text-gray-600 leading-relaxed">
                                Đội ngũ của Trạm Xanh sẽ kiểm tra tính xác thực của tài liệu để đảm bảo an toàn cho mạng lưới sạch toàn quốc.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Continue Button */}
                <button
                    onClick={onNext}
                    className="w-full py-4 bg-green-700 text-white font-semibold rounded-full hover:bg-green-800 transition"
                >
                    Tiếp tục →
                </button>
            </div>
        </div>
    );
}
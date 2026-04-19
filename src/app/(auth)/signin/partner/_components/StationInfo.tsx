"use client";

import { MapPin, Upload } from "lucide-react";

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

export default function StationInfo({ formData, handleInputChange, errorMessage, onNext, onBack }: StepProps) {
    return (
        <div className="w-full bg-[#f5f7f3] min-h-screen flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 bg-[#f5f7f3]">
                <span className="text-green-700 hover:opacity-70 cursor-pointer text-xl" onClick={onBack}>←</span>
                <span className="text-center text-lg font-semibold text-green-700">
                    Đăng ký Trạm Xanh
                </span>
                <div className="w-6"></div>
            </div>

            {/* Progress */}
            <div className="px-6 py-4">
                <p className="text-center text-sm font-medium text-gray-700 mb-3">
                    BƯỚC 2 / 4
                </p>
                <div className="w-full bg-gray-300 rounded-full h-2">
                    <div className="bg-green-700 h-2 rounded-full" style={{ width: '50%' }}></div>
                </div>
            </div>

            {/* Content */}
            <div className="flex-1 px-6 pb-6 overflow-y-auto">
                {/* Title */}
                <h1 className="text-[28px] font-bold text-gray-900 mb-4 leading-tight text-center">
                    Thông tin Trạm Xanh
                </h1>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-6 leading-relaxed text-center">
                    Hãy cung cấp các thông tin cơ bản về cơ sở của bạn để hoàn tất hộ sơ.
                </p>

                {/* Error Message */}
                {errorMessage && (
                    <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm mb-6">
                        {errorMessage}
                    </div>
                )}

                {/* Station Name */}
                <div className="mb-5">
                    <label className="block text-sm font-semibold text-gray-900 mb-3">
                        Tên cơ sở kinh doanh
                    </label>
                    <input
                        type="text"
                        placeholder="Nhập tên trạm của bạn"
                        value={formData.stationName}
                        onChange={(e) =>
                            handleInputChange("stationName", e.target.value)
                        }
                        className="w-full text-[15px] px-4 py-4 rounded-full bg-[#e8f0e2] text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-600"
                    />
                </div>

                {/* Address */}
                <div className="mb-5">
                    <label className="block text-sm font-semibold text-gray-900 mb-3">
                        Địa chỉ chi tiết
                    </label>
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Số nhà, tên đường, quận/huyện..."
                            value={formData.address}
                            onChange={(e) => handleInputChange("address", e.target.value)}
                            className="w-full text-[15px] px-4 py-4 pl-12 rounded-full bg-[#e8f0e2] text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-600"
                        />
                        <MapPin size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-green-600" />
                    </div>
                </div>

                {/* Location Confirmation */}
                <div className="mb-6">
                    <label className="block text-sm font-semibold text-gray-900 mb-3">
                        Xác nhận vị trí
                    </label>
                    {/* Map Container */}
                    <div className="w-full h-64 bg-linear-to-br from-blue-100 to-blue-50 rounded-2xl border-2 border-blue-200 relative overflow-hidden cursor-move group">
                        {/* Map Grid Background */}
                        <div className="absolute inset-0 opacity-20">
                            <div className="absolute inset-0" style={{
                                backgroundImage: `
                                            linear-gradient(rgba(148, 187, 233, 0.5) 1px, transparent 1px),
                                            linear-gradient(90deg, rgba(148, 187, 233, 0.5) 1px, transparent 1px)
                                        `,
                                backgroundSize: '40px 40px'
                            }}></div>
                        </div>

                        {/* Map Info */}
                        <div className="absolute top-3 left-3 bg-white bg-opacity-90 px-3 py-1 rounded-lg text-xs font-semibold text-gray-700 z-10">
                            OpenStreetMap
                        </div>

                        {/* Zoom Controls */}
                        <div className="absolute right-3 top-3 flex flex-col gap-2 z-10">
                            <button className="w-8 h-8 bg-white rounded shadow hover:bg-gray-50">+</button>
                            <button className="w-8 h-8 bg-white rounded shadow hover:bg-gray-50">−</button>
                        </div>

                        {/* Center Marker */}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                            <div className="relative">
                                {/* Marker Pin */}
                                <div className="w-8 h-8 bg-green-600 rounded-full shadow-lg border-4 border-white flex items-center justify-center cursor-grab active:cursor-grabbing"
                                    onMouseDown={(e) => {
                                        const container = e.currentTarget.parentElement?.parentElement;
                                        if (!container) return;

                                        const startX = e.clientX;
                                        const startY = e.clientY;
                                        const rect = container.getBoundingClientRect();

                                        const handleMouseMove = (moveEvent: MouseEvent) => {
                                            const deltaX = moveEvent.clientX - startX;
                                            const deltaY = moveEvent.clientY - startY;

                                            const newX = ((rect.width / 2 + deltaX) / rect.width) * 180 - 90;
                                            const newY = 90 - ((rect.height / 2 + deltaY) / rect.height) * 180;

                                            handleInputChange("latitude", String(Math.max(-90, Math.min(90, newY))));
                                            handleInputChange("longitude", String(Math.max(-180, Math.min(180, newX))));
                                        };

                                        const handleMouseUp = () => {
                                            document.removeEventListener('mousemove', handleMouseMove);
                                            document.removeEventListener('mouseup', handleMouseUp);
                                        };

                                        document.addEventListener('mousemove', handleMouseMove);
                                        document.addEventListener('mouseup', handleMouseUp);
                                    }}
                                >
                                    <MapPin size={16} className="text-white" />
                                </div>
                                {/* Ripple Effect */}
                                <div className="absolute inset-0 rounded-full bg-green-600 opacity-20 animate-pulse" style={{ width: '32px', height: '32px', marginLeft: '-12px', marginTop: '-12px' }}></div>
                            </div>
                        </div>

                        {/* Coordinates Display */}
                        <div className="absolute bottom-3 left-3 bg-white bg-opacity-90 px-3 py-2 rounded-lg text-xs font-mono text-gray-700 z-10">
                            <div>Lat: {formData.latitude.toFixed(4)}</div>
                            <div>Lng: {formData.longitude.toFixed(4)}</div>
                        </div>
                    </div>
                    <p className="text-xs text-gray-600 mt-2">
                        Kéo marker để chọn vị trí trạm của bạn
                    </p>
                </div>

                {/* Station Photo Upload */}
                <div className="mb-6">
                    <label className="block text-sm font-semibold text-gray-900 mb-3">
                        Tải ảnh trạm
                    </label>
                    <label className="block border-2 border-dashed border-gray-400 rounded-2xl p-8 text-center cursor-pointer hover:bg-gray-50 transition">
                        {formData.stationImage ? (
                            <div className="flex flex-col items-center">
                                <img
                                    src={formData.stationImage}
                                    alt="Station preview"
                                    className="w-full h-48 object-cover rounded-lg border border-gray-300 mb-3"
                                />
                                <p className="text-green-600 text-sm font-semibold">✓ Đã tải lên - Nhấn để thay đổi</p>
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
                                    PNG, JPG tối đa 10MB (Khuyến nghị 3-5 ảnh)
                                </p>
                            </div>
                        )}
                        <input
                            type="file"
                            accept="image/*"
                            multiple
                            onChange={(e) => {
                                const file = e.target.files?.[0];
                                if (file) handleInputChange("stationImage", file);
                            }}
                            className="hidden"
                        />
                    </label>
                </div>

                {/* Button */}
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
"use client";

import { useState } from "react";
import {
    ChevronRight,
    Mail,
    Phone,
    Lock,
    MapPin,
    FileText,
    CheckCircle,
    User,
    Store,
    Upload,
    Clock,
    Home,
    AlertCircle,
    Bell,
} from "lucide-react";

type Step = 1 | 2 | 3 | 4 | 5 | 6;

interface FormData {
    // Step 2: Member Info
    fullName: string;
    phoneNumber: string;
    email: string;

    // Step 3: Station Info
    stationName: string;
    stationType: string;
    address: string;
    operatingHours: string;
    stationImage: string;
    latitude: number;
    longitude: number;

    // Step 4: Verification Info
    idType: string;
    idNumber: string;
    idFrontImage: string;
    idBackImage: string;
    businessLicense: string;

    // Step 5: Security
    pin: string;
}

export default function SignUpHero() {
    const [step, setStep] = useState<Step>(1);
    const [formData, setFormData] = useState<FormData>({
        fullName: "",
        phoneNumber: "",
        email: "",
        stationName: "",
        stationType: "",
        address: "",
        operatingHours: "",
        stationImage: "",
        latitude: 21.0285,
        longitude: 105.8542,
        idType: "CCCD",
        idNumber: "",
        idFrontImage: "",
        idBackImage: "",
        businessLicense: "",
        pin: "",
    });
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const handleInputChange = (
        field: keyof FormData,
        value: string | File
    ) => {
        if (field === "idFrontImage" || field === "idBackImage" || field === "stationImage" || field === "businessLicense") {
            if (value instanceof File) {
                const reader = new FileReader();
                reader.onload = () => {
                    setFormData((prev) => ({
                        ...prev,
                        [field]: reader.result as string,
                    }));
                };
                reader.readAsDataURL(value);
            }
        } else {
            setFormData((prev) => ({
                ...prev,
                [field]: value as string,
            }));
        }
    };

    const handleNext = () => {
        setErrorMessage(null);

        // Validation for Step 2
        if (step === 2) {
            if (!formData.fullName.trim()) {
                setErrorMessage("Vui lòng nhập họ tên");
                return;
            }
            if (!formData.phoneNumber.trim()) {
                setErrorMessage("Vui lòng nhập số điện thoại");
                return;
            }
            if (!formData.email.trim()) {
                setErrorMessage("Vui lòng nhập email");
                return;
            }
            // Basic email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(formData.email)) {
                setErrorMessage("Email không hợp lệ");
                return;
            }
        }

        if (step < 6) {
            setStep((step + 1) as Step);
        }
    };

    const handleBack = () => {
        setErrorMessage(null);
        if (step > 1) {
            setStep((step - 1) as Step);
        }
    };

    const handleSubmit = () => {
        // TODO: API call to submit signup
        console.log("Submitting:", formData);
        setStep(6);
    };

    return (
        <section className="w-full max-w-md">
            {/* Step 1: Intro */}
            {step === 1 && (
                <div className="w-full bg-[#f5f7f3] p-6 shadow-md">
                    {/* Header */}
                    <div className="flex items-center gap-2 mb-6">
                        <span className="text-green-700 hover:opacity-70 cursor-pointer">←</span>
                        <span className="text-base font-semibold text-green-700">
                            EcoStamp
                        </span>
                    </div>

                    {/* Impact Badge */}
                    <div className="relative w-full h-32 rounded-2xl overflow-hidden mb-6 bg-gradient-to-br from-green-900 to-green-700 flex items-center justify-center">
                        <div className="text-6xl">🌲</div>
                        <span className="absolute top-3 left-3 bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded-full font-semibold">
                            🌱 Green Station
                        </span>
                    </div>

                    {/* Title */}
                    <h1 className="text-[28px] font-bold leading-tight mb-4">
                        <span className="text-gray-800">Trở thành Đối tác </span>
                        <span className="text-green-700">Trạm Xanh</span>
                    </h1>

                    {/* Description */}
                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                        Tham gia mạng lưới EcoStamp để cùng nhau kiến tạo một tương lai bền vững,
                        tận dụng kết nối cộng đồng và nhận những phần thưởng xứng đáng.
                    </p>

                    {/* Card 1: Sustainability */}
                    <div className="bg-[#EFF6E7] rounded-xl p-4 mb-3">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="w-10 h-10 bg-green-200 rounded-lg flex items-center justify-center flex-shrink-0 text-lg">
                                🌱
                            </div>
                            <h3 className="font-bold text-gray-800 text-[15px]">Tính bền vững</h3>
                        </div>
                        <p className="text-xs text-gray-600 leading-relaxed">
                            Thực hiện các mục tiêu xanh hóa môi trường sống thông qua mô hình kinh doanh tuần hoàn.
                        </p>
                    </div>

                    {/* Card 2: Community */}
                    <div className="bg-[#EFF6E7] rounded-xl p-4 mb-6">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="w-10 h-10 bg-green-200 rounded-lg flex items-center justify-center flex-shrink-0 text-lg">
                                👥
                            </div>
                            <h3 className="font-bold text-gray-800 text-[15px]">Cộng đồng</h3>
                        </div>
                        <p className="text-xs text-gray-600 leading-relaxed">
                            Kết nối với mạng lưới khách hàng có ý thức và mở rộng cơ hội xây dựng uy tín thương hiệu.
                        </p>
                    </div>

                    {/* Buttons */}
                    <button
                        onClick={handleNext}
                        className="w-full bg-green-700 text-white py-3 rounded-full font-semibold hover:bg-green-800 transition mb-3"
                    >
                        Đăng ký Trạm Xanh
                    </button>
                </div>
            )}


            {/* Step 2: Member Info */}
            {step === 2 && (
                <div className="w-full bg-[#f5f7f3] min-h-screen flex flex-col">
                    {/* Header */}
                    <div className="flex items-center justify-between px-6 py-4 bg-[#f5f7f3]">
                        <span className="text-green-700 hover:opacity-70 cursor-pointer text-xl">←</span>
                        <span className="text-center text-lg font-semibold text-green-700">
                            Đăng ký Trạm Xanh
                        </span>
                        <div className="w-6"></div>
                    </div>

                    {/* Progress */}
                    <div className="px-6 py-4">
                        <p className="text-center text-sm font-medium text-gray-700 mb-3">
                            Bước 1 / 4
                        </p>
                        <div className="w-full bg-gray-300 rounded-full h-2">
                            <div className="bg-green-700 h-2 rounded-full" style={{ width: '25%' }}></div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 px-6 pb-6">
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
                            onClick={handleNext}
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
            )}


            {/* Step 3: Station Info */}
            {step === 3 && (
                <div className="w-full bg-[#f5f7f3] min-h-screen flex flex-col">
                    {/* Header */}
                    <div className="flex items-center justify-between px-6 py-4 bg-[#f5f7f3]">
                        <span className="text-green-700 hover:opacity-70 cursor-pointer text-xl" onClick={handleBack}>←</span>
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
                            <div className="w-full h-64 bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl border-2 border-blue-200 relative overflow-hidden cursor-move group">
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

                                                    setFormData(prev => ({
                                                        ...prev,
                                                        longitude: Math.max(-180, Math.min(180, newX)),
                                                        latitude: Math.max(-90, Math.min(90, newY))
                                                    }));
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
                            {formData.stationImage && (
                                <p className="text-green-600 text-sm mt-2">✓ Đã tải lên</p>
                            )}
                        </div>

                        {/* Button */}
                        <button
                            onClick={handleNext}
                            className="w-full py-4 bg-green-700 text-white font-semibold rounded-full hover:bg-green-800 transition"
                        >
                            Tiếp tục →
                        </button>
                    </div>
                </div>
            )}

            {/* Step 4: Verification Info */}
            {step === 4 && (
                <div className="w-full bg-[#f5f7f3] min-h-screen flex flex-col">
                    {/* Header */}
                    <div className="flex items-center justify-between px-6 py-4 bg-[#f5f7f3]">
                        <span className="text-green-700 hover:opacity-70 cursor-pointer text-xl" onClick={handleBack}>←</span>
                        <span className="text-center text-lg font-semibold text-green-700">
                            Đăng ký Trạm Xanh
                        </span>
                        <div className="w-6"></div>
                    </div>

                    {/* Progress */}
                    <div className="px-6 py-4">
                        <p className="text-center text-sm font-medium text-gray-700 mb-3">
                            BƯỚC 3 / 4
                        </p>
                        <div className="w-full bg-gray-300 rounded-full h-2">
                            <div className="bg-green-700 h-2 rounded-full" style={{ width: '75%' }}></div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 px-6 pb-6 overflow-y-auto">
                        {/* Title */}
                        <h1 className="text-[28px] font-bold text-gray-900 mb-4 leading-tight text-center">
                            Xác Nhận Chủ Trạm
                        </h1>

                        {/* Description */}
                        <p className="text-gray-600 text-sm mb-8 leading-relaxed text-center">
                            Vui lòng tải lên tài liệu nhận dạng (CCCD) và giấy phép kinh doanh để hoàn tất xác minh quyền sở hữu trạm.
                        </p>

                        {/* Upload Cards Container */}
                        <div className="space-y-5 mb-8">
                            {/* Front ID Card */}
                            <div>
                                <p className="text-sm font-medium text-gray-700 mb-2">Mặt trước CCCD</p>
                                <label className="block border-2 border-dashed border-gray-400 rounded-2xl p-8 text-center cursor-pointer hover:bg-gray-50 transition">
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
                                {formData.idFrontImage && (
                                    <p className="text-green-600 text-sm mt-2">✓ Đã tải lên</p>
                                )}
                            </div>

                            {/* Back ID Card */}
                            <div>
                                <p className="text-sm font-medium text-gray-700 mb-2">Mặt sau CCCD</p>
                                <label className="block border-2 border-dashed border-gray-400 rounded-2xl p-8 text-center cursor-pointer hover:bg-gray-50 transition">
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
                                {formData.idBackImage && (
                                    <p className="text-green-600 text-sm mt-2">✓ Đã tải lên</p>
                                )}
                            </div>

                            {/* Business License Card */}
                            <div>
                                <p className="text-sm font-medium text-gray-700 mb-3">Giấy phép kinh doanh</p>
                                <label className="block border-2 border-dashed border-gray-400 rounded-2xl p-8 text-center cursor-pointer hover:bg-gray-50 transition">
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
                                {formData.businessLicense && (
                                    <p className="text-green-600 text-sm mt-2">✓ Đã tải lên</p>
                                )}
                            </div>
                        </div>

                        {/* Status Message */}
                        <div className="bg-[#e8f0e2] rounded-2xl p-4 mb-6">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 bg-[#7ec66c] rounded-xl flex items-center justify-center flex-shrink-0">
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
                            onClick={handleNext}
                            className="w-full py-4 bg-green-700 text-white font-semibold rounded-full hover:bg-green-800 transition"
                        >
                            Tiếp tục →
                        </button>
                    </div>
                </div>
            )}

            {/* Step 5: Security PIN */}
            {step === 5 && (
                <div className="w-full bg-[#f5f7f3] min-h-screen flex flex-col">
                    {/* Header */}
                    <div className="flex items-center justify-between px-6 py-4 bg-[#f5f7f3]">
                        <span className="text-green-700 hover:opacity-70 cursor-pointer text-xl" onClick={handleBack}>←</span>
                        <span className="text-center text-lg font-semibold text-green-700">
                            Đăng ký Trạm Xanh
                        </span>
                        <div className="w-6"></div>
                    </div>

                    {/* Progress */}
                    <div className="px-6 py-4">
                        <p className="text-center text-sm font-medium text-gray-700 mb-3">
                            BƯỚC 4 / 4
                        </p>
                        <div className="w-full bg-gray-300 rounded-full h-2">
                            <div className="bg-green-700 h-2 rounded-full" style={{ width: '100%' }}></div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 px-6 pb-6 overflow-y-auto flex flex-col">
                        {/* Title */}
                        <h1 className="text-[28px] font-bold text-gray-900 mb-4 leading-tight text-center">
                            Thiết lập Mã PIN bảo mật
                        </h1>

                        {/* Description */}
                        <p className="text-gray-600 text-sm mb-6 leading-relaxed text-center">
                            Thiết lập mã PIN 6 số để bảo vệ tài khoản và đăng nhập nhanh hơn.
                        </p>

                        {/* PIN Input Boxes */}
                        <div className="flex justify-center gap-3 mb-6">
                            {/* Hidden input for PIN entry */}
                            <input
                                type="text"
                                maxLength={6}
                                inputMode="numeric"
                                value={formData.pin}
                                onChange={(e) => {
                                    const value = e.target.value.replace(/\D/g, '').slice(0, 6);
                                    handleInputChange('pin', value);
                                }}
                                style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }}
                                autoFocus
                            />
                            {/* Display boxes */}
                            {[0, 1, 2, 3, 4, 5].map((index) => (
                                <div
                                    key={index}
                                    onClick={() => {
                                        const input = document.querySelector('input[style*="opacity: 0"]') as HTMLInputElement;
                                        input?.focus();
                                    }}
                                    className="w-12 h-12 flex items-center justify-center text-lg font-black rounded-2xl bg-white border-2 border-green-500 cursor-pointer hover:bg-green-50 hover:border-green-700 transition text-gray-900"
                                >
                                    {formData.pin[index] || ''}
                                </div>
                            ))}
                        </div>

                        {/* Number Pad */}
                        <div className="flex-1 flex flex-col justify-center">
                            <div className="grid grid-cols-3 gap-4 mb-6">
                                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                                    <button
                                        key={num}
                                        onClick={() => {
                                            if (formData.pin.length < 6) {
                                                handleInputChange('pin', formData.pin + num);
                                            }
                                        }}
                                        className="py-3 bg-white text-lg font-bold text-gray-900 rounded-xl border border-gray-300 hover:bg-gray-50 transition"
                                    >
                                        {num}
                                    </button>
                                ))}
                            </div>

                            {/* Bottom Row: 0 and Delete */}
                            <div className="grid grid-cols-3 gap-4">
                                <div></div>
                                <button
                                    onClick={() => {
                                        if (formData.pin.length < 6) {
                                            handleInputChange('pin', formData.pin + '0');
                                        }
                                    }}
                                    className="py-3 bg-white text-lg font-bold text-gray-900 rounded-xl border border-gray-300 hover:bg-gray-50 transition"
                                >
                                    0
                                </button>
                                <button
                                    onClick={() => {
                                        handleInputChange('pin', formData.pin.slice(0, -1));
                                    }}
                                    className="py-3 bg-white text-lg font-bold text-red-600 rounded-xl border border-gray-300 hover:bg-gray-50 transition flex items-center justify-center"
                                >
                                    ✕
                                </button>
                            </div>
                        </div>

                        {/* Complete Button */}
                        <button
                            onClick={handleSubmit}
                            className="w-full py-4 bg-green-700 text-white font-semibold rounded-full hover:bg-green-800 transition"
                        >
                            Hoàn tất đăng ký
                        </button>
                    </div>
                </div>
            )}

            {/* Step 6: Success */}
            {step === 6 && (
                <div className="w-full bg-[#f5f7f3] min-h-screen flex flex-col">
                    {/* Header */}
                    <div className="flex items-center justify-between px-6 py-4 bg-[#f5f7f3]">
                        <span className="text-green-700 hover:opacity-70 cursor-pointer text-xl">←</span>
                        <span className="text-center text-lg font-semibold text-green-700">
                            Đăng ký Trạm Xanh
                        </span>
                        <div className="w-6"></div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 px-6 pb-6 overflow-y-auto flex flex-col">
                        {/* Clock Icon Animation */}
                        <div className="flex justify-center mb-4 mt-6">
                            <div className="relative w-28 h-28 bg-white rounded-3xl flex items-center justify-center shadow-lg">
                                <Clock size={64} className="text-green-700" />
                            </div>
                        </div>

                        {/* Title */}
                        <h1 className="text-[28px] font-bold text-gray-900 mb-4 leading-tight text-center">
                            Đăng ký thành công!
                        </h1>

                        {/* Status Badge */}
                        <div className="flex justify-center mb-4">
                            <div className="flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-semibold">
                                <AlertCircle size={16} />
                                TRẠNG THÁI: CHỜ DUYỆT
                            </div>
                        </div>

                        {/* Description */}
                        <p className="text-gray-600 text-center text-sm mb-4 leading-relaxed">
                            Tài khoản của bạn đang được xét duyệt. Chúng tôi sẽ thông báo cho bạn ngay khi có kết quả <span className="text-green-700 font-bold">(thường trong vòng 24h)</span>.
                        </p>

                        {/* Info Cards */}
                        <div className="space-y-4 mb-4">
                            {/* Card 1: Quy trình chuyên gia */}
                            <div className="bg-white rounded-2xl p-5 flex gap-4">
                                <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <span className="text-xl">👤</span>
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-bold text-gray-900 text-[15px] mb-1">Quy trình chuyên gia</h3>
                                    <p className="text-xs text-gray-600">Đội ngũ của chúng tôi đang kiểm tra các thông tin chứng chỉ sinh thái của doanh nghiệp bạn.</p>
                                </div>
                            </div>

                            {/* Card 2: Thông báo đẩy */}
                            <div className="bg-white rounded-2xl p-5 flex gap-4">
                                <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <Bell size={20} className="text-green-700" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-bold text-gray-900 text-[15px] mb-1">Thông báo đẩy</h3>
                                    <p className="text-xs text-gray-600">Đảm bảo bật thông báo để nhận cập nhật tức thì về quyền truy cập Dashboard.</p>
                                </div>
                            </div>
                        </div>

                        {/* Home Button */}
                        <button
                            onClick={() => setStep(1)}
                            className="w-full py-3 bg-green-700 text-white font-semibold text-lg rounded-full hover:bg-green-800 transition flex items-center justify-center gap-2 mb-2"
                        >
                            <Home size={18} />
                            VỀ TRANG CHỦ
                        </button>

                        {/* Footer Text */}
                        <p className="text-center text-xs text-gray-600">
                            CẢM ƠN BẠN ĐÃ CHUNG TAY BẢO VỆ MÔI TRƯỜNG
                        </p>
                    </div>
                </div>
            )}
        </section>
    );
}
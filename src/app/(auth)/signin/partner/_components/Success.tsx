"use client";

import { Clock, AlertCircle, Home, Bell } from "lucide-react";
import { useRouter } from "next/navigation";

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

export default function Success({ onBack }: StepProps) {
    const router = useRouter();

    const handleGoHome = () => {
        router.push('/signin/partner?step=1');
    };

    return (
        <div className="w-full bg-[#f5f7f3] min-h-screen flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#f5f7f3]">
                <span className="text-green-700 hover:opacity-70 cursor-pointer text-lg" onClick={onBack}>←</span>
                <span className="text-center text-sm font-semibold text-green-700">
                    Hoàn tất
                </span>
                <div className="w-5"></div>
            </div>

            {/* Content */}
            <div className="flex-1 px-4 pb-4 overflow-y-auto flex flex-col">
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
                        <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center shrink-0">
                            <span className="text-xl">👤</span>
                        </div>
                        <div className="flex-1">
                            <h3 className="font-bold text-gray-900 text-[15px] mb-1">Quy trình chuyên gia</h3>
                            <p className="text-xs text-gray-600">Đội ngũ của chúng tôi đang kiểm tra các thông tin chứng chỉ sinh thái của doanh nghiệp bạn.</p>
                        </div>
                    </div>

                    {/* Card 2: Thông báo đẩy */}
                    <div className="bg-white rounded-2xl p-5 flex gap-4">
                        <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center shrink-0">
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
                    onClick={handleGoHome}
                    className="w-full py-3 bg-green-700 text-white font-semibold text-lg rounded-full hover:bg-green-800 transition flex items-center justify-center gap-2 mb-4"
                >
                    <Home size={18} />
                    Về Trang chủ
                </button>

                {/* Footer Text */}
                <p className="text-center text-xs text-gray-600">
                    CẢM ƠN BẠN ĐÃ CHUNG TAY BẢO VỆ MÔI TRƯỜNG
                </p>
            </div>
        </div>
    );
}
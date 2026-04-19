"use client";

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
    onSubmit: () => void;
}

export default function SetupPin({ formData, handleInputChange, errorMessage, onSubmit, onBack }: StepProps) {
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
                    BƯỚC 4 / 4
                </p>
                <div className="w-full bg-gray-300 rounded-full h-2">
                    <div className="bg-green-700 h-2 rounded-full" style={{ width: '100%' }}></div>
                </div>
            </div>

            {/* Content */}
            <div className="flex-1 px-4 pb-4 overflow-y-auto flex flex-col">
                {/* Title */}
                <h1 className="text-[28px] font-bold text-gray-900 mb-4 leading-tight text-center">
                    Thiết lập Mã PIN bảo mật
                </h1>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-6 leading-relaxed text-center">
                    Thiết lập mã PIN 6 số để bảo vệ tài khoản và đăng nhập nhanh hơn.
                </p>

                {/* Error Message */}
                {errorMessage && (
                    <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm mb-6">
                        {errorMessage}
                    </div>
                )}

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
                            {formData.pin[index] ? '•' : ''}
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
                    onClick={onSubmit}
                    className="w-full py-4 bg-green-700 text-white font-semibold rounded-full hover:bg-green-800 transition"
                >
                    Hoàn tất đăng ký
                </button>
            </div>
        </div>
    );
}
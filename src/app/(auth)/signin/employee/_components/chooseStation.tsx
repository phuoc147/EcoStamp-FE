"use client";

import { ArrowLeft, ImagePlus, ArrowRight, Upload } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

interface StepProps {
  onNext: () => void;
  onBack: () => void;
}

export default function ChooseStationPage({ onNext, onBack }: StepProps) {
  const [formData, setFormData] = useState({
    stationName: "",
    stationCode: "",
    idFrontImage: "",
    idBackImage: "",
  });

  const handleInputChange = (field: string, value: string | File) => {
    if (value instanceof File) {
      const reader = new FileReader();
      reader.onload = () => {
        setFormData((prev) => ({
          ...prev,
          [field]: reader.result as string,
        }));
      };
      reader.readAsDataURL(value);
    } else {
      setFormData((prev) => ({
        ...prev,
        [field]: value,
      }));
    }
  };
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col flex-1 p-4 md:p-12">
      <header className="flex items-center justify-between mb-6">
        <button
          onClick={onBack}
          className="p-2 -ml-2 text-[#176a21] hover:bg-emerald-50 rounded-full transition-colors"
        >
          <ArrowLeft size={24} />
        </button>
        <h1 className="font-bold text-base text-[#176a21]">Đăng ký nhân viên</h1>
        <div className="w-10" />
      </header>

      {/* Grid: 1 cột trên mobile, 2 cột trên desktop */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 flex-1">
        {/* Cột trái: Tiêu đề và Mô tả */}
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col items-center mb-6">
            <span className="text-[10px] font-bold text-gray-900 mb-2 uppercase tracking-widest">
              BƯỚC 1 / 2
            </span>
            <div className="w-32 h-1.5 bg-gray-200 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: "50%" }}
                animate={{ width: "50%" }}
                className="h-full bg-[#176a21] rounded-full"
              />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight text-gray-900 text-center">Chọn Trạm Xanh làm việc</h2>
          <p className="text-gray-500 text-lg font-medium leading-relaxed text-center max-w-md">
            Để bắt đầu nhiệm vụ, hãy xác định cơ sở bạn đang trực thuộc và cung cấp giấy tờ xác minh danh tính.
          </p>
        </div>

        {/* Cột phải: Form nhập liệu */}
        <div className="bg-[#f2f9ea]/50 lg:bg-white p-2 lg:p-8 rounded-4xl space-y-6">
          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-600 uppercase">Tên cơ sở kinh doanh</label>
            <input type="text" placeholder="Tên trạm..." value={formData.stationName} onChange={(e) => handleInputChange("stationName", e.target.value)} className="w-full bg-white lg:bg-[#f2f9ea]/40 border-none rounded-2xl py-4 px-6 focus:ring-2 focus:ring-[#176a21] outline-none shadow-sm" />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-600 uppercase">Mã cơ sở kinh doanh</label>
            <input type="text" placeholder="Mã trạm..." value={formData.stationCode} onChange={(e) => handleInputChange("stationCode", e.target.value)} className="w-full bg-white lg:bg-[#f2f9ea]/40 border-none rounded-2xl py-4 px-6 focus:ring-2 focus:ring-[#176a21] outline-none shadow-sm" />
          </div>

          {/* Responsive Upload Area: Dàn hàng ngang trên desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Front ID Card */}
            <div>
              <p className="text-xs font-bold text-gray-600 uppercase mb-2">Mặt trước CCCD</p>
              <label className="block border-2 border-dashed border-gray-400 rounded-2xl p-8 text-center cursor-pointer hover:bg-gray-50 transition">
                {formData.idFrontImage ? (
                  <div className="flex flex-col items-center">
                    <img
                      src={formData.idFrontImage}
                      alt="ID Front Preview"
                      className="w-full h-40 object-cover rounded-lg mb-2"
                    />
                    <p className="text-green-600 text-sm">✓ Đã tải lên - Nhấn để thay đổi</p>
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
              <p className="text-xs font-bold text-gray-600 uppercase mb-2">Mặt sau CCCD</p>
              <label className="block border-2 border-dashed border-gray-400 rounded-2xl p-8 text-center cursor-pointer hover:bg-gray-50 transition">
                {formData.idBackImage ? (
                  <div className="flex flex-col items-center">
                    <img
                      src={formData.idBackImage}
                      alt="ID Back Preview"
                      className="w-full h-40 object-cover rounded-lg mb-2"
                    />
                    <p className="text-green-600 text-sm">✓ Đã tải lên - Nhấn để thay đổi</p>
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
          </div>

          <button onClick={onNext} className="w-full bg-[#176a21] text-white font-bold py-5 rounded-full flex items-center justify-center gap-3 shadow-lg hover:bg-[#115018] transition-all transform active:scale-95">
            Tiếp tục <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
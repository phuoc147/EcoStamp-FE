"use client";

import { useState } from "react";

export default function ProfileAccountInfo() {
  const [isEditing, setIsEditing] = useState(false);
  
  const [userData, setUserData] = useState({
    phone: "+84 901 234 567",
    email: "tuan.tran@ecosamp.vn",
    address: "123 Đường Lê Lợi, Quận 1, TP. Hồ Chí Minh",
  });

  const INFO = [
    { 
      key: "phone", 
      icon: "call", 
      label: "Số điện thoại", 
      value: userData.phone,
      type: "tel"
    },
    { 
      key: "email", 
      icon: "mail", 
      label: "Email", 
      value: userData.email,
      type: "email"
    },
    { 
      key: "address", 
      icon: "location_on", 
      label: "Địa chỉ đăng ký", 
      value: userData.address,
      type: "text"
    },
  ];

  const handleInputChange = (key: string, value: string) => {
    setUserData((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <section className="space-y-3">
      <div className="flex items-center justify-between px-2">
        <h2 className="text-[11px] font-black uppercase tracking-widest text-[#7b5e52]">
          Thông tin tài khoản
        </h2>
        {/* Nút chuyển đổi trạng thái Sửa/Lưu */}
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="text-[11px] font-bold text-[#176a21] active:scale-95 transition-transform"
        >
          {isEditing ? "LƯU THAY ĐỔI" : "CHỈNH SỬA"}
        </button>
      </div>

      <div className="rounded-[28px] bg-white p-2 shadow-sm border border-gray-50">
        {INFO.map((item, idx) => (
          <div key={item.key}>
            <div className="flex items-start gap-4 p-4 text-left">
              <span className="material-symbols-outlined text-[#176a21] mt-1 shrink-0">
                {item.icon}
              </span>
              <div className="w-full">
                <p className="text-[10px] font-bold text-gray-400">
                  {item.label}
                </p>
                {isEditing ? (
                  <input
                    type={item.type}
                    value={item.value}
                    onChange={(e) => handleInputChange(item.key, e.target.value)}
                    className="mt-1 w-full border-b border-green-100 bg-transparent text-sm font-bold text-[#2a3127] focus:border-[#176a21] focus:outline-none"
                    autoFocus={idx === 0}
                  />
                ) : (
                  <p className="text-sm font-medium text-[#2a3127] leading-tight">
                    {item.value}
                  </p>
                )}
              </div>
            </div>
            {idx < INFO.length - 1 && (
              <div className="mx-4 h-[1px] bg-gray-50" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
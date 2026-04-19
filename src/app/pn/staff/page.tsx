"use client";

import { useState } from 'react';
import Header from '../../../components/PartnerHeader';
import BottomNav from '../../../components/BottomBars';
import { Plus_Jakarta_Sans } from 'next/font/google';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin', 'vietnamese'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

export default function StaffPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRole, setSelectedRole] = useState('TẤT CẢ');
  const [pendingApprovals, setPendingApprovals] = useState([
    { id: 1, name: 'Elena Birch', time: '2 giờ trước' },
    { id: 2, name: 'Marcus Thorne', time: '5 giờ trước' },
  ]);
  const [popup, setPopup] = useState({ visible: false, message: '', type: '' });

  const handleApprove = (name: string) => {
    setPopup({
      visible: true,
      message: `đã thêm ${name} vào trạm xanh`,
      type: 'approve',
    });
    setPendingApprovals(prev => prev.filter(item => item.name !== name));
    setTimeout(() => setPopup({ visible: false, message: '', type: '' }), 2000);
  };

  const handleReject = (name: string) => {
    setPopup({
      visible: true,
      message: `bạn đã từ chối ${name} vào trạm xanh`,
      type: 'reject',
    });
    setPendingApprovals(prev => prev.filter(item => item.name !== name));
    setTimeout(() => setPopup({ visible: false, message: '', type: '' }), 2000);
  };

  const staffList = [
    { id: 1, name: 'Julian Sylva', email: 'julian.s@verdantpulse.com', avatar: 'JS', role: 'Chủ trạm', avatarBg: 'bg-green-300' },
    { id: 2, name: 'Amara Oak', email: 'amara.o@verdantpulse.com', avatar: 'AO', role: 'Nhân viên', avatarBg: 'bg-green-300' },
    { id: 3, name: 'River Reed', email: 'river.r@verdantpulse.com', avatar: 'RR', role: 'Nhân viên', avatarBg: 'bg-gray-300' },
    { id: 4, name: 'Linden Hayes', email: 'linden.h@verdantpulse.com', avatar: 'LH', role: 'Nhân viên', avatarBg: 'bg-green-300' },
  ];

  const filteredStaff = staffList.filter(staff =>
    staff.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedRole === 'TẤT CẢ' || (selectedRole === 'CHỦ TRẠM' && staff.role === 'Chủ trạm') || (selectedRole === 'NHÂN VIÊN' && staff.role === 'Nhân viên'))
  );

  return (
    <div className={`${plusJakarta.className} w-full h-full flex flex-col overflow-hidden bg-[#f4faec] font-sans text-gray-800`}>
      <Header />

      <main className="px-4 pb-6 overflow-y-auto flex-1 scrollbar-hide">
        {/* Heading */}
        <section className="mt-6 mb-6">
          <h1 className="text-2xl font-extrabold text-[#1c3f25] mb-2">Quản lý nhân viên</h1>
          <p className="text-xs text-gray-500">
            Giám sát đội ngũ nhân viên trạm thực vật của bạn và kiểm tra các đơn đăng ký mới.
          </p>
        </section>

        {/* Pending Approvals */}
        <section className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-sm font-bold text-[#1c3f25]">📋 Đang chờ phê duyệt</span>
            {pendingApprovals.length > 0 && (
              <span className="bg-[#267a32] text-white text-[10px] font-bold px-2 py-1 rounded-full">3 NEW</span>
            )}
          </div>

          {pendingApprovals.length === 0 ? (
            <div className="text-center">
              <p className="text-[10px] text-[#1c3f25] font-medium italic">
                Hiện không có đơn đăng ký chờ phê duyệt
              </p>
            </div>
          ) : (
            <div className="space-y-2">
              {pendingApprovals.map(item => (
                <div key={item.id} className="bg-gray-100 rounded-2xl p-3 flex items-center justify-between">
                  <div className="flex items-center gap-3 flex-1">
                    <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-[11px] font-bold text-gray-600">
                      {item.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <p className="text-[11px] font-bold text-gray-800">{item.name}</p>
                      <p className="text-[9px] text-gray-500">{item.time}</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleApprove(item.name)}
                      className="bg-[#267a32] text-white text-[10px] font-bold px-3 py-1.5 rounded-full hover:bg-[#1f5a27] transition"
                    >
                      Chấp nhận
                    </button>
                    <button
                      onClick={() => handleReject(item.name)}
                      className="text-gray-500 text-[10px] font-bold px-3 py-1.5 hover:text-gray-700 transition"
                    >
                      Từ chối
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Station Status */}
        <section className="mb-6">
          <div className="bg-[#eef6e6] rounded-3xl p-4">
            <p className="text-[10px] font-bold text-[#3a7d22] mb-2">TÌNH TRẠNG TRẠM</p>
            <h3 className="text-4xl font-extrabold text-[#1c3f25] mb-3">98% Active</h3>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white rounded-2xl p-3">
                <p className="text-[10px] text-gray-600 font-bold mb-1">Tổng nhân viên</p>
                <p className="text-2xl font-extrabold text-[#1c3f25]">24</p>
              </div>
              <div className="bg-white rounded-2xl p-3">
                <p className="text-[10px] text-gray-600 font-bold mb-1">Đang làm việc</p>
                <p className="text-2xl font-extrabold text-[#1c3f25]">8</p>
              </div>
            </div>
          </div>
        </section>

        {/* Staff List */}
        <section className="mb-6">
          <h2 className="text-sm font-bold text-[#1c3f25] mb-3 flex items-center gap-2">
            <span>📋</span> Danh sách nhân viên
          </h2>

          {/* Search Bar */}
          <div className="mb-4">
            <input
              type="text"
              placeholder="Tìm kiếm nhân viên"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-[#e4f0de] text-gray-800 text-[11px] px-4 py-2.5 rounded-full placeholder-gray-500 focus:outline-none"
            />
          </div>

          {/* Filter Buttons */}
          <div className="flex gap-2 mb-4">
            {['TẤT CẢ', 'CHỦ TRẠM', 'NHÂN VIÊN'].map(role => (
              <button
                key={role}
                onClick={() => setSelectedRole(role)}
                className={`text-[10px] font-bold px-3.5 py-1.5 rounded-full transition-colors ${selectedRole === role
                  ? 'bg-white text-[#1c3f25] shadow-sm'
                  : 'text-gray-500'
                  }`}
              >
                {role}
              </button>
            ))}
          </div>

          {/* Header Row */}
          <div className="flex text-[10px] text-gray-600 font-bold px-2 mb-2">
            <span className="flex-1">NHÂN VIÊN</span>
            <span className="w-20 text-right">VAI TRÒ</span>
          </div>

          {/* Staff Items */}
          <div className="space-y-2">
            {filteredStaff.map(staff => (
              <div key={staff.id} className="bg-white rounded-2xl p-3 flex items-center justify-between shadow-sm">
                <div className="flex items-center gap-2 flex-1">
                  <div className={`w-8 h-8 rounded-full ${staff.avatarBg} flex items-center justify-center text-[10px] font-bold text-gray-700`}>
                    {staff.avatar}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[11px] font-bold text-gray-800 truncate">{staff.name}</p>
                    <p className="text-[9px] text-gray-500 truncate">{staff.email}</p>
                  </div>
                </div>
                <button className={`text-[10px] font-bold px-2 py-1 rounded-full whitespace-nowrap ml-2 ${staff.role === 'Chủ trạm'
                  ? 'bg-[#fcc8b8] text-[#8b5a4a]'
                  : 'bg-gray-200 text-gray-600'
                  }`}>
                  {staff.role}
                </button>
              </div>
            ))}
          </div>

          {/* Load More */}
          <button className="w-full mt-4 text-[#267a32] text-[11px] font-bold py-2">
            Tải thêm ▼
          </button>
        </section>
      </main>

      {/* Popup Modal */}
      {popup.visible && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
          <div className={`${popup.type === 'approve' ? 'bg-green-50' : 'bg-red-50'
            } rounded-2xl p-4 max-w-xs text-center shadow-lg`}>
            <p className={`text-sm font-bold ${popup.type === 'approve' ? 'text-[#267a32]' : 'text-red-600'
              }`}>
              {popup.message}
            </p>
          </div>
        </div>
      )}

      <BottomNav role="partner" />
    </div>
  );
}

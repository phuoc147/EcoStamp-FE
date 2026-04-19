'use client';

import { useState } from 'react';
import Header from '../../../components/PartnerHeader';
import BottomNav from '../../../components/BottomBars';
import { Plus_Jakarta_Sans } from 'next/font/google';
import { Plus, Edit2, Trash2 } from 'lucide-react';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin', 'vietnamese'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

export default function CampaignPage() {
  const [activeTab, setActiveTab] = useState('discount');
  const [discounts, setDiscounts] = useState([
    {
      id: 1,
      icon: '🍵',
      name: 'Giảm 50K',
      desc: 'Giảm 50k cho các hóa đơn nước ấp trên 100k',
      status: 'ĐANG HOẠT ĐỘNG',
      quantity: 240,
      expiry: '31/12/2026',
      points: 50,
    },
    {
      id: 2,
      icon: '🌲',
      name: 'Giảm 30%',
      desc: 'Giảm 30% cho tất cả sản phẩm tại quán',
      status: 'CÓ GIỚI HẠN',
      quantity: 15,
      expiry: 'Diễn ra theo mùa',
      points: 500,
    },
  ]);

  const [editingId, setEditingId] = useState<number | null>(null);
  const [editForm, setEditForm] = useState({
    name: '',
    desc: '',
    status: '',
    quantity: '',
    expiry: '',
    points: '',
  });

  const [events, setEvents] = useState([
    {
      id: 1,
      name: 'Green Hour',
      emoji: '🌿',
      multiplier: 2.5,
      frequency: 'Thứ 6 hàng tuần',
      time: '14:00 - 17:00 PM',
      status: 'ĐANG DIỄN RA',
      bgGradient: 'linear-gradient(135deg, rgba(220, 180, 50, 0.4) 0%, rgba(34, 139, 34, 0.5) 100%)',
    },
    {
      id: 2,
      name: 'Eco Holiday',
      emoji: '🎋',
      multiplier: 3.0,
      desc: 'Phân phối điểm thưởng và quà tặng đặc biệt nhân Ngày Trái Đất toàn cầu',
      status: 'SẮP DIỄN RA',
      bgColor: '#f5d4d4',
    },
  ]);

  const [editingEventId, setEditingEventId] = useState<number | null>(null);
  const [editEventForm, setEditEventForm] = useState({
    name: '',
    emoji: '',
    multiplier: '',
    frequency: '',
    time: '',
    desc: '',
    status: '',
  });

  const [showNewCampaignModal, setShowNewCampaignModal] = useState(false);
  const [newCampaignForm, setNewCampaignForm] = useState({
    name: '',
    description: '',
    type: 'discount',
    emoji: '',
    multiplier: '',
    quantity: '',
    expiryDate: '',
    points: '',
  });

  const handleEdit = (discount: typeof discounts[0]) => {
    setEditingId(discount.id);
    setEditForm({
      name: discount.name,
      desc: discount.desc,
      status: discount.status,
      quantity: discount.quantity.toString(),
      expiry: discount.expiry,
      points: discount.points.toString(),
    });
  };

  const handleSaveEdit = (id: number) => {
    setDiscounts(
      discounts.map(d =>
        d.id === id
          ? {
            ...d,
            name: editForm.name,
            desc: editForm.desc,
            status: editForm.status,
            quantity: parseInt(editForm.quantity),
            expiry: editForm.expiry,
            points: parseInt(editForm.points),
          }
          : d
      )
    );
    setEditingId(null);
  };

  const handleDelete = (id: number) => {
    if (confirm('Bạn có chắc chắn muốn xóa voucher này?')) {
      setDiscounts(discounts.filter(d => d.id !== id));
    }
  };

  const handleCancelEdit = () => {
    setEditingId(null);
  };

  const handleEditEvent = (event: typeof events[0]) => {
    setEditingEventId(event.id);
    const eventData = event as any;
    setEditEventForm({
      name: event.name,
      emoji: event.emoji,
      multiplier: event.multiplier.toString(),
      frequency: eventData.frequency || '',
      time: eventData.time || '',
      desc: eventData.desc || '',
      status: event.status,
    });
  };

  const handleSaveEditEvent = (id: number) => {
    const updated = events.map(e => {
      if (e.id === id) {
        const updatedEvent = {
          ...e,
          name: editEventForm.name,
          emoji: editEventForm.emoji,
          multiplier: parseFloat(editEventForm.multiplier),
          status: editEventForm.status,
        } as any;

        if (id === 1) {
          updatedEvent.frequency = editEventForm.frequency;
          updatedEvent.time = editEventForm.time;
        }

        if (id === 2) {
          updatedEvent.desc = editEventForm.desc;
        }

        return updatedEvent;
      }
      return e;
    }) as any;

    setEvents(updated);
    setEditingEventId(null);
  };

  const handleDeleteEvent = (id: number) => {
    if (confirm('Bạn có chắc chắn muốn xóa sự kiện này?')) {
      setEvents(events.filter(e => e.id !== id));
    }
  };

  const handleCancelEditEvent = () => {
    setEditingEventId(null);
  };

  const handleCreateCampaign = () => {
    if (newCampaignForm.type === 'discount') {
      const newDiscount = {
        id: discounts.length + 1,
        icon: newCampaignForm.emoji || '🎁',
        name: newCampaignForm.name,
        desc: newCampaignForm.description,
        status: 'ĐANG HOẠT ĐỘNG',
        quantity: parseInt(newCampaignForm.quantity) || 0,
        expiry: newCampaignForm.expiryDate,
        points: parseInt(newCampaignForm.points) || 0,
      };
      setDiscounts([...discounts, newDiscount]);
    } else {
      const newEvent = {
        id: events.length + 1,
        name: newCampaignForm.name,
        emoji: newCampaignForm.emoji || '🎉',
        multiplier: parseFloat(newCampaignForm.multiplier) || 1,
        desc: newCampaignForm.description,
        status: 'ĐANG DIỄN RA',
        bgColor: '#f0e6ff',
      };
      setEvents([...events, newEvent as any]);
    }
    setNewCampaignForm({
      name: '',
      description: '',
      type: 'discount',
      emoji: '',
      multiplier: '',
      quantity: '',
      expiryDate: '',
      points: '',
    });
    setShowNewCampaignModal(false);
  };

  return (
    <div className={`${plusJakarta.className} w-full h-full flex flex-col overflow-hidden bg-[#f4faec] font-sans text-gray-800`}>
      <Header />

      <main className="px-5 pb-6 overflow-y-auto flex-1 scrollbar-hide">
        {/* Heading */}
        <section className="mt-6 mb-6">
          <h1 className="text-3xl font-extrabold text-[#1c3f25] mb-1.5">Chiến dịch Xanh</h1>
          <p className="text-[11px] text-gray-600 leading-relaxed">
            Tăng lượng tác và thúc đẩy bền vững thông qua các ưu đãi được chọn lọc và sự kiện theo mùa.
          </p>
        </section>

        {/* Action Buttons */}
        <div className="flex gap-2 mb-6">
          <button onClick={() => setShowNewCampaignModal(true)} className="flex-1 flex items-center justify-center gap-1.5 bg-[#267a32] text-white text-[11px] font-bold py-2.5 rounded-full hover:bg-[#1f5a27] transition">
            <Plus size={13} />
            Tạo mới
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-6 mb-0 border-b border-gray-300 pb-3">
          <button
            onClick={() => setActiveTab('discount')}
            className={`text-[12px] font-bold transition-colors ${activeTab === 'discount'
              ? 'text-[#1c3f25] border-b-2 border-[#1c3f25] -mb-3 pb-3'
              : 'text-gray-500'
              }`}
          >
            📋 Mã giảm giá
          </button>
          <button
            onClick={() => setActiveTab('events')}
            className={`text-[12px] font-bold transition-colors ${activeTab === 'events'
              ? 'text-[#1c3f25] border-b-2 border-[#1c3f25] -mb-3 pb-3'
              : 'text-gray-500'
              }`}
          >
            🎁 Sự kiện
          </button>
        </div>

        {/* Discount Tab */}
        {activeTab === 'discount' && (
          <section className="space-y-3 mt-4">
            {discounts.map(discount => (
              <div key={discount.id}>
                {editingId === discount.id ? (
                  // Edit Form
                  <div className="bg-white rounded-3xl p-4 shadow-sm space-y-3">
                    <h3 className="text-[13px] font-extrabold text-[#1c3f25] mb-3">Chỉnh sửa voucher</h3>

                    <div>
                      <label className="text-[10px] font-bold text-gray-600 block mb-1">Tên voucher</label>
                      <input
                        type="text"
                        value={editForm.name}
                        onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                        className="no-spinner w-full bg-[#e4f0de] text-[#1c3f25] text-xs px-3 py-2 rounded-xl outline-none focus:ring-2 focus:ring-[#267a32]/30"
                      />
                    </div>

                    <div>
                      <label className="text-[10px] font-bold text-gray-600 block mb-1">Mô tả</label>
                      <input
                        type="text"
                        value={editForm.desc}
                        onChange={(e) => setEditForm({ ...editForm, desc: e.target.value })}
                        className="no-spinner w-full bg-[#e4f0de] text-[#1c3f25] text-xs px-3 py-2 rounded-xl outline-none focus:ring-2 focus:ring-[#267a32]/30"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="text-[10px] font-bold text-gray-600 block mb-1">Trạng thái</label>
                        <select
                          value={editForm.status}
                          onChange={(e) => setEditForm({ ...editForm, status: e.target.value })}
                          className="w-full bg-[#e4f0de] text-[#1c3f25] text-xs px-3 py-2 rounded-xl outline-none focus:ring-2 focus:ring-[#267a32]/30"
                        >
                          <option>ĐANG HOẠT ĐỘNG</option>
                          <option>CÓ GIỚI HẠN</option>
                        </select>
                      </div>
                      <div>
                        <label className="text-[10px] font-bold text-gray-600 block mb-1">Số lượng</label>
                        <input
                          type="number"
                          value={editForm.quantity}
                          onChange={(e) => setEditForm({ ...editForm, quantity: e.target.value })}
                          className="no-spinner w-full bg-[#e4f0de] text-[#1c3f25] text-xs px-3 py-2 rounded-xl outline-none focus:ring-2 focus:ring-[#267a32]/30"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="text-[10px] font-bold text-gray-600 block mb-1">Hết hạn</label>
                        <input
                          type="text"
                          value={editForm.expiry}
                          onChange={(e) => setEditForm({ ...editForm, expiry: e.target.value })}
                          className="no-spinner w-full bg-[#e4f0de] text-[#1c3f25] text-xs px-3 py-2 rounded-xl outline-none focus:ring-2 focus:ring-[#267a32]/30"
                        />
                      </div>
                      <div>
                        <label className="text-[10px] font-bold text-gray-600 block mb-1">Điểm</label>
                        <input
                          type="number"
                          value={editForm.points}
                          onChange={(e) => setEditForm({ ...editForm, points: e.target.value })}
                          className="no-spinner w-full bg-[#e4f0de] text-[#1c3f25] text-xs px-3 py-2 rounded-xl outline-none focus:ring-2 focus:ring-[#267a32]/30"
                        />
                      </div>
                    </div>

                    <div className="flex gap-2 pt-2">
                      <button
                        onClick={() => handleSaveEdit(discount.id)}
                        className="flex-1 bg-[#267a32] text-white text-xs font-bold py-2 rounded-full hover:bg-[#1f5a27] transition"
                      >
                        Lưu
                      </button>
                      <button
                        onClick={handleCancelEdit}
                        className="flex-1 bg-gray-300 text-gray-600 text-xs font-bold py-2 rounded-full hover:bg-gray-400 transition"
                      >
                        Hủy
                      </button>
                    </div>
                  </div>
                ) : (
                  // Display Card
                  <div className="bg-white rounded-3xl p-4 shadow-sm">
                    {/* Top row with icon and title */}
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-[#d4ecc8] flex items-center justify-center text-lg shrink-0">
                        {discount.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-[13px] font-extrabold text-[#1c3f25]">{discount.name}</h3>
                        <p className="text-[10px] text-gray-600 leading-snug">{discount.desc}</p>
                      </div>
                      <div className="flex gap-2 ml-2 shrink-0">
                        <button
                          onClick={() => handleEdit(discount)}
                          className="w-5 h-5 flex items-center justify-center text-gray-400 hover:text-[#267a32] transition"
                        >
                          <Edit2 size={13} />
                        </button>
                        <button
                          onClick={() => handleDelete(discount.id)}
                          className="w-5 h-5 flex items-center justify-center text-gray-400 hover:text-red-500 transition"
                        >
                          <Trash2 size={13} />
                        </button>
                      </div>
                    </div>

                    {/* Status and quantity */}
                    <div className="flex gap-6 mb-2.5">
                      <div>
                        <p className="text-[10px] font-bold text-[#8b5a4a] mb-1">
                          {discount.status}
                        </p>
                        <p className="text-[10px] text-gray-600">SỐ LƯỢNG: {discount.quantity}</p>
                      </div>
                    </div>

                    {/* Expiry and points row */}
                    <div className="flex items-center justify-between">
                      <p className="text-[10px] text-gray-600">Hết hạn: {discount.expiry}</p>
                      <p className="text-sm font-extrabold text-[#267a32]">{discount.points} Điểm</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </section>
        )}

        {/* Events Tab */}
        {activeTab === 'events' && (
          <section className="mt-4">
            {/* Section title with link */}
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-[14px] font-extrabold text-[#1c3f25]">Sự kiện đang diễn ra</h2>
              <a href="#" className="text-[11px] text-[#267a32] font-bold hover:underline">Hiển thị lịch</a>
            </div>

            {/* Events List */}
            <div className="space-y-4">
              {events.map(event => (
                <div key={event.id}>
                  {editingEventId === event.id ? (
                    // Edit Form
                    <div className="bg-white rounded-3xl p-4 shadow-sm space-y-3">
                      <h3 className="text-[13px] font-extrabold text-[#1c3f25] mb-3">Chỉnh sửa sự kiện</h3>

                      <div>
                        <label className="text-[10px] font-bold text-gray-600 block mb-1">Tên sự kiện</label>
                        <input
                          type="text"
                          value={editEventForm.name}
                          onChange={(e) => setEditEventForm({ ...editEventForm, name: e.target.value })}
                          className="no-spinner w-full bg-[#e4f0de] text-[#1c3f25] text-xs px-3 py-2 rounded-xl outline-none focus:ring-2 focus:ring-[#267a32]/30"
                        />
                      </div>

                      <div>
                        <label className="text-[10px] font-bold text-gray-600 block mb-1">Emoji</label>
                        <input
                          type="text"
                          value={editEventForm.emoji}
                          onChange={(e) => setEditEventForm({ ...editEventForm, emoji: e.target.value })}
                          className="no-spinner w-full bg-[#e4f0de] text-[#1c3f25] text-xs px-3 py-2 rounded-xl outline-none focus:ring-2 focus:ring-[#267a32]/30"
                        />
                      </div>

                      <div>
                        <label className="text-[10px] font-bold text-gray-600 block mb-1">Hệ số nhân</label>
                        <input
                          type="number"
                          step="0.1"
                          value={editEventForm.multiplier}
                          onChange={(e) => setEditEventForm({ ...editEventForm, multiplier: e.target.value })}
                          className="no-spinner w-full bg-[#e4f0de] text-[#1c3f25] text-xs px-3 py-2 rounded-xl outline-none focus:ring-2 focus:ring-[#267a32]/30"
                        />
                      </div>

                      {event.id === 1 && (
                        <>
                          <div>
                            <label className="text-[10px] font-bold text-gray-600 block mb-1">Tần suất</label>
                            <input
                              type="text"
                              value={editEventForm.frequency}
                              onChange={(e) => setEditEventForm({ ...editEventForm, frequency: e.target.value })}
                              className="no-spinner w-full bg-[#e4f0de] text-[#1c3f25] text-xs px-3 py-2 rounded-xl outline-none focus:ring-2 focus:ring-[#267a32]/30"
                            />
                          </div>
                          <div>
                            <label className="text-[10px] font-bold text-gray-600 block mb-1">Thời gian</label>
                            <input
                              type="text"
                              value={editEventForm.time}
                              onChange={(e) => setEditEventForm({ ...editEventForm, time: e.target.value })}
                              className="no-spinner w-full bg-[#e4f0de] text-[#1c3f25] text-xs px-3 py-2 rounded-xl outline-none focus:ring-2 focus:ring-[#267a32]/30"
                            />
                          </div>
                        </>
                      )}

                      {event.id === 2 && (
                        <div>
                          <label className="text-[10px] font-bold text-gray-600 block mb-1">Mô tả</label>
                          <textarea
                            value={editEventForm.desc}
                            onChange={(e) => setEditEventForm({ ...editEventForm, desc: e.target.value })}
                            className="w-full bg-[#e4f0de] text-[#1c3f25] text-xs px-3 py-2 rounded-xl outline-none focus:ring-2 focus:ring-[#267a32]/30"
                            rows={3}
                          />
                        </div>
                      )}

                      <div>
                        <label className="text-[10px] font-bold text-gray-600 block mb-1">Trạng thái</label>
                        <select
                          value={editEventForm.status}
                          onChange={(e) => setEditEventForm({ ...editEventForm, status: e.target.value })}
                          className="w-full bg-[#e4f0de] text-[#1c3f25] text-xs px-3 py-2 rounded-xl outline-none focus:ring-2 focus:ring-[#267a32]/30"
                        >
                          <option>ĐANG DIỄN RA</option>
                          <option>SẮP DIỄN RA</option>
                          <option>ĐÃ KẾT THÚC</option>
                        </select>
                      </div>

                      <div className="flex gap-2 pt-2">
                        <button
                          onClick={() => handleSaveEditEvent(event.id)}
                          className="flex-1 bg-[#267a32] text-white text-xs font-bold py-2 rounded-full hover:bg-[#1f5a27] transition"
                        >
                          Lưu
                        </button>
                        <button
                          onClick={handleCancelEditEvent}
                          className="flex-1 bg-gray-300 text-gray-600 text-xs font-bold py-2 rounded-full hover:bg-gray-400 transition"
                        >
                          Hủy
                        </button>
                      </div>
                    </div>
                  ) : event.id === 1 ? (
                    // Green Hour Display
                    <div className="rounded-3xl overflow-hidden shadow-sm">
                      <div
                        className="h-40 relative bg-cover bg-center flex flex-col justify-between p-4"
                        style={{
                          backgroundImage: event.bgGradient,
                          backgroundSize: 'cover'
                        }}
                      >
                        <div className="flex items-start justify-between">
                          <span className="bg-[#267a32] text-white text-[10px] font-bold px-2.5 py-1 rounded-full">
                            {event.status}
                          </span>
                          <div className="flex gap-2">
                            <button
                              onClick={() => handleEditEvent(event)}
                              className="w-5 h-5 flex items-center justify-center text-white bg-white/20 rounded-full hover:bg-white/40 transition"
                            >
                              <Edit2 size={11} />
                            </button>
                            <button
                              onClick={() => handleDeleteEvent(event.id)}
                              className="w-5 h-5 flex items-center justify-center text-white bg-white/20 rounded-full hover:bg-red-500/40 transition"
                            >
                              <Trash2 size={11} />
                            </button>
                          </div>
                        </div>
                        <div>
                          <h3 className="text-white font-extrabold text-2xl">{event.emoji} {event.name}</h3>
                        </div>
                      </div>

                      <div className="bg-white p-4">
                        <div className="flex items-end justify-between mb-3">
                          <div>
                            <p className="text-[10px] text-gray-600 font-bold mb-0.5">HỆ SỐ NHÂN</p>
                            <p className="text-sm font-extrabold text-[#1c3f25]">{event.multiplier}x</p>
                          </div>
                          <div className="text-right">
                            <p className="text-[10px] text-gray-600 font-bold">{event.frequency}</p>
                            <p className="text-[11px] text-gray-800 font-semibold">{event.time}</p>
                          </div>
                        </div>
                        <button className="w-full bg-[#267a32] text-white text-[11px] font-bold py-2 rounded-full hover:bg-[#1f5a27] transition">
                          Chính sửa quy tắc
                        </button>
                      </div>
                    </div>
                  ) : (
                    // Eco Holiday Display
                    <div className="rounded-3xl p-4 shadow-sm relative" style={{ backgroundColor: event.bgColor }}>
                      <div className="flex items-start justify-between mb-2">
                        <span className="text-2xl">{event.emoji}</span>
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleEditEvent(event)}
                            className="w-5 h-5 flex items-center justify-center text-gray-600 hover:text-[#267a32] transition"
                          >
                            <Edit2 size={13} />
                          </button>
                          <button
                            onClick={() => handleDeleteEvent(event.id)}
                            className="w-5 h-5 flex items-center justify-center text-gray-600 hover:text-red-500 transition"
                          >
                            <Trash2 size={13} />
                          </button>
                        </div>
                      </div>

                      <div className="mb-3">
                        <h3 className="text-lg font-extrabold text-[#1c3f25] mb-1">{event.name}</h3>
                        <p className="text-[10px] text-gray-700 leading-snug">
                          {event.desc}
                        </p>
                      </div>

                      <div className="flex items-center justify-between">
                        <p className="text-[10px] font-extrabold text-[#1c3f25]">{event.multiplier}x Multiplier</p>
                        <span className="text-[15px]">⚙️</span>
                      </div>

                      <span className="absolute top-4 right-4 bg-gray-300 text-gray-700 text-[9px] font-bold px-2.5 py-1 rounded-full">
                        {event.status}
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}
      </main>

      {/* New Campaign Modal */}
      {showNewCampaignModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-2xl w-80 max-h-[85vh] flex flex-col shadow-xl mx-3">
            {/* Header - Sticky */}
            <div className="sticky top-0 bg-white p-3 border-b border-gray-200 rounded-t-2xl">
              <h2 className="text-lg font-extrabold text-[#1c3f25] text-center">Tạo Mới</h2>
            </div>

            {/* Content - Scrollable */}
            <div className="flex-1 p-4 space-y-2 overflow-y-auto">
              {/* Campaign Type Selector */}
              <div>
                <label className="text-[10px] font-bold text-gray-600 block mb-2">Loại Chiến Dịch</label>
                <div className="flex gap-2">
                  <button
                    onClick={() => setNewCampaignForm({ ...newCampaignForm, type: 'discount' })}
                    className={`flex-1 py-2 px-3 rounded-lg text-[11px] font-bold transition ${newCampaignForm.type === 'discount'
                      ? 'bg-[#267a32] text-white'
                      : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                      }`}
                  >
                    📋 Voucher
                  </button>
                  <button
                    onClick={() => setNewCampaignForm({ ...newCampaignForm, type: 'event' })}
                    className={`flex-1 py-2 px-3 rounded-lg text-[11px] font-bold transition ${newCampaignForm.type === 'event'
                      ? 'bg-[#267a32] text-white'
                      : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                      }`}
                  >
                    🎁 Sự Kiện
                  </button>
                </div>
              </div>

              {/* Name */}
              <div>
                <label className="text-[10px] font-bold text-gray-600 block mb-1">Tên</label>
                <input
                  type="text"
                  value={newCampaignForm.name}
                  onChange={(e) => setNewCampaignForm({ ...newCampaignForm, name: e.target.value })}
                  placeholder="Nhập tên chiến dịch"
                  className="w-full bg-[#e4f0de] text-[#1c3f25] text-sm px-3 py-2 rounded-lg outline-none focus:ring-2 focus:ring-[#267a32]/30"
                />
              </div>

              {/* Emoji */}
              <div>
                <label className="text-[10px] font-bold text-gray-600 block mb-1">Emoji</label>
                <input
                  type="text"
                  value={newCampaignForm.emoji}
                  onChange={(e) => setNewCampaignForm({ ...newCampaignForm, emoji: e.target.value })}
                  placeholder="🍵"
                  maxLength={2}
                  className="w-full bg-[#e4f0de] text-[#1c3f25] text-sm px-3 py-2 rounded-lg outline-none focus:ring-2 focus:ring-[#267a32]/30"
                />
              </div>

              {/* Description */}
              <div>
                <label className="text-[10px] font-bold text-gray-600 block mb-1">Mô Tả</label>
                <textarea
                  value={newCampaignForm.description}
                  onChange={(e) => setNewCampaignForm({ ...newCampaignForm, description: e.target.value })}
                  placeholder="Nhập mô tả"
                  rows={2}
                  className="w-full bg-[#e4f0de] text-[#1c3f25] text-sm px-3 py-2 rounded-lg outline-none focus:ring-2 focus:ring-[#267a32]/30 resize-none"
                />
              </div>

              {/* Voucher-Specific Fields */}
              {newCampaignForm.type === 'discount' && (
                <>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="text-[10px] font-bold text-gray-600 block mb-1">Số Lượng</label>
                      <input
                        type="number"
                        value={newCampaignForm.quantity}
                        onChange={(e) => setNewCampaignForm({ ...newCampaignForm, quantity: e.target.value })}
                        placeholder="0"
                        className="no-spinner w-full bg-[#e4f0de] text-[#1c3f25] text-sm px-3 py-2 rounded-lg outline-none focus:ring-2 focus:ring-[#267a32]/30"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-bold text-gray-600 block mb-1">Điểm</label>
                      <input
                        type="number"
                        value={newCampaignForm.points}
                        onChange={(e) => setNewCampaignForm({ ...newCampaignForm, points: e.target.value })}
                        placeholder="0"
                        className="no-spinner w-full bg-[#e4f0de] text-[#1c3f25] text-sm px-3 py-2 rounded-lg outline-none focus:ring-2 focus:ring-[#267a32]/30"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-[10px] font-bold text-gray-600 block mb-1">Hết Hạn</label>
                    <input
                      type="text"
                      value={newCampaignForm.expiryDate}
                      onChange={(e) => setNewCampaignForm({ ...newCampaignForm, expiryDate: e.target.value })}
                      placeholder="dd/mm/yyyy"
                      className="w-full bg-[#e4f0de] text-[#1c3f25] text-sm px-3 py-2 rounded-lg outline-none focus:ring-2 focus:ring-[#267a32]/30"
                    />
                  </div>
                </>
              )}

              {/* Event-Specific Fields */}
              {newCampaignForm.type === 'event' && (
                <div>
                  <label className="text-[10px] font-bold text-gray-600 block mb-1">Hệ Số Nhân</label>
                  <input
                    type="number"
                    step="0.1"
                    value={newCampaignForm.multiplier}
                    onChange={(e) => setNewCampaignForm({ ...newCampaignForm, multiplier: e.target.value })}
                    placeholder="2.5"
                    className="no-spinner w-full bg-[#e4f0de] text-[#1c3f25] text-sm px-3 py-2 rounded-lg outline-none focus:ring-2 focus:ring-[#267a32]/30"
                  />
                </div>
              )}
            </div>

            {/* Footer - Sticky */}
            <div className="sticky bottom-0 bg-white p-4 border-t border-gray-200 rounded-b-2xl flex gap-2">
              <button
                onClick={handleCreateCampaign}
                className="flex-1 bg-[#267a32] text-white text-sm font-bold py-2.5 rounded-full hover:bg-[#1f5a27] transition"
              >
                Tạo
              </button>
              <button
                onClick={() => {
                  setShowNewCampaignModal(false);
                  setNewCampaignForm({
                    name: '',
                    description: '',
                    type: 'discount',
                    emoji: '',
                    multiplier: '',
                    quantity: '',
                    expiryDate: '',
                    points: '',
                  });
                }}
                className="flex-1 bg-gray-300 text-gray-600 text-sm font-bold py-2.5 rounded-full hover:bg-gray-400 transition"
              >
                Hủy
              </button>
            </div>
          </div>
        </div>
      )}

      <BottomNav role="partner" />
    </div>
  );
}

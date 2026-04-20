'use client';

import { Recycle, Leaf, Trash2, Zap, Edit2, Check, X, Plus } from 'lucide-react';
import { useState } from 'react';

interface WasteType {
  id: string;
  name: string;
  desc: string;
  limit: string | null;
  active: boolean;
  icon: React.ComponentType<any>;
  color: string;
  bg: string;
}

const ALL_WASTE_TYPES: WasteType[] = [
  { id: 'organic', name: 'Chất thải hữu cơ', desc: 'Rau củ, quả, thức ăn', limit: '200', active: true, icon: Leaf, color: 'text-green-600', bg: 'bg-green-100' },
  { id: 'plastic', name: 'Nhựa tái chế', desc: 'Chai PET, HDPE', limit: '150', active: true, icon: Recycle, color: 'text-blue-600', bg: 'bg-blue-100' },
  { id: 'paper', name: 'Giấy & Carton', desc: 'Báo cũ, thùng giấy', limit: '500', active: true, icon: Trash2, color: 'text-orange-600', bg: 'bg-orange-100' },
  { id: 'ewaste', name: 'Rác điện tử', desc: 'Pin, linh kiện cũ', limit: null, active: false, icon: Zap, color: 'text-gray-400', bg: 'bg-gray-100' },
  { id: 'metal', name: 'Kim loại', desc: 'Nhôm, sắt, tây', limit: null, active: false, icon: Zap, color: 'text-gray-400', bg: 'bg-gray-100' },
  { id: 'glass', name: 'Thủy tinh', desc: 'Chai, lọ thủy tinh', limit: null, active: false, icon: Trash2, color: 'text-gray-400', bg: 'bg-gray-100' },
];

const INITIAL_WASTE_TYPES: WasteType[] = [
  { id: 'organic', name: 'Chất thải hữu cơ', desc: 'Rau củ, quả, thức ăn', limit: '200', active: true, icon: Leaf, color: 'text-green-600', bg: 'bg-green-100' },
  { id: 'plastic', name: 'Nhựa tái chế', desc: 'Chai PET, HDPE', limit: '150', active: true, icon: Recycle, color: 'text-blue-600', bg: 'bg-blue-100' },
  { id: 'paper', name: 'Giấy & Carton', desc: 'Báo cũ, thùng giấy', limit: '500', active: true, icon: Trash2, color: 'text-orange-600', bg: 'bg-orange-100' },
  { id: 'ewaste', name: 'Rác điện tử', desc: 'Pin, linh kiện cũ', limit: null, active: false, icon: Zap, color: 'text-gray-400', bg: 'bg-gray-100' },
];

export default function EditWasteTypes() {
  const [wasteTypes, setWasteTypes] = useState(INITIAL_WASTE_TYPES);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editingValue, setEditingValue] = useState<string>('');
  const [showAddModal, setShowAddModal] = useState(false);
  const [newWasteName, setNewWasteName] = useState('');
  const [newWasteKg, setNewWasteKg] = useState('');

  const handleEditClick = (id: string, currentLimit: string | null) => {
    setEditingId(id);
    setEditingValue(currentLimit || '');
  };

  const handleSave = (id: string) => {
    setWasteTypes(wasteTypes.map(type =>
      type.id === id ? { ...type, limit: editingValue } : type
    ));
    setEditingId(null);
    setEditingValue('');
  };

  const handleCancel = () => {
    setEditingId(null);
    setEditingValue('');
  };

  const handleAddWasteType = () => {
    if (newWasteName.trim() && newWasteKg.trim()) {
      const newType: WasteType = {
        id: Date.now().toString(),
        name: newWasteName,
        desc: 'Loại rác thải tùy chỉnh',
        limit: newWasteKg,
        active: true,
        icon: Trash2,
        color: 'text-gray-600',
        bg: 'bg-gray-200',
      };
      setWasteTypes([...wasteTypes, newType]);
      setNewWasteName('');
      setNewWasteKg('');
      setShowAddModal(false);
    }
  };

  const handleDeleteWasteType = (id: string) => {
    setWasteTypes(wasteTypes.filter(type => type.id !== id));
  };

  const handleCloseModal = () => {
    setShowAddModal(false);
    setNewWasteName('');
    setNewWasteKg('');
  };

  return (
    <div className="bg-[#eef6e6] rounded-3xl p-5 mb-5 shadow-sm">
      <div className="flex items-center gap-2 mb-2">
        <Recycle size={16} className="text-[#3a7d22]" />
        <h3 className="font-bold text-[#1c3f25] text-sm">Loại chất thải chấp nhận</h3>
      </div>
      <p className="text-[10px] text-gray-500 mb-4 leading-relaxed pr-6">
        Chọn các loại rác thải trạm của bạn có khả năng xử lý và đặt hạn mức hàng ngày.
      </p>

      <div className="space-y-3 mb-4">
        {wasteTypes.map((type) => (
          <div key={type.id} className={`p-4 rounded-2xl transition-all ${type.active ? 'bg-white shadow-sm' : 'bg-white/40'}`}>
            <div className="flex items-center gap-3 mb-2.5">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${type.bg}`}>
                <type.icon size={16} className={type.color} />
              </div>
              <div className="flex-1">
                <h4 className={`text-xs font-bold leading-tight ${type.active ? 'text-[#1c3f25]' : 'text-gray-400'}`}>{type.name}</h4>
                <p className="text-[9px] text-gray-400">{type.desc}</p>
              </div>
              <button
                onClick={() => handleDeleteWasteType(type.id)}
                className="bg-red-100 w-6 h-6 rounded-md flex items-center justify-center text-red-600 hover:bg-red-200 transition shrink-0"
              >
                <X size={14} />
              </button>
            </div>

            {type.active && (
              <div className="bg-[#f8fbf5] rounded-xl px-3 py-2 border border-gray-100 mt-1">
                {editingId === type.id ? (
                  <div className="flex items-center gap-1">
                    <input
                      type="number"
                      value={editingValue}
                      onChange={(e) => setEditingValue(e.target.value)}
                      className="no-spinner flex-1 bg-white text-[#1c3f25] text-xs font-semibold rounded-lg px-2 py-1 outline-none border border-[#267a32] focus:ring-2 focus:ring-[#267a32]/30"
                      autoFocus
                    />
                    <button
                      onClick={() => handleSave(type.id)}
                      className="bg-[#1b5e20] w-5 h-5 rounded-md flex items-center justify-center text-white hover:bg-[#144718] transition shrink-0"
                    >
                      <Check size={10} />
                    </button>
                    <button
                      onClick={handleCancel}
                      className="bg-gray-300 w-5 h-5 rounded-md flex items-center justify-center text-gray-600 hover:bg-gray-400 transition shrink-0"
                    >
                      <X size={10} />
                    </button>
                  </div>
                ) : (
                  <div className="flex items-center justify-between">
                    <div className="text-[10px] font-medium text-gray-500">
                      Hạn mức: <span className="font-bold text-[#1c3f25]">{type.limit}</span> kg/ngày
                    </div>
                    <button
                      onClick={() => handleEditClick(type.id, type.limit)}
                      className="bg-[#1b5e20] w-5 h-5 rounded-md flex items-center justify-center cursor-pointer hover:bg-[#144718] transition"
                    >
                      <Edit2 size={10} className="text-white" />
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Add Waste Type Button */}
      <button
        onClick={() => setShowAddModal(true)}
        className="w-full bg-[#1b5e20] text-white font-bold py-2.5 rounded-xl text-xs transition-colors hover:bg-[#144718] flex items-center justify-center gap-2"
      >
        <Plus size={14} />
        Thêm loại rác thải
      </button>

      {/* Add Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
          <div className="w-4/5 max-w-xs bg-white rounded-3xl p-5 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-[#1c3f25] text-sm">Thêm loại rác thải</h3>
              <button
                onClick={handleCloseModal}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={20} />
              </button>
            </div>

            <div className="space-y-3">
              <div>
                <label className="block text-[9px] font-bold text-gray-500 mb-1.5 uppercase tracking-wider">Tên loại rác thải</label>
                <input
                  type="text"
                  value={newWasteName}
                  onChange={(e) => setNewWasteName(e.target.value)}
                  placeholder="VD: Rác nhôm, Rác gỗ..."
                  className="w-full bg-[#f4faec] text-[#1c3f25] text-xs font-semibold rounded-xl py-3 px-4 outline-none focus:ring-2 focus:ring-[#267a32]/30"
                />
              </div>

              <div>
                <label className="block text-[9px] font-bold text-gray-500 mb-1.5 uppercase tracking-wider">Hạn mức hàng ngày (kg)</label>
                <input
                  type="number"
                  value={newWasteKg}
                  onChange={(e) => setNewWasteKg(e.target.value)}
                  placeholder="VD: 100, 200..."
                  className="w-full bg-[#f4faec] text-[#1c3f25] text-xs font-semibold rounded-xl py-3 px-4 outline-none focus:ring-2 focus:ring-[#267a32]/30"
                />
              </div>

              <div className="flex gap-2 pt-2">
                <button
                  onClick={handleCloseModal}
                  className="flex-1 bg-[#e3ecd9] text-[#1c3f25] font-bold py-2.5 rounded-xl text-xs transition-colors hover:bg-[#d5e2c7]"
                >
                  Hủy bỏ
                </button>
                <button
                  onClick={handleAddWasteType}
                  disabled={!newWasteName.trim() || !newWasteKg.trim()}
                  className="flex-1 bg-[#1b5e20] text-white font-bold py-2.5 rounded-xl text-xs transition-colors hover:bg-[#144718] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Thêm
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
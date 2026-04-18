import { Recycle, Leaf, Trash2, Zap, Edit2 } from 'lucide-react';

const WASTE_TYPES = [
  { id: 'organic', name: 'Chất thải hữu cơ', desc: 'Rau củ, quả, thức ăn', limit: '200', active: true, icon: Leaf, color: 'text-green-600', bg: 'bg-green-100' },
  { id: 'plastic', name: 'Nhựa tái chế', desc: 'Chai PET, HDPE', limit: '150', active: true, icon: Recycle, color: 'text-blue-600', bg: 'bg-blue-100' },
  { id: 'paper', name: 'Giấy & Carton', desc: 'Báo cũ, thùng giấy', limit: '500', active: true, icon: Trash2, color: 'text-orange-600', bg: 'bg-orange-100' },
  { id: 'ewaste', name: 'Rác điện tử', desc: 'Pin, linh kiện cũ', limit: null, active: false, icon: Zap, color: 'text-gray-400', bg: 'bg-gray-100' },
];

export default function EditWasteTypes() {
  return (
    <div className="bg-[#eef6e6] rounded-3xl p-5 mb-5 shadow-sm">
      <div className="flex items-center gap-2 mb-2">
        <Recycle size={16} className="text-[#3a7d22]" />
        <h3 className="font-bold text-[#1c3f25] text-sm">Loại chất thải chấp nhận</h3>
      </div>
      <p className="text-[10px] text-gray-500 mb-4 leading-relaxed pr-6">
        Chọn các loại rác thải trạm của bạn có khả năng xử lý và đặt hạn mức hàng ngày.
      </p>

      <div className="space-y-3">
        {WASTE_TYPES.map((type) => (
          <div key={type.id} className={`p-4 rounded-2xl transition-all ${type.active ? 'bg-white shadow-sm' : 'bg-white/40'}`}>
            <div className="flex items-center gap-3 mb-2.5">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${type.bg}`}>
                <type.icon size={16} className={type.color} />
              </div>
              <div>
                <h4 className={`text-xs font-bold leading-tight ${type.active ? 'text-[#1c3f25]' : 'text-gray-400'}`}>{type.name}</h4>
                <p className="text-[9px] text-gray-400">{type.desc}</p>
              </div>
            </div>
            
            {type.active && (
              <div className="flex items-center justify-between bg-[#f8fbf5] rounded-xl px-3 py-2 border border-gray-100 mt-1">
                <div className="text-[10px] font-medium text-gray-500">
                  Hạn mức: <span className="font-bold text-[#1c3f25]">{type.limit}</span> kg/ngày
                </div>
                <div className="bg-[#1b5e20] w-5 h-5 rounded-md flex items-center justify-center cursor-pointer">
                  <Edit2 size={10} className="text-white" />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
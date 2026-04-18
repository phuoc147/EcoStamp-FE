import { Info } from 'lucide-react';

interface EditBasicInfoProps {
  name: string; onNameChange: (val: string) => void;
  capKg: string; onCapKgChange: (val: string) => void;
  capL: string; onCapLChange: (val: string) => void;
}

export default function EditBasicInfo({ name, onNameChange, capKg, onCapKgChange, capL, onCapLChange }: EditBasicInfoProps) {
  return (
    <div className="bg-[#eef6e6] rounded-3xl p-5 mb-5 shadow-sm">
      <div className="flex items-center gap-2 mb-5">
        <Info size={16} className="text-[#3a7d22]" />
        <h3 className="font-bold text-[#1c3f25] text-sm">Thông tin cơ bản & Công suất</h3>
      </div>

      <div className="space-y-4">
        {/* Tên trạm */}
        <div>
          <label className="block text-[9px] font-bold text-gray-500 mb-1.5 uppercase tracking-wider">Tên trạm</label>
          <input 
            type="text" value={name} onChange={(e) => onNameChange(e.target.value)}
            className="w-full bg-[#e3ecd9] text-[#1c3f25] text-xs font-semibold rounded-xl py-3 px-4 outline-none focus:ring-2 focus:ring-[#267a32]/30"
          />
        </div>

        {/* Mã trạm (Disabled) */}
        <div>
          <label className="block text-[9px] font-bold text-gray-500 mb-1.5 uppercase tracking-wider">Mã trạm</label>
          <input 
            type="text" value="QK-2023-013" disabled
            className="w-full bg-[#e3ecd9]/50 text-gray-400 text-xs font-semibold rounded-xl py-3 px-4 outline-none cursor-not-allowed"
          />
        </div>

        {/* Công suất KG */}
        <div>
          <label className="block text-[9px] font-bold text-gray-500 mb-1.5 uppercase tracking-wider">Công suất tối đa (KG)</label>
          <div className="relative">
            <input 
              type="number" value={capKg} onChange={(e) => onCapKgChange(e.target.value)}
              className="w-full bg-[#e3ecd9] text-[#1c3f25] text-xs font-semibold rounded-xl py-3 px-4 outline-none focus:ring-2 focus:ring-[#267a32]/30"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] font-bold text-gray-400">kg</span>
          </div>
        </div>

        {/* Công suất Lít */}
        <div>
          <label className="block text-[9px] font-bold text-gray-500 mb-1.5 uppercase tracking-wider">Công suất tối đa (LÍT)</label>
          <div className="relative">
            <input 
              type="number" value={capL} onChange={(e) => onCapLChange(e.target.value)}
              className="w-full bg-[#e3ecd9] text-[#1c3f25] text-xs font-semibold rounded-xl py-3 px-4 outline-none focus:ring-2 focus:ring-[#267a32]/30"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] font-bold text-gray-400">lít</span>
          </div>
        </div>
      </div>
    </div>
  );
}
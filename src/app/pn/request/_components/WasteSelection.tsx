import { GlassWater, FileText, Wrench } from 'lucide-react';

interface WasteSelectionProps {
  selectedType: string;
  onChangeType: (type: string) => void;
  weight: string;
  onChangeWeight: (val: string) => void;
}

export default function WasteSelection({ selectedType, onChangeType, weight, onChangeWeight }: WasteSelectionProps) {
  return (
    <div className="mb-6">
      <div className="flex items-center gap-2 mb-4">
        <span className="bg-[#b4f07a] text-[#1c3f25] text-[10px] font-black w-6 h-6 rounded-full flex items-center justify-center">
          01
        </span>
        <h3 className="font-bold text-[#1c3f25] text-sm">Phân loại rác thải</h3>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-5">
        <WasteTypeCard 
          icon={<GlassWater size={20} />} 
          label="Nhựa" 
          selected={selectedType === 'Nhựa'} 
          onClick={() => onChangeType('Nhựa')} 
        />
        <WasteTypeCard 
          icon={<FileText size={20} />} 
          label="Giấy" 
          selected={selectedType === 'Giấy'} 
          onClick={() => onChangeType('Giấy')} 
        />
        <WasteTypeCard 
          icon={<Wrench size={20} />} 
          label="Kim loại" 
          selected={selectedType === 'Kim loại'} 
          onClick={() => onChangeType('Kim loại')} 
        />
      </div>

      <div>
        <label className="block text-[10px] font-semibold text-gray-500 mb-2">Khối lượng ước tính (kg)</label>
        <div className="relative">
          <input 
            type="number" 
            value={weight}
            onChange={(e) => onChangeWeight(e.target.value)}
            placeholder="Ví dụ: 15"
            className="w-full bg-[#e3ecd9] text-[#1c3f25] text-xs font-semibold rounded-xl py-3.5 px-4 outline-none focus:ring-2 focus:ring-[#267a32]/30 transition-all placeholder:text-gray-400 placeholder:font-medium"
          />
          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-semibold text-gray-500">
            kg
          </span>
        </div>
      </div>
    </div>
  );
}

// Sub-component nội bộ
function WasteTypeCard({ icon, label, selected, onClick }: { icon: React.ReactNode, label: string, selected: boolean, onClick: () => void }) {
  return (
    <div 
      onClick={onClick}
      className={`cursor-pointer rounded-2xl flex flex-col items-center justify-center py-5 transition-all ${
        selected 
          ? 'bg-white border-2 border-[#267a32] shadow-sm text-[#267a32]' 
          : 'bg-[#e3ecd9] border-2 border-transparent text-gray-500 hover:bg-[#dbe6cf]'
      }`}
    >
      <div className="mb-2">{icon}</div>
      <span className="text-[11px] font-bold">{label}</span>
    </div>
  );
}
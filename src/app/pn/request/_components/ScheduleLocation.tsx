import { MapPin, ChevronDown } from 'lucide-react';

interface ScheduleLocationProps {
  date: string;
  onChangeDate: (val: string) => void;
  timeSlot: string;
  onChangeTimeSlot: (val: string) => void;
  address: string;
}

export default function ScheduleLocation({ date, onChangeDate, timeSlot, onChangeTimeSlot, address }: ScheduleLocationProps) {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-2 mb-4">
        <span className="bg-[#b4f07a] text-[#1c3f25] text-[10px] font-black w-6 h-6 rounded-full flex items-center justify-center">
          02
        </span>
        <h3 className="font-bold text-[#1c3f25] text-sm">Địa điểm & Thời gian</h3>
      </div>

      <div className="space-y-4">
        {/* Ngày thu gom */}
        <div>
          <label className="block text-[10px] font-semibold text-gray-500 mb-2">Ngày thu gom</label>
          <input 
            type="date" 
            value={date}
            onChange={(e) => onChangeDate(e.target.value)}
            className="w-full bg-[#e3ecd9] text-[#1c3f25] text-xs font-semibold rounded-xl py-3.5 px-4 outline-none focus:ring-2 focus:ring-[#267a32]/30 transition-all uppercase"
          />
        </div>

        {/* Khung giờ ưu tiên */}
        <div>
          <label className="block text-[10px] font-semibold text-gray-500 mb-2">Khung giờ ưu tiên</label>
          <div className="relative">
            <select 
              value={timeSlot}
              onChange={(e) => onChangeTimeSlot(e.target.value)}
              className="w-full bg-[#e3ecd9] text-[#1c3f25] text-xs font-semibold rounded-xl py-3.5 px-4 outline-none focus:ring-2 focus:ring-[#267a32]/30 transition-all appearance-none cursor-pointer"
            >
              <option>Sáng (08:00 - 11:30)</option>
              <option>Chiều (13:30 - 17:00)</option>
              <option>Tối (18:00 - 20:00)</option>
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" size={16} />
          </div>
        </div>

        {/* Địa chỉ */}
        <div>
          <label className="block text-[10px] font-semibold text-gray-500 mb-2">Địa chỉ lấy hàng</label>
          <div className="w-full bg-[#e3ecd9] rounded-xl py-3 px-4 flex gap-3 items-start">
            <MapPin className="text-[#267a32] shrink-0 mt-0.5" size={16} />
            <p className="text-[11px] font-semibold text-[#1c3f25] leading-relaxed">
              {address}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
import { motion } from 'framer-motion';

interface EditOperatingHoursProps {
  openTime: string; onOpenTimeChange: (val: string) => void;
  closeTime: string; onCloseTimeChange: (val: string) => void;
  weekend: boolean; onWeekendChange: (val: boolean) => void;
}

export default function EditOperatingHours({ openTime, onOpenTimeChange, closeTime, onCloseTimeChange, weekend, onWeekendChange }: EditOperatingHoursProps) {
  return (
    <div className="bg-[#eef6e6] rounded-3xl p-5 mb-5 shadow-sm">
      <div className="flex items-center gap-2 mb-5">
        <h3 className="font-bold text-[#1c3f25] text-sm">Giờ hoạt động</h3>
      </div>

      <div className="space-y-4 mb-5">
        <div>
          <label className="block text-[9px] font-bold text-gray-500 mb-1.5 uppercase tracking-wider">Giờ mở cửa</label>
          <div className="relative">
            <input
              type="time" value={openTime} onChange={(e) => onOpenTimeChange(e.target.value)}
              className="w-full bg-[#e3ecd9] text-[#1c3f25] text-xs font-semibold rounded-xl py-3 px-4 outline-none focus:ring-2 focus:ring-[#267a32]/30 uppercase"
            />
          </div>
        </div>

        <div>
          <label className="block text-[9px] font-bold text-gray-500 mb-1.5 uppercase tracking-wider">Giờ đóng cửa</label>
          <div className="relative">
            <input
              type="time" value={closeTime} onChange={(e) => onCloseTimeChange(e.target.value)}
              className="w-full bg-[#e3ecd9] text-[#1c3f25] text-xs font-semibold rounded-xl py-3 px-4 outline-none focus:ring-2 focus:ring-[#267a32]/30 uppercase"
            />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-[#dce6d4]">
        <div className="w-2/3">
          <h4 className="text-xs font-bold text-[#1c3f25] mb-1">Làm việc cuối tuần?</h4>
          <p className="text-[9px] text-gray-400 leading-relaxed pr-2">Bật tính năng này nếu cơ sở tiếp tục hoạt động trong ngày thứ 7, Chủ nhật.</p>
        </div>
        <div
          onClick={() => onWeekendChange(!weekend)}
          className={`w-10 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${weekend ? 'bg-[#1b5e20]' : 'bg-gray-300'}`}
        >
          <motion.div
            className="bg-white w-4 h-4 rounded-full shadow-sm"
            animate={{ x: weekend ? 16 : 0 }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
          />
        </div>
      </div>
    </div>
  );
}
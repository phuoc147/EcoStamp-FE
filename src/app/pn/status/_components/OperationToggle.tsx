import { motion } from 'framer-motion';

interface OperationToggleProps {
  isOpen: boolean;
  onToggle: () => void;
}

export default function OperationToggle({ isOpen, onToggle }: OperationToggleProps) {
  return (
    <div className="bg-white rounded-3xl p-5 mb-6 shadow-sm border border-gray-50 flex items-center justify-between">
      <div>
        <h3 className="text-[10px] font-extrabold text-green-800 tracking-wider mb-1 uppercase">
          Trạng thái vận hành
        </h3>
        <h2 className="text-lg font-bold text-[#1c3f25] mb-1">
          {isOpen ? 'Đang Mở Cửa' : 'Đang Đóng Cửa'}
        </h2>
        <p className="text-[10px] text-gray-400 leading-relaxed pr-4">
          Tắt để ngừng tiếp nhận tất cả các yêu cầu mới ngay lập tức.
        </p>
      </div>

      {/* Custom Toggle Switch */}
      <div 
        onClick={onToggle}
        className={`w-13 h-7.5 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${isOpen ? 'bg-[#1b5e20]' : 'bg-gray-300'}`}
      >
        <motion.div 
          className="bg-white w-5.5 h-5.5 rounded-full shadow-sm"
          animate={{ x: isOpen ? 22 : 0 }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        />
      </div>
    </div>
  );
}
import { ArrowRight, Leaf } from 'lucide-react';

interface ConfirmUpdateCardProps {
  onConfirm: () => void;
}

export default function ConfirmUpdateCard({ onConfirm }: ConfirmUpdateCardProps) {
  return (
    <div className="bg-[#1b5e20] rounded-3xl p-6 mb-6 relative overflow-hidden shadow-md">
      {/* Background Graphic */}
      <Leaf className="absolute -right-5 -bottom-5 opacity-10 text-white" size={140} />
      
      <div className="relative z-10">
        <h3 className="text-white font-bold text-sm mb-2">
          Xác nhận cập nhật cho toàn hệ thống
        </h3>
        <p className="text-[10px] text-green-100/80 leading-relaxed mb-6 pr-4">
          Thay đổi này sẽ hiển thị ngay lập tức với đội ngũ vận chuyển và khách hàng trong khu vực.
        </p>

        <button 
          onClick={onConfirm}
          className="bg-[#b4f07a] text-[#134216] w-45 font-bold py-3.5 px-4 rounded-full text-xs shadow-sm hover:bg-[#a3df69] transition flex items-center justify-center gap-2"
        >
          Xác Nhận Thay Đổi
          <ArrowRight size={14} />
        </button>
      </div>
    </div>
  );
}
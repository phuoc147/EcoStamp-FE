import { MapPin, ShoppingCart } from 'lucide-react';

export default function CurrentStatusPreview() {
  return (
    <div className="bg-[#0f4d19] rounded-3xl p-5 mb-8 relative overflow-hidden shadow-md">
      {/* Background Icon */}
      <ShoppingCart className="absolute -right-5 -bottom-2.5 opacity-10 text-white" size={120} />
      
      <div className="relative z-10">
        <div className="flex justify-between items-start mb-3">
          <h4 className="text-[9px] font-bold text-green-200 tracking-wider uppercase">Trạng thái hiện tại</h4>
          <span className="bg-[#2a833b] text-white text-[8px] font-bold px-2 py-1 rounded-full flex items-center gap-1">
            <span className="w-1.5 h-1.5 bg-[#a3df69] rounded-full animate-pulse"></span>
            ĐANG MỞ
          </span>
        </div>

        <h3 className="text-white font-bold text-lg mb-1 leading-tight">Trạm Xanh Quận 1</h3>
        <p className="text-[#a3df69] flex items-center gap-1 text-[10px] mb-4 font-medium">
          <MapPin size={10} /> Quận 1, TP. HCM
        </p>

        <div className="mb-4">
          <div className="flex justify-between text-[9px] text-green-100 mb-1.5 font-medium">
            <span>Tải lượng hiện tại</span>
            <span>70%</span>
          </div>
          <div className="h-1.5 w-full bg-black/20 rounded-full overflow-hidden">
            <div className="h-full bg-white rounded-full w-[70%]"></div>
          </div>
        </div>

        <div className="flex gap-1.5">
          <span className="bg-white/10 border border-white/20 text-white text-[8px] px-2 py-1 rounded font-medium">HỮU CƠ</span>
          <span className="bg-white/10 border border-white/20 text-white text-[8px] px-2 py-1 rounded font-medium">NHỰA</span>
          <span className="bg-white/10 border border-white/20 text-white text-[8px] px-2 py-1 rounded font-medium">GIẤY</span>
        </div>
      </div>
    </div>
  );
}
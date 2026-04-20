import { MapPin, QrCode, Lock } from 'lucide-react';

const cn = (...classes: Array<string | false | null | undefined>) =>
    classes.filter(Boolean).join(' ');

export default function QrCard({ isLocked, onStartScan }: any) {
  return (
    <div className={cn(
      "bg-white rounded-4xl p-6 shadow-sm border transition-all duration-500",
      isLocked ? "opacity-60 border-gray-100 grayscale-[0.5]" : "border-[#8BC34A]/20"
    )}>
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-heading font-bold text-lg text-[#2E7D32]">2. Mở khóa Trạm</h2>
        {isLocked ? <Lock className="text-gray-400 w-5 h-5" /> : <MapPin className="text-[#8BC34A] w-5 h-5" />}
      </div>

      <p className="text-xs text-gray-500 mb-4">
        {isLocked ? "Vui lòng chụp ảnh rác ở bước 1 để mở khóa." : "Đã có rác. Bạn có thể quét mã trạm để vứt!"}
      </p>

      <button 
        onClick={onStartScan}
        disabled={isLocked} // Khóa không cho bấm nếu chưa có rác
        className={cn(
          "w-full py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all",
          isLocked 
            ? "bg-gray-100 text-gray-400 cursor-not-allowed" 
            : "bg-[#2E7D32] text-white hover:bg-[#1E5D22] shadow-lg shadow-[#2E7D32]/20 active:scale-95"
        )}
      >
        <QrCode size={20} /> Quét mã QR tại Trạm
      </button>
    </div>
  );
}
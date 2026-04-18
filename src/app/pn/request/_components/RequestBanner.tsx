import { Recycle } from 'lucide-react';

export default function RequestBanner() {
  return (
    <div className="px-5 mt-5 relative">
      <div className="w-full h-32 bg-linear-to-r from-[#519e4a] to-[#72c058] rounded-2xl overflow-hidden relative shadow-sm flex items-center justify-center">
        {/* Placeholder cho ảnh bìa chậu cây */}
        <div className="text-white/20">
          <Recycle size={80} />
        </div>
      </div>
      {/* Nút nổi (Floating Action Button) theo thiết kế */}
      <div className="absolute -bottom-4 right-10 w-16 h-16 bg-[#3a7d22] rounded-2xl shadow-lg flex items-center justify-center border-4 border-[#f4faec]">
        <Recycle className="text-white" size={24} />
      </div>
    </div>
  );
}
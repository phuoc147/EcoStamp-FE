import { X, QrCode } from 'lucide-react';
import { Scanner } from '@yudiel/react-qr-scanner';

export default function FullscreenScanner({ onScan, onClose }: any) {
    return (
        <div className="fixed inset-0 z-100 bg-[#1E3E2B]/95 backdrop-blur-xl flex flex-col items-center justify-center animate-in fade-in zoom-in-95 duration-300">
        
        {/* Nút đóng UI */}
        <button 
            onClick={onClose}
            className="absolute top-8 right-6 bg-white/10 p-3 rounded-full text-white hover:bg-white/20 transition-colors z-50 backdrop-blur-md"
        >
            <X size={24} />
        </button>

        <div className="text-center mb-8">
            <h2 className="text-white font-heading font-bold text-3xl tracking-tight mb-2">Quét mã Trạm</h2>
            <p className="text-white/60 text-sm">Xác thực vị trí Trạm Xanh của bạn</p>
        </div>

        {/* Cụm Scanner xử lý Camera */}
        <div className="relative w-72 h-72 rounded-[3rem] overflow-hidden shadow-[0_0_60px_rgba(139,195,74,0.15)] border-4 border-white/5">
            <Scanner 
            onScan={(detectedCodes) => {
                if (detectedCodes.length > 0) {
                onScan(detectedCodes[0].rawValue);
                }
            }}
            formats={['qr_code']}
            components={{ finder: false }} 
            constraints={{
                facingMode: 'environment' 
            }}
            />

            {/* Khung ngắm tùy chỉnh */}
            <div className="absolute inset-0 pointer-events-none p-6 flex flex-col justify-between">
            <div className="flex justify-between">
                <div className="w-10 h-10 border-t-4 border-l-4 border-[#8BC34A] rounded-tl-2xl"></div>
                <div className="w-10 h-10 border-t-4 border-r-4 border-[#8BC34A] rounded-tr-2xl"></div>
            </div>
            
            <div className="w-full h-0.5 bg-[#8BC34A] shadow-[0_0_20px_2px_#8BC34A] animate-pulse"></div>
            
            <div className="flex justify-between">
                <div className="w-10 h-10 border-b-4 border-l-4 border-[#8BC34A] rounded-bl-2xl"></div>
                <div className="w-10 h-10 border-b-4 border-r-4 border-[#8BC34A] rounded-br-2xl"></div>
            </div>
            </div>
        </div>

        <div className="mt-10 bg-white/10 px-6 py-3 rounded-full backdrop-blur-md border border-white/10 flex items-center gap-3">
            <QrCode size={20} className="text-[#8BC34A]" />
            <span className="text-white text-sm font-bold">Đưa mã QR vào khung ngắm</span>
        </div>
        </div>
    );
}
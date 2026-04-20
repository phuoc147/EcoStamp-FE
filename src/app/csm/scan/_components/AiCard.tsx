import { Camera, Loader2, ShieldCheck, ListPlus} from 'lucide-react';

export default function AiCard({ aiState, preview, result, onUpload, scannedCount }: any) {
    return (
        <div className="bg-white rounded-4xl p-6 shadow-sm border border-gray-100 relative overflow-hidden">
            <div className="flex justify-between items-center mb-4">
                <h2 className="font-black text-lg text-[#1c3f25]">1. Định giá Rác (AI)</h2>
                {aiState === 'DONE' && <ShieldCheck className="text-[#00875a] w-6 h-6" />}
            </div>

            {aiState === 'IDLE' && (
                <label className="w-full h-40 border-2 border-dashed border-[#00875a]/30 bg-[#f4faec] rounded-3xl flex flex-col items-center justify-center cursor-pointer hover:bg-[#ebf5e0] transition-all active:scale-95">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm mb-3">
                        <Camera className="text-[#00875a] w-6 h-6" />
                    </div>
                    <span className="text-sm font-black text-[#1c3f25]">Chụp để xem điểm & CO2</span>
                    <p className="text-[10px] text-gray-400 mt-1 uppercase font-bold tracking-widest">Hỗ trợ nhựa, giấy, kim loại</p>
                    <input type="file" className="hidden" accept="image/*" onChange={onUpload} />
                </label>
            )}

            {aiState === 'ANALYZING' && (
                <div className="w-full h-40 bg-[#1c3f25] rounded-3xl flex flex-col items-center justify-center relative overflow-hidden">
                    {preview && <img src={preview} className="absolute inset-0 w-full h-full object-cover opacity-30 grayscale" alt="preview" />}
                    <Loader2 className="animate-spin text-[#aef897] w-8 h-8 relative z-10 mb-2" />
                    <span className="text-[10px] font-black text-white relative z-10 tracking-[0.2em] uppercase">Đang phân tích dữ liệu...</span>
                </div>
            )}

            {aiState === 'DONE' && result && (
                <div className="flex flex-col gap-4 animate-in zoom-in-95 duration-300">
                    <div className="flex gap-4 p-1">
                        <div className="w-20 h-20 rounded-2xl overflow-hidden shrink-0 shadow-md">
                            <img src={preview!} className="w-full h-full object-cover" alt="result" />
                        </div>
                        <div className="flex flex-col justify-center grow">
                            <p className="text-[9px] text-gray-400 font-black uppercase tracking-widest mb-1">Kết quả phân tích</p>
                            <h3 className="text-xl font-black text-[#1c3f25] leading-none mb-2">{result.label}</h3>
                            <div className="bg-[#e9fae3] px-3 py-1 rounded-full border border-[#00875a]/20 w-fit">
                                <span className="font-black text-[#00875a] text-xs">+{result.pts} ECO POINTS</span>
                            </div>
                        </div>
                    </div>
                    
                    <label className="w-full bg-[#1c3f25] py-4 rounded-2xl font-black flex justify-between items-center px-5 cursor-pointer text-white hover:bg-[#154d1a] transition-all active:scale-95 shadow-lg shadow-[#1c3f25]/20">
                        <div className="flex items-center gap-2">
                            <ListPlus size={18} />
                            <span className="text-xs uppercase tracking-wider">Chụp tiếp</span>
                        </div>
                        <span className="bg-[#aef897] text-[#1c3f25] text-[10px] font-black px-3 py-1 rounded-full uppercase">
                             Giỏ: {scannedCount} rác
                        </span>
                        <input type="file" className="hidden" accept="image/*" onChange={onUpload} />
                    </label>
                </div>
            )}
        </div>
    );
}
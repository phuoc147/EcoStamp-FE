import { MapPin, Trash2, Send, Loader2, CheckCircle, XCircle } from 'lucide-react';

const cn = (...classes: Array<string | false | null | undefined>) =>
    classes.filter(Boolean).join(' ');

export default function DepositForm({ 
  stationId, 
  formState, // 'SELECTING' | 'WAITING' | 'SUCCESS' | 'REJECTED'
  wasteTypes, 
  selectedWastes, // ['plastic', 'paper']
  onToggleWaste, 
  onSubmit, 
  onReset 
}: any) {
    return (
        <div className="bg-white rounded-4xl p-6 shadow-xl border border-[#8BC34A]/30 grow flex flex-col animate-in slide-in-from-bottom-10">
      
        {formState === 'SELECTING' && (
            <>
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
                <div>
                    <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Đang kết nối trạm</p>
                    <h2 className="font-black text-xl text-[#2E7D32]">{stationId}</h2>
                </div>
                <div className="bg-[#F1F8E9] p-3 rounded-full text-[#2E7D32] animate-pulse">
                    <MapPin size={24} />
                </div>
            </div>

            <h3 className="font-bold text-[#1E3E2B] mb-4">Bạn mang theo những loại rác nào?</h3>
            
            <div className="grid grid-cols-2 gap-3 mb-auto">
                {wasteTypes.map((type: any) => {
                const isSelected = selectedWastes.includes(type.id);
                return (
                    <button
                    key={type.id}
                    onClick={() => onToggleWaste(type.id)}
                    className={cn(
                        "py-4 px-4 rounded-2xl font-bold text-sm border-2 flex flex-col items-center gap-2 transition-all active:scale-95",
                        isSelected 
                        ? "border-[#2E7D32] bg-[#F1F8E9] text-[#2E7D32]" 
                        : "border-gray-100 bg-gray-50 text-gray-500 hover:border-[#8BC34A]/50"
                    )}
                    >
                    <Trash2 size={24} className={isSelected ? "text-[#2E7D32]" : "text-gray-400"} />
                    {type.label}
                    </button>
                )
                })}
            </div>

            <button 
                onClick={onSubmit}
                disabled={selectedWastes.length === 0}
                className={cn(
                "w-full py-4 rounded-2xl font-bold flex justify-center items-center gap-2 transition-all mt-6",
                selectedWastes.length > 0 ? "bg-[#2E7D32] text-white shadow-lg shadow-[#2E7D32]/20" : "bg-gray-200 text-gray-400 cursor-not-allowed"
                )}
            >
                Gửi yêu cầu thu gom <Send size={18} />
            </button>
            </>
        )}

        {formState === 'WAITING' && (
            <div className="m-auto py-12 flex flex-col items-center justify-center text-center animate-in zoom-in-95">
            <div className="relative mb-6">
                <Loader2 className="w-20 h-20 text-[#2E7D32] animate-spin opacity-20 absolute inset-0" />
                <div className="w-20 h-20 bg-[#F1F8E9] rounded-full flex items-center justify-center animate-pulse relative z-10">
                    <MapPin size={32} className="text-[#8BC34A]" />
                </div>
            </div>
            <h3 className="text-xl font-black text-[#2E7D32] mb-2">Đợi trạm xác nhận...</h3>
            <p className="text-sm text-[#795548]">Vui lòng chờ trong giây lát.</p>
            </div>
        )}

        {formState === 'SUCCESS' && (
            <div className="m-auto text-center animate-in zoom-in-95">
            <CheckCircle className="text-[#2E7D32] w-20 h-20 mx-auto mb-4" />
            <h3 className="font-black text-[#2E7D32] text-2xl mb-2">Thành công!</h3>
            <p className="text-sm text-[#795548] mb-8">Cảm ơn bạn đã bảo vệ môi trường.</p>
            <button onClick={onReset} className="w-full bg-[#F1F8E9] border-2 border-[#2E7D32] text-[#2E7D32] py-4 rounded-2xl font-bold active:bg-[#E8F5E9]">
                Trở về trang chủ
            </button>
            </div>
        )}
    </div>
  );
}
import { CheckCircle, X } from 'lucide-react';

interface SuccessAlertProps {
  code: string;
  onClose: () => void;
}

export default function SuccessAlert({ code, onClose }: SuccessAlertProps) {
  return (
    <div className="mx-5 mt-4 bg-[#e8f3df] border border-[#d1e6c4] rounded-xl p-3 flex items-start gap-3 relative shadow-sm">
      <CheckCircle className="text-[#267a32] mt-0.5 shrink-0" size={18} />
      <div className="pr-4">
        <h4 className="text-xs font-bold text-[#1c3f25]">Yêu cầu đã gửi!</h4>
        <p className="text-[10px] text-gray-600 mt-0.5 leading-relaxed">
          Mã số: <span className="font-semibold">{code}</span>. Đội ngũ thu gom sẽ liên hệ với bạn trong vòng 30 phút.
        </p>
      </div>
      <button 
        onClick={onClose} 
        className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition-colors"
      >
        <X size={14} />
      </button>
    </div>
  );
}
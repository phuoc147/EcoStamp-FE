import { Search, ListFilter, ReceiptText } from "lucide-react";

const transactions = [
    { date: "Oct 24, 2023", time: "09:42 AM", name: "Elena Woods", type: "Rác hữu cơ", initial: "EW", color: "bg-green-300" },
    { date: "Oct 24, 2023", time: "08:15 AM", name: "Marcus Kane", type: "Rác hỗn hợp", initial: "MK", color: "bg-orange-200" },
    { date: "Oct 23, 2023", time: "04:38 PM", name: "Sarah Linn", type: "Giấy tái chế", initial: "SL", color: "bg-green-200" },
];

export default function TransactionHistory() {
    return (
        <div className="text-left pb-10">
        <div className="flex items-center gap-2 mb-6">
            <div className="p-2 bg-orange-100 rounded-lg text-orange-700">
            <ReceiptText className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-gray-800">Lịch sử giao dịch</h3>
        </div>

        <div className="flex gap-2 mb-6">
            <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input 
                type="text" 
                placeholder="Tìm kiếm giao dịch" 
                className="w-full bg-gray-100 border-none rounded-2xl py-3 pl-10 pr-4 text-sm focus:ring-1 focus:ring-green-500"
            />
            </div>
            <button className="p-3 bg-gray-100 rounded-2xl text-gray-500">
            <ListFilter className="w-5 h-5" />
            </button>
        </div>

        <div className="flex justify-between px-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">
            <span>Ngày</span>
            <span>Khách hàng</span>
            <span>Loại rác</span>
        </div>

        <div className="space-y-1 bg-white rounded-[24px] overflow-hidden shadow-sm border border-gray-50">
            {transactions.map((t, idx) => (
            <div key={idx} className="flex justify-between items-center p-4 border-b border-gray-50 last:border-none">
                <div className="text-[10px] font-bold leading-tight">
                <p className="text-gray-800">{t.date}</p>
                <p className="text-gray-400 font-medium">{t.time}</p>
                </div>
                <div className="flex items-center gap-2 flex-1 justify-center pr-4">
                <div className={`w-8 h-8 ${t.color} rounded-full flex items-center justify-center text-[10px] font-bold text-gray-700`}>
                    {t.initial}
                </div>
                <span className="text-[11px] font-bold text-gray-800">{t.name}</span>
                </div>
                <div className="bg-[#e8f1e4] px-3 py-1.5 rounded-full text-[9px] font-bold text-gray-600">
                {t.type}
                </div>
            </div>
            ))}
        </div>

        <button className="w-full py-4 text-green-700 font-bold text-sm mt-4 hover:bg-green-50 rounded-2xl transition-colors">
            Xem tất cả các giao dịch
        </button>
        </div>
    );
}
import { TrendingUp, MoreHorizontal } from "lucide-react";

export default function CollectionTrend() {
    const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN"];

    return (
        <div className="mb-6">
            <div className="flex bg-gray-100 p-1 rounded-2xl mb-6">
                {["Theo tháng", "Theo tuần", "Theo ngày"].map((tab, i) => (
                <button key={tab} className={`flex-1 py-2 rounded-xl text-[11px] font-bold transition-all ${i === 0 ? 'bg-white shadow-sm text-green-800' : 'text-gray-400'}`}>
                    {tab}
                </button>
                ))}
            </div>

            <div className="bg-white p-5 rounded-[24px] shadow-sm border border-gray-50">
                <div className="flex justify-between items-start mb-8">
                <div>
                    <h3 className="font-bold text-gray-800">Xu hướng thu gom</h3>
                    <p className="text-[10px] text-green-600 flex items-center gap-1 font-bold">
                    <TrendingUp className="w-3 h-3" /> +12.4% so với kỳ trước
                    </p>
                </div>
                <button className="p-2 bg-gray-50 rounded-full text-gray-400">
                    <MoreHorizontal className="w-4 h-4" />
                </button>
                </div>
                
                {/* Placeholder cho biểu đồ */}
                <div className="h-32 flex items-end justify-between px-2 mb-2">
                {[40, 60, 100, 70, 50, 45].map((height, i) => (
                    <div key={i} className="w-8 bg-gray-50 rounded-t-md relative group">
                        <div 
                        className={`absolute bottom-0 w-full rounded-t-md transition-all ${i === 2 ? 'bg-green-600' : 'bg-gray-200'}`} 
                        style={{ height: `${height}%` }}
                        />
                    </div>
                ))}
                </div>
                <div className="flex justify-between px-1">
                {months.map((m, i) => (
                    <span key={m} className={`text-[9px] font-bold ${i === 2 ? 'text-green-700' : 'text-gray-300'}`}>{m}</span>
                ))}
                </div>
            </div>
        </div>
    );
}
import { Leaf } from "lucide-react";

export default function EnvironmentalImpact() {
    return (
        <div className="bg-[#d9eedb] p-6 rounded-[32px] text-center mb-6 border border-white/50">
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
            <Leaf className="w-5 h-5 text-green-700" />
        </div>
        <p className="text-[10px] font-bold text-green-800 uppercase tracking-widest mb-1">Tác động môi trường</p>
        <h2 className="text-4xl font-black text-gray-900 mb-2">
            2.4 Tấn<span className="text-sm font-bold text-gray-500 ml-1">CO₂ được giảm</span>
        </h2>
        <p className="text-gray-600 text-[11px] leading-relaxed px-4">
            Tương đương trồng 142 cây trong giai đoạn này
        </p>
        <div className="flex justify-center gap-1 mt-4">
            <div className="w-6 h-6 bg-green-800 rounded-full flex items-center justify-center text-[8px] text-white font-bold">AI</div>
            <div className="w-6 h-6 bg-[#4a6b32] rounded-full flex items-center justify-center text-white">
                <Leaf className="w-3 h-3" />
            </div>
        </div>
        </div>
    );
}
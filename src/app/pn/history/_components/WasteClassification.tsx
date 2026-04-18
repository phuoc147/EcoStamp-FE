export default function WasteClassification() {
    const data = [
        { label: "HỮU CƠ", percent: 68, color: "bg-green-400" },
        { label: "NHỰA", percent: 18, color: "bg-white" },
        { label: "THỦY TINH | KIM LOẠI", percent: 12, color: "bg-red-300" },
    ];
  
    return (
        <div className="bg-[#2d7a3a] p-6 rounded-[24px] text-white mb-8">
            <h3 className="font-bold mb-6 text-sm">Phân loại rác</h3>
            <div className="space-y-5">
            {data.map((item) => (
                <div key={item.label}>
                <div className="flex justify-between text-[10px] font-bold mb-2 tracking-wider">
                    <span>{item.label}</span>
                    <span>{item.percent}%</span>
                </div>
                <div className="h-1.5 bg-white/20 rounded-full overflow-hidden text-left">
                    <div className={`h-full ${item.color} rounded-full`} style={{ width: `${item.percent}%` }} />
                </div>
                </div>
            ))}
            </div>
            <p className="mt-8 text-[11px] italic text-green-100 opacity-80 leading-relaxed">
            “Lượng rác hữu cơ cao nhất thường vào thứ Tư.”
            </p>
        </div>
    );
}
export default function StationStats() {
    return (
        <div className="bg-[#ffd7c9] p-4 rounded-2xl mb-6 text-left">
            <p className="text-gray-600 text-[10px] font-semibold uppercase tracking-wider">Tình trạng trạm</p>
            <h2 className="text-3xl font-bold text-[#2d1a12] my-1">98% Active</h2>
            <div className="flex gap-4 mt-4 text-left">
            <div className="bg-white/40 p-3 rounded-xl flex-1">
                <p className="text-[10px] text-gray-700 font-medium">Tổng nhân viên</p>
                <p className="text-xl font-bold">24</p>
            </div>
            <div className="bg-white/40 p-3 rounded-xl flex-1">
                <p className="text-[10px] text-gray-700 font-medium">Đang làm việc</p>
                <p className="text-xl font-bold">8</p>
            </div>
            </div>
        </div>
    );
}
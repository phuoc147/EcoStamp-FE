import Button from "@/src/components/Button";

export default function EventSection() {
  return (
    <div className="px-6 py-6 text-left">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-gray-800">Sự kiện đang diễn ra</h2>
        <button className="text-[11px] font-bold text-green-700 hover:underline">Hiển thị lịch</button>
      </div>

      {/* Main Event Card */}
      <div className="bg-white rounded-[32px] overflow-hidden shadow-sm border border-gray-50 mb-6">
        <div className="h-44 bg-gray-200 relative">
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
          <img 
            src="https://images.unsplash.com/photo-1542601906990-b4d3fb773b09?q=80&w=1000" 
            className="w-full h-full object-cover" 
            alt="Green Hour" 
          />
          <div className="absolute top-4 left-4 z-20 bg-[#60a044] text-white px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider">
            Đang diễn ra
          </div>
          <div className="absolute bottom-4 left-4 z-20">
            <h3 className="text-2xl font-bold text-white">Green Hour</h3>
          </div>
        </div>
        <div className="p-5 flex justify-between items-center">
          <div className="flex gap-4">
            <div>
              <p className="text-[9px] text-gray-400 uppercase font-bold tracking-tighter">Hệ số nhân</p>
              <p className="text-xl font-black text-green-800">2.5x</p>
            </div>
            <div className="border-l pl-4 border-gray-100">
              <p className="text-sm font-bold text-gray-800">Thứ 6 hàng tuần</p>
              <p className="text-[10px] text-gray-400 font-medium">14:00 - 17:00 PM</p>
            </div>
          </div>
          <Button variant="primary" className="px-4 py-2 rounded-2xl text-[11px] font-bold">
            Chỉnh sửa quy tắc
          </Button>
        </div>
      </div>

      {/* Upcoming Event Card */}
      <div className="bg-[#ffd7c9] p-5 rounded-[24px]">
         <div className="flex justify-between items-center mb-3">
            <div className="p-2 bg-white/40 rounded-lg text-orange-700 text-lg">🎉</div>
            <span className="bg-white/60 text-orange-800 px-3 py-1 rounded-full text-[9px] font-bold tracking-wider uppercase">Sắp diễn ra</span>
         </div>
         <h3 className="font-bold text-lg text-gray-800">Eco Holiday</h3>
         <p className="text-gray-500 text-[11px] mt-1 mb-6 leading-relaxed">Phân phối điểm thưởng và quà tặng đặc biệt nhân Ngày Trái Đất toàn cầu</p>
         
         <div className="flex justify-between items-center">
            <span className="text-[11px] font-bold text-gray-700 uppercase tracking-widest">3.0x Multiplier</span>
            <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-xs">❄️</div>
         </div>
      </div>
    </div>
  );
}
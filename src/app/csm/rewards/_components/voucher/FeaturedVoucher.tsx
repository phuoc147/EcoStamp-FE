export default function FeaturedVoucher() {
  return (
    <div className="bg-white rounded-[28px] p-4 flex gap-4 shadow-sm border border-gray-50">
      <div className="w-20 h-20 bg-gray-100 rounded-2xl overflow-hidden shrink-0">
         <img src="https://images.unsplash.com/photo-1544787210-2211dca4b655" className="w-full h-full object-cover" alt="brand" />
      </div>
      <div className="flex flex-col justify-center flex-1">
        <h5 className="font-black text-sm text-[#1c3f25]">Phúc Long Tea</h5>
        <p className="text-[10px] text-gray-400 font-bold mb-2">Cách bạn 500m</p>
        <div className="bg-[#f5fae4] h-1.5 w-full rounded-full overflow-hidden">
          <div className="bg-[#00875a] h-full w-[70%]" />
        </div>
        <p className="text-[9px] font-black text-[#00875a] mt-1">-15% Hóa đơn</p>
      </div>
    </div>
  );
}
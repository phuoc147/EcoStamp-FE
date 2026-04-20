export default function FeaturedVoucher() {
  return (
    <div className="bg-white rounded-[28px] p-4 flex gap-4 shadow-sm border border-gray-50 active:scale-[0.98] transition-transform">
      {/* Thay thế ảnh bằng một Container Icon chuyên nghiệp */}
      <div className="w-20 h-20 bg-[#f4f9f4] rounded-2xl overflow-hidden shrink-0 flex items-center justify-center border border-green-50">
         <span className="material-symbols-outlined text-4xl text-[#00875a]">
           local_cafe
         </span>
      </div>

      <div className="flex flex-col justify-center flex-1">
        <div className="flex items-center justify-between">
          <h5 className="font-black text-sm text-[#1c3f25]">Phúc Long Tea</h5>
          <span className="text-[8px] font-bold bg-orange-100 text-orange-700 px-1.5 py-0.5 rounded-md">Đồ uống</span>
        </div>
        
        <p className="text-[10px] text-gray-400 font-bold mb-2">Cách bạn 500m</p>
        
        <div className="bg-[#f5fae4] h-1.5 w-full rounded-full overflow-hidden">
          <div className="bg-[#00875a] h-full w-[70%]" />
        </div>
        
        <p className="text-[9px] font-black text-[#00875a] mt-1">-15% Hóa đơn</p>
      </div>
    </div>
  );
}
export default function TransportSupport() {
  return (
    <div className="bg-[#ffeadb] rounded-4xl p-5 flex items-center gap-4 mb-5">
      <div className="flex-1">
        <h3 className="font-bold text-[#4a2e1b] text-sm">Cần hỗ trợ vận chuyển?</h3>
        <p className="text-[10px] text-[#704d36] mt-1">Đội ngũ vận tải đang ở gần khu vực Quận 1 (cách 3.2km). Thời gian ước tính: 15 phút.</p>
      </div>
      <button className="bg-[#3e2110] text-white text-[10px] font-bold px-4 py-2 rounded-full">Xem bản đồ</button>
    </div>
  );
}
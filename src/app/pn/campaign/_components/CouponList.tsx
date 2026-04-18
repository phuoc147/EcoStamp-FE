import { Pencil, Trash2, Coffee, TreeDeciduous } from "lucide-react";

const coupons = [
  {
    id: 1,
    title: "Giảm 50K",
    desc: "Giảm 50k cho các hóa đơn nước ép trên 120k",
    status: "ĐANG HOẠT ĐỘNG",
    quantity: 240,
    points: 50,
    expiry: "31/12/2026",
    icon: <Coffee className="w-5 h-5 text-green-700" />,
  },
  {
    id: 2,
    title: "Giảm 30%",
    desc: "Giảm 30% cho tất cả sản phẩm tại quán",
    status: "CÓ GIỚI HẠN",
    quantity: 15,
    points: 500,
    icon: <TreeDeciduous className="w-5 h-5 text-green-700" />,
  }
];

export default function CouponList() {
  return (
    <div className="px-6 pb-6">
      <div className="flex gap-6 border-b border-gray-100 mb-6">
        <button className="pb-2 border-b-2 border-green-600 font-bold text-green-700 text-sm">Mã giảm giá</button>
        <button className="pb-2 font-bold text-gray-400 text-sm">Sự kiện</button>
      </div>

      <div className="space-y-4 text-left">
        {coupons.map((cp) => (
          <div key={cp.id} className="bg-[#f3f9f1] p-5 rounded-[24px] relative border border-white">
            <div className="flex justify-between items-start mb-2">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                {cp.icon}
              </div>
              <div className="flex gap-2">
                <button className="p-2 bg-white rounded-full text-gray-400 shadow-sm hover:text-green-600 transition-colors">
                  <Pencil className="w-3 h-3" />
                </button>
                <button className="p-2 bg-white rounded-full text-red-400 shadow-sm hover:text-red-600 transition-colors">
                  <Trash2 className="w-3 h-3" />
                </button>
              </div>
            </div>
            
            <h3 className="font-bold text-xl text-gray-800">{cp.title}</h3>
            <p className="text-gray-500 text-[11px] mt-1 mb-4 leading-relaxed">{cp.desc}</p>

            <div className="flex gap-2 mb-4">
              <span className="bg-white px-3 py-1 rounded-full text-[9px] font-bold text-gray-500 tracking-tight">{cp.status}</span>
              <span className="bg-white px-3 py-1 rounded-full text-[9px] font-bold text-gray-500 uppercase tracking-tight">Số lượng: {cp.quantity}</span>
            </div>

            <div className="flex justify-between items-end border-t border-gray-200/50 pt-3">
              <p className="text-[10px] text-gray-400 font-medium">{cp.expiry ? `Hết hạn: ${cp.expiry}` : "Diễn ra theo mùa"}</p>
              <p className="font-extrabold text-[#1a6d2f] text-lg">{cp.points} Điểm</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
import { Store } from 'lucide-react';

const VOUCHERS = [
  { id: 1, brand: "Winmart+", desc: "Giảm 5% hóa đơn", cost: 10 },
  { id: 2, brand: "KFC Việt Nam", desc: "Miễn phí 1 phần Khoai", cost: 15 },
  { id: 3, brand: "Long Châu", desc: "Giảm 10k thực phẩm", cost: 20 },
  { id: 4, brand: "Fahasa Books", desc: "Tặng bọc sách vở", cost: 5 },
];

export default function VoucherGrid() {
  return (
    <div className="grid grid-cols-2 gap-4">
      {VOUCHERS.map(v => (
        <div key={v.id} className="bg-white rounded-3xl p-4 flex flex-col items-center text-center shadow-sm border border-gray-50 active:scale-95 transition-all">
          <div className="w-10 h-10 bg-[#f4faec] rounded-full flex items-center justify-center mb-3">
            <Store size={20} className="text-[#1c3f25]" />
          </div>
          <h6 className="font-black text-xs text-[#1c3f25] mb-1">{v.brand}</h6>
          <p className="text-[9px] text-gray-400 font-bold mb-3 leading-tight">{v.desc}</p>
          <div className="bg-[#e9fae3] px-3 py-1 rounded-full text-[10px] font-black text-[#00875a]">
            {v.cost} Tem
          </div>
        </div>
      ))}
    </div>
  );
}
export default function VoucherGrid() {
  const VOUCHERS = [
    { id: 1, brand: "Winmart+", desc: "Giảm 5% hóa đơn", cost: 10 },
    { id: 2, brand: "KFC Việt Nam", desc: "Miễn phí 1 phần Khoai", cost: 15 },
    { id: 3, brand: "Long Châu", desc: "Giảm 10k thực phẩm", cost: 20 },
    { id: 4, brand: "Fahasa Books", desc: "Tặng bọc sách vở", cost: 5 },
  ];

  return (
    <div className="grid grid-cols-2 gap-4">
      {VOUCHERS.map((v) => (
        <div
          key={v.id}
          className="active:scale-95 flex flex-col items-center border border-gray-50 bg-white p-4 text-center shadow-sm transition-all rounded-3xl"
        >
          <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#f4faec]">
            <span className="material-symbols-outlined text-xl text-[#1c3f25]">
              store
            </span>
          </div>
          
          <h6 className="mb-1 text-xs font-black text-[#1c3f25]">{v.brand}</h6>
          <p className="mb-3 text-[9px] font-bold leading-tight text-gray-400">
            {v.desc}
          </p>
          <div className="rounded-full bg-[#e9fae3] px-3 py-1 text-[10px] font-black text-[#00875a]">
            {v.cost} Tem
          </div>
        </div>
      ))}
    </div>
  );
}
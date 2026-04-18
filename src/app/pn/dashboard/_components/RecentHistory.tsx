export default function RecentHistory() {
  const history = [
    { name: 'Nguyễn Lan', type: 'Nhựa', weight: '12.5 kg', color: 'bg-orange-100', text: 'text-orange-700' },
    { name: 'Trần Anh', type: 'Giấy carton', weight: '45.0 kg', color: 'bg-green-800', text: 'text-white' },
    { name: 'Hoàng Dung', type: 'Kim loại', weight: '8.2 kg', color: 'bg-green-100', text: 'text-green-800' },
  ];

  return (
    <section className="mb-6">
      <h2 className="font-bold text-[#1c3f25] mb-3">Lịch sử nhận rác gần đây</h2>
      <div className="flex gap-2 mb-4 text-[10px] font-bold">
        <button className="bg-white px-4 py-2 rounded-full shadow-sm">TẤT CẢ</button>
        <button className="text-gray-400 px-4 py-2">PLASTIC</button>
        <button className="text-gray-400 px-4 py-2">PAPER</button>
      </div>

      <div className="grid grid-cols-3 text-[10px] text-gray-400 font-bold px-2 mb-2">
        <span>KHÁCH HÀNG</span>
        <span className="text-center">LOẠI RÁC</span>
        <span className="text-right">KHỐI LƯỢNG</span>
      </div>

      <div className="space-y-2">
        {history.map((item, i) => (
          <div key={i} className="bg-white p-3 rounded-2xl flex items-center justify-between shadow-sm">
            <div className="flex items-center gap-2 w-1/3">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold ${item.color} ${item.text}`}>
                {item.name.split(' ').map(n => n[0]).join('')}
              </div>
              <span className="text-[11px] font-bold leading-tight">{item.name}</span>
            </div>
            <div className="w-1/3 text-center">
              <span className="bg-[#f0f6ea] text-gray-500 text-[9px] px-2 py-1 rounded-full font-bold uppercase tracking-tighter">
                {item.type}
              </span>
            </div>
            <span className="w-1/3 text-right text-[11px] font-bold">{item.weight}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
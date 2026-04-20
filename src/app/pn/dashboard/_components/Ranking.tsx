export default function Ranking() {
  return (
    <div className="bg-white rounded-4xl p-5 flex justify-between items-center relative shadow-sm mb-10">
      <div>
        <h3 className="font-bold text-[#1c3f25] text-sm leading-tight">Xếp hạng bảo vệ<br />môi trường</h3>
        <p className="text-[11px] text-gray-400 mt-1">Trạm của bạn đang nằm trong Top 5%</p>
      </div>
      <div className="text-right">
        <div className="text-3xl font-black text-[#2a833b]">#04</div>
        <div className="text-[9px] font-bold text-gray-800">THÀNH PHỐ</div>
      </div>
    </div>
  );
}
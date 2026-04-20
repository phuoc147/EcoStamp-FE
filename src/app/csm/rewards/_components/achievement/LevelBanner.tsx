import ProgressBar from '../shared/ProgressBar';

export default function LevelBanner() {
  return (
    <div className="bg-white rounded-4xl p-6 shadow-sm border border-gray-50 text-center">
      <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-4">Cấp độ hiện tại</p>
      <h2 className="text-2xl font-black text-[#1c3f25] mb-2 uppercase italic">Người Bảo Vệ Rừng</h2>
      <ProgressBar progress={60} />
      <p className="text-[10px] text-gray-400 font-bold mt-3 italic">Cần 240 Tem nữa để đạt cấp "Đại Sứ Xanh"</p>
    </div>
  );
}
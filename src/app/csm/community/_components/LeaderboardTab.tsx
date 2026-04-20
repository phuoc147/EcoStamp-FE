export default function LeaderboardTab() {
    return (
      <div className="space-y-6">
        {/* Season Info */}
        <div className="text-center space-y-1">
          <h2 className="text-2xl font-black text-[#176a21]">🌱 Mùa Xanh Q2/2026</h2>
          <p className="text-xs font-bold text-[#7b5e52]">⏳ Còn 15 ngày là kết thúc mùa</p>
        </div>
  
        {/* Podium */}
        <div className="flex items-end justify-center gap-4 py-8">
          {/* Rank 2 */}
          <div className="flex flex-col items-center">
            <div className="relative mb-2">
              <img src="https://i.pravatar.cc/150?u=2" className="w-16 h-16 rounded-full border-4 border-gray-200 shadow-lg" />
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center text-[10px] font-bold">2</div>
            </div>
            <p className="text-xs font-bold">Minh Tú</p>
            <span className="text-[10px] text-[#176a21]">1.240 🎖️</span>
          </div>
  
          {/* Rank 1 */}
          <div className="flex flex-col items-center scale-110 -translate-y-4">
            <div className="relative mb-2">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-2xl animate-bounce">👑</div>
              <img src="https://i.pravatar.cc/150?u=1" className="w-20 h-20 rounded-full border-4 border-yellow-400 shadow-2xl" />
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-xs font-black">1</div>
            </div>
            <p className="text-sm font-black">Hoàng Nam</p>
            <span className="text-xs text-[#176a21] font-bold">1.850 🎖️</span>
          </div>
  
          {/* Rank 3 */}
          <div className="flex flex-col items-center">
            <div className="relative mb-2">
              <img src="https://i.pravatar.cc/150?u=3" className="w-16 h-16 rounded-full border-4 border-orange-300 shadow-lg" />
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-6 h-6 bg-orange-300 rounded-full flex items-center justify-center text-[10px] font-bold">3</div>
            </div>
            <p className="text-xs font-bold">Quốc Anh</p>
            <span className="text-[10px] text-[#176a21]">980 🎖️</span>
          </div>
        </div>
  
        {/* List */}
        <div className="bg-white rounded-3xl overflow-hidden shadow-sm">
          {[4, 5, 6, 7].map((rank) => (
            <div key={rank} className="flex items-center gap-4 px-6 py-4 border-b border-gray-50 last:border-0">
              <span className="w-4 text-sm font-bold text-gray-400">{rank}</span>
              <img src={`https://i.pravatar.cc/150?u=${rank}`} className="w-10 h-10 rounded-full bg-gray-100" />
              <div className="flex-1">
                <h4 className="text-sm font-bold text-gray-800">Linh Chi</h4>
                <p className="text-[10px] text-gray-400 italic">Huy hiệu lá xanh</p>
              </div>
              <span className="text-sm font-bold text-[#176a21]">850 <span className="text-[10px] font-medium text-gray-400">Tem</span></span>
            </div>
          ))}
        </div>
  
        {/* User Progress Bar */}
        <div className="bg-green-900 rounded-3xl p-5 text-white">
          <div className="flex justify-between items-center mb-3">
            <p className="text-xs font-bold">Cố gắng vào Top 10 để nhận Huy hiệu vinh danh!</p>
            <span className="material-symbols-outlined">stars</span>
          </div>
          <div className="h-1.5 w-full bg-white/20 rounded-full">
            <div className="h-full w-[65%] bg-[#c1fd7c] rounded-full" />
          </div>
          <p className="text-[10px] mt-2 opacity-70">Bạn đang ở hạng #14. Cố lên!</p>
        </div>
      </div>
    );
  }
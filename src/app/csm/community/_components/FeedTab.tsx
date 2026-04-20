"use client";

export default function FeedTab() {
  const feeds = [
    {
      id: 1,
      user: "Nguyễn Văn A",
      action: "vừa tái chế",
      amount: "12 chai nhựa PET",
      points: "+6 tem",
      time: "Vừa xong",
      type: "recycled"
    },
    {
      id: 2,
      user: "Minh Tú",
      avatar: "https://i.pravatar.cc/150?u=minhtu",
      content: "Hôm nay dọn dẹp được mớ giấy vụn! 🌿 Cảm thấy nhẹ nhõm hẳn.",
      image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=500",
      likes: 156,
      time: "2 giờ trước",
      type: "post"
    }
  ];

  return (
    <div className="relative">
      <div className="space-y-4">
        {feeds.map((item) => (
          <div key={item.id} className="bg-white rounded-[32px] p-4 shadow-sm border border-gray-50">
            {item.type === "recycled" ? (
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#e8f5e9] rounded-2xl flex items-center justify-center text-[#176a21]">
                  <span className="material-symbols-outlined">recycling</span>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">
                    <span className="font-bold">{item.user}</span> {item.action}{" "}
                    <span className="text-[#176a21] font-bold">{item.amount}</span>
                  </p>
                  <span className="text-[10px] bg-[#c1fd7c] px-2 py-0.5 rounded-full font-bold">{item.points}</span>
                </div>
                <span className="text-[10px] text-gray-400">{item.time}</span>
              </div>
            ) : (
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <img src={item.avatar} className="w-10 h-10 rounded-full object-cover" />
                  <div className="flex-1">
                    <div className="flex justify-between items-center">
                      <h4 className="text-sm font-bold">{item.user}</h4>
                      <button className="text-gray-400">
                        <span className="material-symbols-outlined text-sm">more_horiz</span>
                      </button>
                    </div>
                    <span className="text-[10px] text-gray-400">{item.time}</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{item.content}</p>
                {item.image && <img src={item.image} className="w-full h-72 object-cover rounded-2xl" />}
                <div className="flex items-center gap-2 pt-1">
                  <button className="flex items-center gap-1.5 text-gray-500 text-xs bg-gray-50 px-4 py-2 rounded-full active:scale-95 transition-all">
                    <span className="material-symbols-outlined text-sm">thumb_up</span>
                    {item.likes}
                  </button>
                  <button className="flex items-center gap-1.5 text-gray-500 text-xs bg-gray-50 px-4 py-2 rounded-full">
                    Chia sẻ
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Sửa nút đăng bài nổi */}
      {/* <div className="fixed bottom-28 left-1/2 -translate-x-1/2 w-full max-w-2xl pointer-events-none z-20">
        <div className="flex justify-end px-6">
          <button className="w-14 h-14 bg-[#176a21] text-white rounded-full shadow-2xl flex items-center justify-center active:scale-90 transition-all pointer-events-auto border-4 border-white">
            <span className="material-symbols-outlined text-2xl">edit</span>
          </button>
        </div>
      </div> */}
    </div>
  );
}
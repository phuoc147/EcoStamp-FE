const TIPS = [
  {
    title: "Làm sạch",
    icon: "wash",
    content:
      "Rửa sạch hộp sữa trước khi tái chế có thể giúp giảm 30% lượng vi khuẩn và mùi hôi!",
    bgClass: "bg-[#775346] text-[#ffefeb]",
  },
  {
    title: "Mua sắm",
    icon: "shopping_bag",
    content:
      "Mang theo túi vải khi đi mua sắm giúp bạn giảm trung bình 500 túi nilon mỗi năm.",
    bgClass: "bg-[#3c6600] text-[#d9ffab]",
  },
  {
    title: "Phân loại",
    icon: "compost",
    content:
      "Phân loại rác tại nguồn giúp tăng hiệu quả tái chế lên gấp 3 lần cho các nhà máy.",
    bgClass: "bg-[#025d16] text-[#d1ffc8]",
  },
];

export default function HomeTips() {
  return (
    <section className="space-y-4">
      <h2 className="text-xl font-extrabold text-[#2a3127]">Mẹo Xanh cho bạn</h2>

      <div className="-mx-6 flex gap-4 overflow-x-auto px-6 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {TIPS.map((tip) => (
          <article
            key={tip.title}
            className={`relative min-w-65 overflow-hidden rounded-3xl p-5 shadow-sm ${tip.bgClass}`}
          >
            <div className="absolute -right-4 -bottom-4 opacity-10">
              <span className="material-symbols-outlined text-7xl">{tip.icon}</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-xl">
                tips_and_updates
              </span>
              <span className="text-[10px] font-bold uppercase tracking-wider">
                {tip.title}
              </span>
            </div>

            <p className="relative z-10 mt-3 text-sm font-medium leading-relaxed">
              {tip.content}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

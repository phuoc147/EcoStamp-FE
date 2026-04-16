const ACTIVITIES = [
  {
    title: "Nhựa PET & Giấy",
    subtitle: "Landmark 81 • 2 giờ trước",
    points: "+25",
    icon: "recycling",
  },
  {
    title: "Đổi thưởng: Túi vải",
    subtitle: "EcoShop • Hôm qua",
    points: "-150",
    icon: "shopping_bag",
  },
  {
    title: "Lon nhôm",
    subtitle: "District 1 Hub • 2 ngày trước",
    points: "+12",
    icon: "recycling",
  },
];

export default function HomeRecentActivity() {
  return (
    <section className="space-y-4">
      <h2 className="text-xl font-extrabold text-[#2a3127]">Hoạt động gần đây</h2>

      <div className="divide-y divide-[#e2ebda] overflow-hidden rounded-3xl bg-[#ffffff] shadow-sm">
        {ACTIVITIES.map((activity) => (
          <div key={activity.title} className="flex items-center justify-between p-4">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#176a21]/5">
                <span className="material-symbols-outlined text-[#176a21]">
                  {activity.icon}
                </span>
              </div>
              <div>
                <p className="font-semibold text-[#2a3127]">{activity.title}</p>
                <p className="text-sm text-[#575e52]">{activity.subtitle}</p>
              </div>
            </div>

            <span
              className={`font-black ${
                activity.points.startsWith("-") ? "text-[#b02500]" : "text-[#176a21]"
              }`}
            >
              {activity.points}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

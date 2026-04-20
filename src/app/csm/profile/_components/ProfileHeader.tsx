export default function ProfileHeader({ name, level, avatar }: any) {
  return (
    <div className="flex items-center gap-4">
      <div className="w-20 h-20 rounded-full border-4 border-white shadow-lg overflow-hidden bg-white">
        <img src={avatar} alt="avatar" className="w-full h-full object-cover" />
      </div>
      <div className="flex flex-col">
        <h2 className="text-2xl font-black text-[#1c3f25] leading-tight">{name}</h2>
        <div className="bg-[#1c3f25] px-3 py-1 rounded-full w-fit mt-1">
          <span className="text-[10px] font-black text-[#aef897] uppercase tracking-widest">
            {level}
          </span>
        </div>
      </div>
    </div>
  );
}
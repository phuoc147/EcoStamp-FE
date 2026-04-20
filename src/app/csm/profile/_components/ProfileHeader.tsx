export default function ProfileHeader() {
    return (
        <section className="flex flex-col items-center gap-2">
            <div className="relative">
            <div className="h-24 w-24 overflow-hidden rounded-full border-4 border-[#9df197] shadow-lg">
                <img 
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" 
                alt="User Avatar" 
                className="h-full w-full object-cover"
                />
            </div>
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 rounded-full bg-[#176a21] px-3 py-0.5 text-[10px] font-black text-white whitespace-nowrap">
                Level 12
            </span>
            </div>
            <div className="mt-2 text-center">
            <h1 className="text-xl font-black text-[#2a3127]">Trần Anh Tuấn</h1>
            <p className="text-sm font-medium text-[#7b5e52]">Người Bảo Vệ Rừng</p>
            </div>
        </section>
    );
}
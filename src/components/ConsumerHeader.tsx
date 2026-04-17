"use client";

export default function ConsumerHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-emerald-50/70 border-b border-emerald-100 shadow-[0_4px_16px_rgba(0,0,0,0.06)] backdrop-blur-3xl">
      {/* Container này sẽ giúp nội dung căn giữa và rộng tối đa trên web */}
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-2xl text-[#176a21]">
            eco
          </span>
          <span className="text-2xl font-black tracking-tight text-[#2a3127]">
            EcoStamp
          </span>
        </div>

        <div className="flex items-center gap-4">
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-[#dce6d4]/60"
            aria-label="Thông báo"
          >
            <span className="material-symbols-outlined text-[#176a21]">
              notifications
            </span>
          </button>

          <div className="h-10 w-10 overflow-hidden rounded-full border-2 border-[#9df197]">
            <img
              className="h-full w-full object-cover"
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
              alt="Ảnh đại diện"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
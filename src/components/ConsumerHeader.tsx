"use client";

export default function ConsumerHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center">
      <div
        className="flex w-full items-center justify-between border-b border-emerald-100 bg-emerald-50/70 px-6 py-4 shadow-[0_4px_16px_rgba(0,0,0,0.06)] backdrop-blur-3xl"
        style={{ maxWidth: 430 }}
      >
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
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAz_6URfAORade00f7wryrHcD6NMvJGS5ZGR-SzaslgvbNRdoDA_YNG3wMA87MGzSqWvv5in8gX2Vp55Ws1oxT2TGCzQHnmmLvmxD9_0OWMLVdviBia8wTMpxOOc0Po-lEba_6yta3fR9uaKYV4ajz0Fy5A5Q7W1kw_CjTs19-gBukpDNy1S9g7xE2rGV-QsdOkjTRe2gn1tbj-ocpP9TV7kC1ECqWs0b3PAU_Av1NN3Px2Q_8WHKE8lO55GfgxTfyGlcJFSUluITIx"
              alt="Ảnh đại diện người dùng"
            />
          </div>
        </div>
      </div>
    </header>
  );
}

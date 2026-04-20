"use client";

import { useRouter } from "next/navigation";

export default function ProfileLogout() {
    const router = useRouter();

    return (
        <section>
            <button 
            type="button" 
            onClick={() => router.push("/login")}
            className="flex h-12 w-full items-center justify-center gap-2 rounded-2xl bg-[#d94321] text-[14px] font-black text-white shadow-md shadow-orange-200 transition-transform active:scale-[0.98]"
            >
            <span className="material-symbols-outlined text-lg">logout</span>
            Đăng xuất
            </button>
        </section>
    );
  }
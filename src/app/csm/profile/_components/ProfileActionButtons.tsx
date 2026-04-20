"use client";

import { useRouter } from "next/navigation";

export default function ProfileActionButtons() {
    const router = useRouter();

    return (
        <section className="flex flex-col gap-3">
            <button 
                type="button" 
                onClick={() => router.push("/signin/partner")}
                className="flex h-12 w-full items-center justify-center gap-3 rounded-2xl border-2 border-[#c1fd7c] bg-[#f0fdf4] text-sm font-bold text-[#176a21] transition-transform active:scale-[0.98]"
            >
                <span className="material-symbols-outlined">add_location_alt</span>
                Đăng ký đối tác trạm xanh
            </button>
            
            <button 
                type="button" 
                onClick={() => router.push("/signin/employee")}
                className="flex h-12 w-full items-center justify-center gap-3 rounded-2xl border-2 border-gray-100 bg-white text-sm font-bold text-[#176a21] shadow-sm transition-transform active:scale-[0.98]"
                >
                <span className="material-symbols-outlined">person_add</span>
                Đăng ký tài khoản nhân viên
            </button>
        </section>
    );
}
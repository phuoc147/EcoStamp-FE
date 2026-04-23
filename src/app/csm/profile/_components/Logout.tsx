"use client";

import { logout } from "@/src/features/auth/api";
import { isApiSuccess } from "@/src/lib";
import { useRouter } from "next/navigation";

export default function ProfileLogout() {
  const router = useRouter();
  const logOutHandler = async () => {
    const res = await logout();
    console.log("Logout response:", res);
    // if (isApiSuccess(res)) {
    router.push("/login");
    // }
  };
  return (
    <section>
      <button
        type="button"
        onClick={logOutHandler}
        className="flex h-12 w-full items-center justify-center gap-2 rounded-2xl bg-[#d94321] text-[14px] font-black text-white shadow-md shadow-orange-200 transition-transform active:scale-[0.98]"
      >
        <span className="material-symbols-outlined text-lg">logout</span>
        Đăng xuất
      </button>
    </section>
  );
}
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { login } from "@/src/features/auth/api";

export default function LoginForm() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!username.trim() || !password.trim()) {
      alert("Vui lòng nhập đầy đủ tên đăng nhập và mật khẩu!");
      return;
    }
    try {
      const res = await login({ identifier: username, password });
      router.push("/csm/home");
    } catch (error) {
      console.log("Error during login:", error);
      alert("Đã xảy ra lỗi. Vui lòng thử lại sau.");
    }
  };

  return (
    <form onSubmit={handleLogin} className="w-full space-y-5">
      {/* CSS để ẩn icon "con mắt" mặc định của trình duyệt Edge/Chrome */}
      <style jsx>{`
        input::-ms-reveal,
        input::-ms-clear {
          display: none;
        }
      `}</style>

      {/* Tên đăng nhập */}
      <div className="space-y-1.5">
        <label className="px-1 text-[11px] font-bold uppercase tracking-widest text-[#7b5e52]">
          Tên đăng nhập
        </label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Nhập tài khoản của bạn"
          className="w-full rounded-2xl border border-gray-100 bg-white p-4 text-sm font-medium shadow-sm outline-none transition-all focus:border-[#176a21]"
        />
      </div>

      {/* Mật khẩu */}
      <div className="space-y-1.5">
        <label className="px-1 text-[11px] font-bold uppercase tracking-widest text-[#7b5e52]">
          Mật khẩu
        </label>
        <div className="relative flex items-center">
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            className="w-full rounded-2xl border border-gray-100 bg-white p-4 pr-12 text-sm font-medium shadow-sm outline-none transition-all focus:border-[#176a21]"
          />
          {/* Nút hiện/ẩn mật khẩu tùy chỉnh */}
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 text-gray-400 active:scale-90 transition-transform flex items-center justify-center"
          >
            <span className="material-symbols-outlined text-xl select-none">
              {showPassword ? "visibility" : "visibility_off"}
            </span>
          </button>
        </div>
      </div>

      <div className="flex justify-end pr-1">
        <button
          type="button"
          //   onClick={() => router.push('/auth/forgot-password')}
          className="text-xs font-bold text-[#176a21] active:opacity-70"
        >
          Quên mật khẩu?
        </button>
      </div>

      <button
        type="submit"
        className="flex h-13 w-full items-center justify-center rounded-2xl bg-[#176a21] text-base font-bold text-white shadow-md shadow-green-100 transition-all active:scale-[0.98]"
      >
        Đăng nhập
      </button>
    </form>
  );
}
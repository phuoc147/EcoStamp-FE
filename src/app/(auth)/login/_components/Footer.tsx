"use client";

import { useRouter } from 'next/navigation';

export default function LoginFooter() {
  const router = useRouter();

  return (
    <div className="mt-10 text-center">
      <p className="text-sm font-medium text-[#575e52]">
        Chưa có tài khoản?{" "}
        <button 
          onClick={() => router.push('/signin/consumer')}
          className="font-bold text-[#176a21] underline-offset-4 decoration-2 active:opacity-70"
        >
          Đăng ký
        </button>
      </p>
    </div>
  );
}
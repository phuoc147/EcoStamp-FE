"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/src/providers/auth-provider";
import { Role } from "@/src/types/auth";
import { login } from "@/src/features/auth/api";


const LOGIN_REDIRECT_BY_ROLE: Record<Role, string> = {
  consumer: "/home",
  partner: "/dashboard",
  employee: "/employee",
};

const SIGN_UP_ROLES: Role[] = ["consumer", "partner", "employee"];

export default function LoginPage() {
  const router = useRouter();
  const { setUser } = useAuth();
  const [role, setRole] = useState<Role>("consumer");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleLogin() {
    setErrorMessage(null);
    setIsSubmitting(true);

    try {
      const user = await login({ role, username, password });
      setUser(user);
      router.push(LOGIN_REDIRECT_BY_ROLE[user.role]);
    } catch (error) {
      const message = error instanceof Error ? error.message : "Login failed";
      setErrorMessage(message);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="p-6">
      <h1 className="text-2xl font-semibold">Login</h1>
      <div className="mt-6 space-y-4">
        <select
          className="w-full rounded-lg border border-gray-300 px-4 py-3"
          value={role}
          onChange={(event) => setRole(event.target.value as Role)}
        >
          <option value="consumer">Consumer</option>
          <option value="partner">Partner</option>
          <option value="employee">Employee</option>
        </select>
        <input
          className="w-full rounded-lg border border-gray-300 px-4 py-3"
          type="text"
          placeholder="User name"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <input
          className="w-full rounded-lg border border-gray-300 px-4 py-3"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button
          className="w-full rounded-lg bg-black px-4 py-3 text-white disabled:opacity-60"
          type="button"
          onClick={handleLogin}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Logging in..." : "Login"}
        </button>
        {errorMessage ? (
          <p className="text-sm text-red-600">{errorMessage}</p>
        ) : null}
      </div>

      <p className="mt-6 text-sm text-gray-600">
        Bạn chưa có tài khoản, đăng ký tài khoản với vai trò
      </p>
      <div className="mt-3 grid grid-cols-1 gap-3">
        {SIGN_UP_ROLES.map((signUpRole) => (
          <button
            key={signUpRole}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-left"
            type="button"
            onClick={() => router.push(`/signin/${signUpRole}`)}
          >
            Đăng ký vai trò {signUpRole}
          </button>
        ))}
      </div>
    </main>
  );
}

import type { LoginInput, SignInInput } from "@/src/features/auth/types";
import type { User } from "@/src/types/auth";

const BASE_URL = "/api";

// ===== LOGIN =====
export async function login(input: LoginInput): Promise<User> {
  const res = await fetch(`${BASE_URL}/login`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(input),
  });

  if (!res.ok) {
    throw new Error("Login failed");
  }

  return res.json();
}

// ===== SIGN IN =====
export async function signIn(input: SignInInput): Promise<User> {
  const res = await fetch(`${BASE_URL}/signin`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(input),
  });

  if (!res.ok) {
    throw new Error("Sign in failed");
  }

  return res.json();
}

// ===== GET SESSION =====
export async function getSession(): Promise<User | null> {
  const res = await fetch(`${BASE_URL}/me`, {
    credentials: "include",
  });

  if (!res.ok) return null;

  return res.json();
}

// ===== LOGOUT =====
export async function logout(): Promise<void> {
  await fetch(`${BASE_URL}/logout`, {
    method: "POST",
    credentials: "include",
  });
}
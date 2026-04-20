import type { ApiErrorShape, ApiSuccess } from "../types/index";

const BE_URL = process.env.BE_URL ?? "http://localhost:4000";

const extractErrorMessage = (payload: unknown): string => {
  const data = payload as ApiErrorShape | null;

  if (!data) {
    return "Unknown API error";
  }

  if (data.error?.message) {
    return data.error.message;
  }

  if (data.message) {
    return data.message;
  }

  return "Unknown API error";
};

export async function apiFetch<T>(
  path: string,
  init?: RequestInit,
): Promise<T> {
  const response = await fetch(`${BE_URL}${path}`, {
    ...init,
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      ...(init?.headers ?? {}),
    },
    cache: "no-store",
  });

  const text = await response.text();
  const payload = text ? (JSON.parse(text) as unknown) : null;

  if (!response.ok) {
    throw new Error(extractErrorMessage(payload));
  }

  const data = payload as ApiSuccess<T>;

  if (!data?.success) {
    throw new Error(extractErrorMessage(payload));
  }

  return data.data;
}

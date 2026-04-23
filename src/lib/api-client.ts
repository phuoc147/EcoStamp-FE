import type { ApiError, ApiSuccess } from "../types/index";

export async function apiFetch<T>(
  path: string,
  init?: RequestInit,
): Promise<ApiSuccess<T> | ApiError> {
  try {
    const response = await fetch(`/api/proxy${path}`, {
      ...init,
      credentials: "include",
      headers: {
        ...(init?.headers ?? {}),
        ...(init?.body ? { "Content-Type": "application/json" } : {}),
      },
      cache: "no-store",
    });

    const text = await response.text();
    const data = text ? JSON.parse(text) : null;

    if (!response.ok) {
      console.log("API Error:", path, data);
      return data as ApiError;
    }

    return data as ApiSuccess<T>;
  } catch (error) {
    console.log("Network error:", path, error);
    return {
      success: false,
      error: {
        message: "Network error",
        details: error instanceof Error ? error.message : String(error),
      },
    } as ApiError;
  }
}

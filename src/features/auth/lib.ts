import { cookies } from "next/headers";
import type { User } from "@/src/types/auth";

const AUTH_COOKIE_KEY = "ecostamp_session";

export async function getServerSessionUser(): Promise<User | null> {
  const cookieStore = await cookies();
  const session = cookieStore.get(AUTH_COOKIE_KEY)?.value;

  if (!session) return null;

  try {
    const user = JSON.parse(session) as User;
    return user;
  } catch {
    return null;
  }
}
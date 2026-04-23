import { ApiSuccess, AuthRole } from "@/src/types";
import { cookies } from "next/headers";

export default async function checkRole(role: AuthRole): Promise<boolean> {
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get("session_token");
  try {
    const res = await fetch(
      `${process.env.BE_URL ?? "http://localhost:4000"}/auth/me`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Cookie: `session_token=${sessionCookie?.value}`,
        },
        cache: "no-store",
      },
    );
    if (!res.ok) {
      return false;
    }
    const session = (await res.json()) as ApiSuccess<any>;
    return session.data.user.availableRoles.includes(role);
  } catch (error) {
    console.log("Connect to server failed", error);
    return false;
  }
}

export async function checkExistAccount(): Promise<boolean> {
  const res = await checkRole("USER");
  return res;
}

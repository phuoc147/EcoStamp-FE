"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type Dispatch,
  type PropsWithChildren,
  type SetStateAction,
} from "react";
import { getSession } from "../features/auth/api";
import type { MeResData } from "../features/auth/types";
import type { AuthUser } from "../types/index";

type AuthContextValue = {
  data: MeResData | null;
  user: AuthUser | null;
  setUser: Dispatch<SetStateAction<AuthUser | null>>;
  isLoading: boolean;
  loading: boolean;
  error: string | null;
  refresh: () => Promise<void>;
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function AuthProvider({ children }: PropsWithChildren) {
  const [data, setData] = useState<MeResData | null>(null);
  const [user, setUser] = useState<AuthUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const refresh = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const session = await getSession();
      setData(session);
      setUser(session?.user ?? null);
    } catch (err) {
      setData(null);
      setUser(null);
      setError(
        err instanceof Error ? err.message : "Failed to load auth context",
      );
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    void refresh();
  }, [refresh]);

  const value = useMemo<AuthContextValue>(
    () => ({
      data,
      user,
      setUser,
      isLoading,
      loading: isLoading,
      error,
      refresh,
    }),
    [data, user, isLoading, error, refresh],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }

  return context;
}

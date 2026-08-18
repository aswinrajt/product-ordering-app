import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";

type AuthContextValue = {
  isAuthenticated: boolean;
  username: string | null;
  login: (username: string) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [username, setUsername] = useState<string | null>(null);

  const login = useCallback((name: string) => setUsername(name), []);
  const logout = useCallback(() => setUsername(null), []);

  const value = useMemo(
    () => ({ isAuthenticated: username !== null, username, login, logout }),
    [username, login, logout],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
}

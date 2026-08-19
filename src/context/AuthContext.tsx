import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

const STORAGE_KEY = "spice-route-user";

type AuthContextValue = {
  isAuthenticated: boolean;
  username: string | null;
  login: (username: string) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextValue | null>(null);

function getStoredUsername(): string | null {
  if (typeof window === "undefined") return null;
  try {
    return window.localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
}

function setStoredUsername(username: string | null) {
  if (typeof window === "undefined") return;
  try {
    if (username === null) {
      window.localStorage.removeItem(STORAGE_KEY);
    } else {
      window.localStorage.setItem(STORAGE_KEY, username);
    }
  } catch {
    // Ignore storage errors (e.g. private mode)
  }
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [username, setUsername] = useState<string | null>(null);

  useEffect(() => {
    const stored = getStoredUsername();
    if (stored) {
      setUsername(stored);
    }
  }, []);

  useEffect(() => {
    setStoredUsername(username);
  }, [username]);

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

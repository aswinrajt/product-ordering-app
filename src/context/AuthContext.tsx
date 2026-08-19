import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  useSyncExternalStore,
  type ReactNode,
} from "react";

const STORAGE_KEY = "spice-route-user";

function getSnapshot(): string | null {
  if (typeof window === "undefined") return null;
  try {
    return window.localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
}

function getServerSnapshot(): null {
  return null;
}

function subscribe(callback: () => void) {
  const handler = (event: StorageEvent) => {
    if (event.key === STORAGE_KEY) callback();
  };
  window.addEventListener("storage", handler);
  return () => window.removeEventListener("storage", handler);
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

type AuthContextValue = {
  isAuthenticated: boolean;
  username: string | null;
  login: (username: string) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const storedUsername = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const [username, setUsername] = useState(storedUsername);

  // Keep internal state in sync when storage changes from other tabs
  useEffect(() => {
    setUsername(storedUsername);
  }, [storedUsername]);

  const login = useCallback((name: string) => {
    setStoredUsername(name);
    setUsername(name);
  }, []);

  const logout = useCallback(() => {
    setStoredUsername(null);
    setUsername(null);
  }, []);

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

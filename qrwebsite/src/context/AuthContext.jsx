import { createContext, useContext, useEffect, useState } from "react";
import { apiRequest, withAuth } from "../lib/api";

const AuthContext = createContext(null);
const TOKEN_KEY = "qrwebsite.auth.token";

export function AuthProvider({ children }) {
  const [token, setToken] = useState(() => localStorage.getItem(TOKEN_KEY));
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(Boolean(localStorage.getItem(TOKEN_KEY)));

  useEffect(() => {
    if (!token) {
      setUser(null);
      setIsLoading(false);
      localStorage.removeItem(TOKEN_KEY);
      return;
    }

    localStorage.setItem(TOKEN_KEY, token);
    setIsLoading(true);

    apiRequest("/api/auth/me", {
      headers: withAuth(token),
    })
      .then((profile) => {
        setUser(profile);
      })
      .catch(() => {
        localStorage.removeItem(TOKEN_KEY);
        setToken(null);
        setUser(null);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [token]);

  const authenticate = async (path, credentials) => {
    const response = await apiRequest(path, {
      method: "POST",
      body: JSON.stringify(credentials),
    });

    setToken(response.token);
    return response;
  };

  const login = (credentials) => authenticate("/api/auth/login", credentials);
  const register = (credentials) => authenticate("/api/auth/register", credentials);

  const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        user,
        isLoading,
        isAuthenticated: Boolean(token && user),
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
}


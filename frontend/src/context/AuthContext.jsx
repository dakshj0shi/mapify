import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem("user");
    if (saved) setUser(JSON.parse(saved));
  }, []);

  const login = async ({ email }) => {
    // TEMP stub: partner will wire real auth; this just unblocks UI work
    const fake = { email, name: email.split("@")[0], token: "dev-token" };
    localStorage.setItem("user", JSON.stringify(fake));
    localStorage.setItem("token", fake.token);
    setUser(fake);
  };

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);

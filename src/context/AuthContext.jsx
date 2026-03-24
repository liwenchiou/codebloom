import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(() => !!localStorage.getItem("userId"));
  const [userName, setUserName] = useState(() => localStorage.getItem("userName") || "訪客");
  const [userId, setUserId] = useState(() => localStorage.getItem("userId") || null);
  const [isLoading] = useState(false);

  const login = (id, name) => {
    localStorage.setItem("userId", id);
    localStorage.setItem("userName", name);
    setIsAuth(true);
    setUserId(id);
    setUserName(name);
  };

  const logout = () => {
    localStorage.removeItem("userId");
    localStorage.removeItem("userName");
    setIsAuth(false);
    setUserId(null);
    setUserName("訪客");
  };

  return (
    <AuthContext.Provider value={{ isAuth, userName, userId, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};


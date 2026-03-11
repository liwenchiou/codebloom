import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [userName, setUserName] = useState("訪客");
  const [userId, setUserId] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 初始化時檢查 localStorage
    const storedUserId = localStorage.getItem("userId");
    const storedUserName = localStorage.getItem("userName");
    
    if (storedUserId) {
      setIsAuth(true);
      setUserId(storedUserId);
      setUserName(storedUserName || "使用者");
    }
    setIsLoading(false);
  }, []);

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

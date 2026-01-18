import { createContext, useState } from "react";
import React from "react";

export let Auth = createContext();

const AuthContext = ({ children }) => {
  const [user, setUser] = useState(() => {
    return localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null;
  });

  const login = (loginDetails) => {
    setUser(loginDetails);
    localStorage.setItem("user", JSON.stringify(loginDetails));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return <Auth.Provider value={{ login, user, logout }}>{children}</Auth.Provider>;
};

export default AuthContext;

import { createContext, useContext, useEffect, useState } from "react";
import { getFromLocalStorage } from "../services/localStorageService";
import jwtDecode from "jwt-decode";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(true);
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    if (getFromLocalStorage("isLogged")) {
      setIsLogged(true);
    }
    if (getFromLocalStorage("isAdmin")) {
      setIsAdmin(true);
    }
  }, []);

  const values = {
    isAdmin,
    setIsAdmin,
    isLogged,
    setIsLogged,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => useContext(AuthContext);

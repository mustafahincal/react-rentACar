import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(true);
  const [user, setUser] = useState({});
  const values = {
    isAdmin,
    setIsAdmin,
    user,
    setUser,
  };

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};

export const useUserContext = () => useContext(UserContext);

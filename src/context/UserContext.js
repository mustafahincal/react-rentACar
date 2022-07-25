import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(true);
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUsers] = useState({});
  const values = {
    isAdmin,
    setIsAdmin,
    users,
    setUsers,
    selectedUser,
    setSelectedUsers,
  };

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};

export const useUserContext = () => useContext(UserContext);

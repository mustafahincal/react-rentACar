import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(true);
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState({});
  const values = {
    isAdmin,
    setIsAdmin,
    users,
    setUsers,
    selectedUser,
    setSelectedUser,
  };

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};

export const useUserContext = () => useContext(UserContext);

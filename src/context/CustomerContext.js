import { createContext, useContext, useState } from "react";

const CustomerContext = createContext();

export const CustomerProvider = ({ children }) => {
  const [customers, setCustomers] = useState([]);
  const [seledtedCustomer, setSelectedCustomer] = useState({});

  const values = {
    customers,
    setCustomers,
    seledtedCustomer,
    setSelectedCustomer,
  };

  return (
    <CustomerContext.Provider value={values}>
      {children}
    </CustomerContext.Provider>
  );
};

export const useCustomerContext = () => useContext(CustomerContext);

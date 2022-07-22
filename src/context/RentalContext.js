import { createContext, useContext, useState } from "react";

const RentalContext = createContext();

export const RentalProvider = ({ children }) => {
  const [rentals, setRentals] = useState([]);

  const values = {
    rentals,
    setRentals,
  };

  return (
    <RentalContext.Provider value={values}>{children}</RentalContext.Provider>
  );
};

export const useRentalContext = () => useContext(RentalContext);

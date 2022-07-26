import { createContext, useContext, useState } from "react";

const RentalContext = createContext();

export const RentalProvider = ({ children }) => {
  const [rentals, setRentals] = useState([]);
  const [selectedRental, setSelectedRental] = useState({});

  const values = {
    rentals,
    setRentals,
    selectedRental,
    setSelectedRental,
  };

  return (
    <RentalContext.Provider value={values}>{children}</RentalContext.Provider>
  );
};

export const useRentalContext = () => useContext(RentalContext);

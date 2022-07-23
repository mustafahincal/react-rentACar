import { createContext, useContext, useState } from "react";

const CarContext = createContext();

export const CarProvider = ({ children }) => {
  const [cars, setCars] = useState([]);
  const [selectedCar, setSelectedCar] = useState({});
  const [rentDate, setRentDate] = useState();
  const [returnDate, setReturnDate] = useState();

  const values = {
    cars,
    setCars,
    selectedCar,
    setSelectedCar,
    returnDate,
    setReturnDate,
    rentDate,
    setRentDate,
  };

  return <CarContext.Provider value={values}>{children}</CarContext.Provider>;
};

export const useCarContext = () => useContext(CarContext);

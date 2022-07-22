import { createContext, useContext, useState } from "react";

const CarContext = createContext();

export const CarProvider = ({ children }) => {
  const [cars, setCars] = useState([]);
  const [selectedCar, setSelectedCar] = useState({});

  const values = {
    cars,
    setCars,
    selectedCar,
    setSelectedCar,
  };

  return <CarContext.Provider value={values}>{children}</CarContext.Provider>;
};

export const useCarContext = () => useContext(CarContext);

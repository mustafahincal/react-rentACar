import { createContext, useContext, useState } from "react";

const BrandContext = createContext();

export const BrandProvider = ({ children }) => {
  const [brands, setBrands] = useState([]);

  const values = {
    brands,
    setBrands,
  };

  return (
    <BrandContext.Provider value={values}>{children}</BrandContext.Provider>
  );
};

export const useBrandContext = () => useContext(BrandContext);

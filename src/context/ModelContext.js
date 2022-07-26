import { createContext, useContext, useState } from "react";

const ModelContext = createContext();

export const ModelProvider = ({ children }) => {
  const [models, setModels] = useState([]);

  const values = {
    models,
    setModels,
  };

  return (
    <ModelContext.Provider value={values}>{children}</ModelContext.Provider>
  );
};

export const useModelContext = () => useContext(ModelContext);

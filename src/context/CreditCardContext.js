import { createContext, useContext, useState } from "react";

const CreditCardContext = createContext();

export const CreditCardProvider = ({ children }) => {
  const [creditCards, setCreditCards] = useState([]);
  const [selectedCreditCard, setSelectedCreditCard] = useState();

  const values = {
    creditCards,
    setCreditCards,
    selectedCreditCard,
    setSelectedCreditCard,
  };

  return (
    <CreditCardContext.Provider value={values}>
      {children}
    </CreditCardContext.Provider>
  );
};

export const useCreditCardContext = () => useContext(CreditCardContext);

import React, { useState } from "react";
import { useContext } from "react";

const SetPriceContext = React.createContext();

export const SetPriceProvider = ({ children }) => {
  const [price, setPrice] = useState();

  return (
    <SetPriceContext.Provider value={[price, setPrice]}>
      {children}
    </SetPriceContext.Provider>
  );
};

export const useSetPriceContext = () => useContext(SetPriceContext);

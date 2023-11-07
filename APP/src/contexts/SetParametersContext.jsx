import React, { useState } from "react";
import { useContext } from "react";

const SetParametersContext = React.createContext();

export const SetParametersProvider = ({ children }) => {
  const [parametersSelected, setParametersSelected] = useState();

  return (
    <SetParametersContext.Provider
      value={[parametersSelected, setParametersSelected]}
    >
      {children}
    </SetParametersContext.Provider>
  );
};

export const useSetParametersContext = () => useContext(SetParametersContext);

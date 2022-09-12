import { createContext, useContext, useState } from "react";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [sidebarActive, setSidebarActive] = useState(false);

  return (
    <StateContext.Provider
      value={{
        sidebarActive,
        setSidebarActive,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);

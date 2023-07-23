import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function Wrapper({ children }) {
  const [isOpenSidebar, setIsOpenSidebar] = useState(true);
  const [isServiceLoading, setIsServiceLoading] = useState(false);
  const sharedState = {
    isOpenSidebar,
    setIsOpenSidebar,
    isServiceLoading,
    setIsServiceLoading,
  };

  return (
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}

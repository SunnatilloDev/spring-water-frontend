import { createContext, useState } from "react";
export const ModalContext = createContext(null);
const ModalProvider = ({ children }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <ModalContext.Provider value={{ isActive, setIsActive }}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;

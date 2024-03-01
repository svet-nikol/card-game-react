import { createContext, useState } from "react";

export const TriersContext = createContext(null);

export const TriersProvider = ({ children }) => {
  const [numberOfTries, setNumberOfTries] = useState(1);
  const countdownOfTries = () => {
    setNumberOfTries(prev => prev - 1);
  };

  return (
    <TriersContext.Provider value={{ numberOfTries, setNumberOfTries, countdownOfTries }}>
      {children}
    </TriersContext.Provider>
  );
};

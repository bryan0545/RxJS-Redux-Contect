import { createContext, useContext, useState } from "react";

export const ExampleContext = createContext();

export const ExampleProvider = ({ children }) => {
  const [contextValue, setContextValue] = useState("");
  return (
    <ExampleContext.Provider value={{ contextValue, setContextValue }}>
      {children}
    </ExampleContext.Provider>
  );
};

export const useExampleContext = () => {
  const context = useContext(ExampleContext);
  if (context === undefined) {
    throw new Error("ExampleContext must be used whitin a ExampleProvider");
  }
  return context;
};

import React from "react";
import { useExampleContext } from "../context/example.context";

const ComponentContex2 = () => {
  const { contextValue } = useExampleContext();
  return (
    <div>
      <p>{contextValue}</p>
    </div>
  );
};

export default ComponentContex2;

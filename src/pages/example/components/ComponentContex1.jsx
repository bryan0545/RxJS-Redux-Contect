import React from "react";
import { useExampleContext } from "../context/example.context";

const ComponentContex1 = () => {
  const { setContextValue } = useExampleContext();

  const handleClick = () => {
    setContextValue("Hola mi ciela");
  };

  return (
    <div>
      <button onClick={handleClick}>Enviar info Context</button>
    </div>
  );
};

export default ComponentContex1;

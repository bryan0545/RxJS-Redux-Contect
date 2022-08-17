import React from "react";
import ComponentContex1 from "./components/ComponentContex1";
import ComponentContex2 from "./components/ComponentContex2";
import ComponentRedux2 from "./components/ComponentRedux2";
import { ExampleProvider } from "./context/example.context";

const Page1 = () => {
  return (
    <div>
      <ExampleProvider>
        <ComponentContex1 />
        <ComponentContex2 />
        <ComponentRedux2 />
      </ExampleProvider>
    </div>
  );
};

export default Page1;

import React from "react";
import { useDispatch } from "react-redux";
import { createUser, modifyUser, resetUser } from "../../../redux/states/user";

const ComponentRedux1 = () => {
  const handleClickCreate = () => {
    dispatcher(createUser({ name: "alan", email: "alan@gmail.com" }));
  };
  const handleClickModify = () => {
    dispatcher(modifyUser({ name: "Bryan Rodas " }));
  };
  const handleClickReset = () => {
    dispatcher(resetUser());
  };

  const dispatcher = useDispatch();
  return (
    <div>
      <button onClick={handleClickCreate}>Enviar info Redux, Crear user</button>
      <button onClick={handleClickModify}>Enviar info Redux, Mod user</button>
      <button onClick={handleClickReset}>Enviar info Redux, Reset user</button>
    </div>
  );
};

export default ComponentRedux1;

import React from "react";
import { sharingInformationService } from "../../utilities/sharing-information.service";

const Component1 = () => {
  const handleClick = () => {
    sharingInformationService.setSubject(true);
  };

  const handleClickNo = () => {
    sharingInformationService.setSubject(false);
  };

  return (
    <div>
      <button onClick={handleClick}>Enviar informacion</button>
      <button onClick={handleClickNo}>Enviar informacion</button>
    </div>
  );
};

export default Component1;

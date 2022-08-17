import React, { useEffect, useState } from "react";
import { sharingInformationService } from "../../utilities/sharing-information.service";

const Component2 = () => {
  const suscription$ = sharingInformationService.getSubject();
  const [count, setCount] = useState(0);

  useEffect(() => {
    suscription$.subscribe((data) => {
      if (data) setCount(count + 1);
    });
  });

  return (
    <div>
      <h4>Count: {count}</h4>
    </div>
  );
};

export default Component2;

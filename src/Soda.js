import React from "react";
import GoBackButton from "./GoBackButton";
import sodaImg from "./images/Soda.png";

function Soda() {
  return (
    <div>
      <h1>Soda</h1>
      <img src={sodaImg} alt="Soda" />
      <GoBackButton />
    </div>
  );
}

export default Soda;

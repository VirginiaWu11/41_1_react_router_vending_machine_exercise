import React from "react";
import GoBackButton from "./GoBackButton";
import chipsImg from "./images/Chips.png";

function Chips() {
  return (
    <div>
      <h1>Chips</h1>
      <img src={chipsImg} alt="Chips" />
      <GoBackButton />
    </div>
  );
}

export default Chips;

import React from "react";
import GoBackButton from "./GoBackButton";
import sardinesImg from "./images/Sardines.png";
function FreshSardines() {
  return (
    <div>
      <h1>FreshSardines</h1>
      <img src={sardinesImg} alt="Sardines" />
      <GoBackButton />
    </div>
  );
}

export default FreshSardines;

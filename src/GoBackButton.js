import React from "react";
import { useHistory } from "react-router-dom";

function GoBackButton() {
  const history = useHistory();
  return <button onClick={history.goBack}>Go Back</button>;
}

export default GoBackButton;

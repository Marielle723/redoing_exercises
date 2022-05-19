import React from "react";
import TeslaButtonName from "./TeslaButtonName";
import TeslaButtonPrice from "./TeslaButtonPrice";

function TeslaButton(props) {
  return (
    <button>
      {props.buttonName}-{props.buttonPrice}€
    </button>
  );
}

export default TeslaButton;

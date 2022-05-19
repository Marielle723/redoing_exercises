import React from "react";
import TeslaButtonName from "./TeslaButtonName";
import TeslaButtonPrice from "./TeslaButtonPrice";

function TeslaButton({ name, price }) {
  return (
    <button>
      <TeslaButtonName name={name} /> -
      <TeslaButtonPrice price={price} />
    </button>
  );
}

export default TeslaButton;

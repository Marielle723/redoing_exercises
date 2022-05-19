import React from "react";

function TeslaButtonPrice(props) {
  const currency = "€";
  return (
    <p>
      {props.price}
      {currency}
    </p>
  );
}

export default TeslaButtonPrice;

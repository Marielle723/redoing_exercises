import React, { useState } from "react";

function TeslaTotal(carSelected, colorSelected) {
  const [total, setTotal] = useState(0);

  return <p>{carSelected} €</p>;
}

export default TeslaTotal;

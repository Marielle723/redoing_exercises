import React, { useState } from "react";

function TeslaTotal({ carCurrent, colorCurrent }) {
  const total = carCurrent + colorCurrent;
  return <p> {total} €</p>;
}

export default TeslaTotal;

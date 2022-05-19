import React, { useState } from "react";
import TeslaTitle from "./TeslaTitle";
import TeslaSubtitle from "./TeslaSubtitle";
import TeslaButton from "./TeslaButton";
import TeslaInput from "./TeslaInput";
import TeslaTotal from "./TeslaTotal";

function TeslaConfig() {
  const car = [
    { name: "Grande Autonomie", price: 90700 },
    { name: "Performance", price: 106700 },
  ];

  const color = [
    { name: "Blanc nacré multicouches", price: 0 },
    { name: "Noir Uni", price: 1000 },
  ];

  const [carSelected, setCarSelected] = useState(car[0].price);
  const [colorSelected, setColorSelected] = useState(color[0].price);

  return (
    <div className="tesla-config">
      <TeslaTitle title="Tesla Config" />
      <TeslaSubtitle subtitle="Sélectionner votre véhicule" />

      <TeslaInput
        type={car}
        carSelected={carSelected}
        setCarSelected={setCarSelected}
      />

      <TeslaSubtitle subtitle="Sélectionner la couleur" />
      <TeslaInput
        type={color}
        colorSelected={colorSelected}
        setColorSelected={setColorSelected}
      />

      <TeslaTotal carSelected={carSelected} colorSelected={colorSelected} />

      {/* <span>BUY !</span> */}
    </div>
  );
}

export default TeslaConfig;

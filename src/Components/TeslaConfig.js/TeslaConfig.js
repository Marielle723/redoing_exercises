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

  const [carCurrent, setCarCurrent] = useState(car[0].price);
  const [colorCurrent, setColorCurrent] = useState(color[1].price);

  return (
    <div className="tesla-config">
      <TeslaTitle title="Tesla Config" />
      <TeslaSubtitle subtitle="Sélectionner votre véhicule" />

      <TeslaInput
        type={car}
        genre="car"
        carCurrent={carCurrent}
        setCarCurrent={setCarCurrent}
      />

      <TeslaSubtitle subtitle="Sélectionner la couleur" />
      <TeslaInput
        type={color}
        genre="color"
        colorCurrent={colorCurrent}
        setColorCurrent={setColorCurrent}
      />

      <div className="total">
        <TeslaTotal carCurrent={carCurrent} colorCurrent={colorCurrent} />
        <button className="buy">BUY !</button>
      </div>
    </div>
  );
}

export default TeslaConfig;

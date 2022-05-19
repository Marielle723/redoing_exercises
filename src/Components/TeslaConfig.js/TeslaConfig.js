import React, { useState } from "react";
import TeslaTitle from "./TeslaTitle";
import TeslaSubtitle from "./TeslaSubtitle";
import TeslaButton from "./TeslaButton";
import TeslaInput from "./TeslaInput";

function TeslaConfig() {
  const car = [
    { name: "Grande Autonomie", price: 90700 },
    { name: "Performance", price: 106700 },
  ];

  const color = [
    { name: "Blanc nacré multicouches", price: 0 },
    { name: "Noir Uni", price: 1000 },
  ];

  return (
    <div>
      <TeslaTitle title="Tesla Config" />
      <TeslaSubtitle subtitle="Sélectionner votre véhicule" />

      <TeslaInput type={car} />

      {/* <TeslaButton buttonName={car[0].carName} buttonPrice={car[0].carPrice} />
      <TeslaButton buttonName={car[1].carName} buttonPrice={car[1].carPrice} /> */}

      <TeslaSubtitle subtitle="Sélectionner la couleur" />

      <TeslaInput type={color} />

      {/* 
      <TeslaButton
        buttonName={color[0].colorName}
        buttonPrice={color[0].colorPrice}
      />
      <TeslaButton
        buttonName={color[1].colorName}
        buttonPrice={color[1].colorPrice}
      /> */}
    </div>
  );
}

export default TeslaConfig;

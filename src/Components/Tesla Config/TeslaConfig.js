import React from "react";
import TeslaTitle from "./TeslaTitle";
import CarSelection from "./CarSelection";
import Selection from "./Selection";

function TeslaConfig() {
  const title = "Tesla Config";
  const subtitles = ["Sélectionnez votre véhicule", "Sélectionnez la couleur"];
  const carModel = { "Grande Autonomie": 90700, Performanc: 106700 };
  const colorChoice = { "Blanc Nacré Multicouches": 0, "Noir Uni": 1000 };

  return (
    <div>
      <TeslaTitle title={title} />
      <Selection
        subtitles={subtitles}
        carModel={carModel}
        colorChoice={colorChoice}
      />
    </div>
  );
}

export default TeslaConfig;

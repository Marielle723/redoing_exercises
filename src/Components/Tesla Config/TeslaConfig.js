import React from "react";
import TeslaTitle from "./TeslaTitle";
import CarSelection from "./CarSelection";
import ColorSelection from "./ColorSelection";
import TeslaSubtitle from "./TeslaSubtitle";

function TeslaConfig() {
  const title = "Tesla Config";
  const subtitles = ["Sélectionnez votre véhicule", "Sélectionnez la couleur"];

  return (
    <div>
      <TeslaTitle title={title} />
      <TeslaSubtitle subtitles={subtitles} />
    </div>
  );
}

export default TeslaConfig;

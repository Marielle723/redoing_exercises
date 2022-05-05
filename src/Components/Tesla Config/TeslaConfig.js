import React from "react";
import TeslaTitle from "./TeslaTitle";

import TeslaSubtitle from "./TeslaSubtitle";

function TeslaConfig() {
  const title = "Tesla Config";
  const subtitles = ["Sélectionnez votre véhicule", "Sélectionnez la couleur"];
  const carSelection = 

  return (
    <div>
      <TeslaTitle title={title} />
      <TeslaSubtitle subtitles={subtitles} />
     
    </div>
  );
}

export default TeslaConfig;

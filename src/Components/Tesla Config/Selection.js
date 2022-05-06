import React from "react";
import CarSelection from "./CarSelection";
import ColorSelection from "./ColorSelection";
import TeslaSubtitle from "./TeslaSubtitle";

function Selection({ subtitles, carModel, colorChoice }) {
  //   console.log("substitles :" + subtitles);
  //   console.log("colorChoice " + colorChoice);

  return (
    <ul>
      <TeslaSubtitle subtitles={subtitles} />
      <CarSelection carModel={carModel} />
      <ColorSelection colorChoice={colorChoice} />
    </ul>
  );
}

export default Selection;

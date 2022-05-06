import React from "react";
import CarSelection from "./CarSelection";
import ColorSelection from "./ColorSelection";

function TeslaSubtitle({ subtitles }) {
  return (
    <ul>
      {subtitles.map((subtitle, index) => {
        return <li key={index}>{subtitle}</li>;
      })}
    </ul>
  );
}

export default TeslaSubtitle;

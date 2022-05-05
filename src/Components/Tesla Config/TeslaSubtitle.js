import React from "react";
import CarSelection from "./CarSelection";
import ColorSelection from "./ColorSelection";

function TeslaSubtitle({ subtitles }) {
  const carSelection = [
    { "Grande Autonomie": "90700" },
    { " Performanc": "106700" },
  ];

  const colorSelection = [
    { "Blanc Nacré Multicouches": "0" },
    { "Noir Uni": "1000" },
  ];

  return (
    <ul>
      {subtitles.map((subtitle, index) => {
        return (
          <li key={index}>
            <CarSelection
              subtitle={subtitle}
              carSelection={carSelection}
              colorSelection={colorSelection}
            />
          </li>
        );
      })}
    </ul>
  );
}

export default TeslaSubtitle;

import React from "react";

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

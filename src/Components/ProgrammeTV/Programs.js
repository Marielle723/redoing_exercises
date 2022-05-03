import React from "react";
import Program from "./Program";

function Programs({ programs }) {
  console.log(programs);
  return (
    <ul>
      {programs.map((program, index) => {
        return <Program key={index} program={program} />;
      })}
    </ul>
  );
}

export default Programs;

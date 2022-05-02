import React, { useState } from "react";
import programs from "./programs.json";
import ProgramHeader from "./ProgramHeader";

function ProgramTV() {
  const [data, setData] = useState(programs);

  return (
    <div>
      <ProgramHeader />
    </div>
  );
}

export default ProgramTV;

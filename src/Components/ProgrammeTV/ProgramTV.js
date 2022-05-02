import React, { useState } from "react";
import programs from "./programs.json";
import ProgramHeader from "./ProgramHeader";
import Programs from "./Programs";

function ProgramTV() {
  const [data, setData] = useState(programs);

  return (
    <div>
      <ProgramHeader />
      <Programs programs={data} />
    </div>
  );
}

export default ProgramTV;

import React from "react";
import msixlogo from "./programLogo.png";

function ProgramHeader() {
  return (
    <header className="header-logo-center">
      <img src={`${msixlogo}`} alt="M6 logo" />
      <h1>M6</h1>
    </header>
  );
}

export default ProgramHeader;

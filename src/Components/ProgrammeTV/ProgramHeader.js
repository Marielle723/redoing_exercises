import React from "react";
import msixlogo from "./programLogo.png";

function ProgramHeader() {
  return (
    <header className="header-logo-center">
      <img src={`${msixlogo}`} alt="M6 logo" />
    </header>
  );
}

export default ProgramHeader;

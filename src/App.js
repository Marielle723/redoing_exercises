import "./App.css";

import Counter from "./Components/React_Counter/Counter";
import Bank from "./Components/Bank/Bank";
import ProgramTV from "./Components/ProgrammeTV/ProgramTV";
import TeslaConfig from "./Components/TeslaConfig.js/TeslaConfig";

import { useState } from "react";

function App() {
  return (
    <div className="main-container">
      <div className="side letf-top">
        <Counter />
      </div>

      <div className="side right-top">
        <Bank />
      </div>

      <div className="side left-bottom">
        <ProgramTV />
      </div>

      <div className="side right-bottom">
        <TeslaConfig />
      </div>
    </div>
  );
}

export default App;

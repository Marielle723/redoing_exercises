import "./App.css";
import { useState } from "react";
import Counter from "./Components/React_Counter/Counter";
import Bank from "./Components/Bank/Bank";
import ProgramTV from "./Components/ProgrammeTV/ProgramTV";
import TeslaConfig from "./Components/TeslaConfig.js/TeslaConfig";
import BirthdayReminder from "./BirthdayReminder/BirthdayReminder";
import LoremIpsumGen from "./Components/LoremIpsum_Generator/LoremIpsumGen";

import Slider from "./Components/Slider/Slider";
import Navbar from "./Components/Navbar/Navbar";
import FastGoodCheap from "./Components/FastGoodCheap/FastGoodCheap";

function App() {
  return (
    <>
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

      <div className="main-container">
        <div className="side letf-top">
          <FastGoodCheap />
        </div>

        <div className="side right-top">Simple Form</div>

        <div className="side left-bottom">Emoji Search</div>

        <div className="side right-bottom">Convertisseurs</div>
      </div>

      <div className="main-container">
        <div className="side letf-top">
          <BirthdayReminder />
        </div>

        <div className="side right-top">
          <LoremIpsumGen />
        </div>

        <div className="side left-bottom">
          <Slider />
        </div>

        <div className="side right-bottom">
          <Navbar />
        </div>
      </div>
    </>
  );
}

export default App;

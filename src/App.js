import "./App.css";
import { useState } from "react";
import Counter from "./Components/React_Counter/Counter";
import Bank from "./Components/Bank/Bank";
import ProgramTV from "./Components/ProgrammeTV/ProgramTV";
import TeslaConfig from "./Components/TeslaConfig.js/TeslaConfig";
import TodoList from "./Components/ToDoList/TodoList";
import BirthdayReminder from "./BirthdayReminder/BirthdayReminder";
import LoremIpsumGen from "./Components/LoremIpsum_Generator/LoremIpsumGen";
import Calculator from "./Components/Calculator/Calculator";
import Slider from "./Components/Slider/Slider";
import EmojiSearch from "./Components/Emoji Search/EmojiSearch";
import MatchingCard from "./Components/CardGame/MatchingCard";

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

        <div className="side right-top">
          <TodoList />
        </div>

        <div className="side left-bottom">
          <EmojiSearch />
        </div>

        <div className="side right-bottom">
          <MatchingCard />
        </div>
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
          <Calculator />
        </div>
      </div>
    </>
  );
}

export default App;

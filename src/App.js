import "./App.css";
import { useState } from "react";
import Header from "./Components/Header/Header";
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
import TrivialPursuit from "./TrivialPursuit/TrivialPursuit";

import FastGoodCheap from "./Components/FastGoodCheap/FastGoodCheap";

function App() {
  return (
    <>
      <Header />
      <div className="main-container">
        <div className="side letf-top">
          <MatchingCard />
        </div>

        <div className="side right-top">
          <Counter />
        </div>

        <div className="side left-bottom">
          <BirthdayReminder />
        </div>

        <div className="side right-bottom">
          <Slider />
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
          <Bank />
        </div>
      </div>

      <div className="main-container">
        <div className="side letf-top">
          <ProgramTV />
        </div>

        <div className="side right-top">
          <LoremIpsumGen />
        </div>

        <div className="side left-bottom">
          <TeslaConfig />
        </div>

        <div className="side right-bottom">
          <Calculator />
        </div>

        <div className="main-container">
          <div className="app-container">
            <TrivialPursuit />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

import "./App.css";
import FastGoodCheap from "./Components/FastGoodCheap/FastGoodCheap";
import Counter from "./Components/React_Counter/Counter";
import Bank from "./Components/Bank/Bank";

import { useState } from "react";

function App() {
  return (
    <div className="main-container">
      <Counter />

      <div className="side right-top">
        <Bank />
      </div>
      <div className="side left-bottom">
        <h1>Smiley search</h1>
      </div>
    </div>
  );
}

export default App;

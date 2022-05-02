import React, { useState } from "react";
import ToggleSwitch from "./ToggleSwitch";

function FastGoodCheap() {
  const [fast, setFast] = useState(false);
  const [good, setGood] = useState(false);
  const [cheap, setCheap] = useState(false);

  return (
    <>
      <h1>How do you want your developer ?</h1>
      <div className="wrapper">
        <div className="box">
          <ToggleSwitch
            color={"red"}
            label={"fast"}
            fast={fast}
            setFast={setFast}
          />
          <p>Fast</p>
        </div>

        <div className="box">
          <ToggleSwitch
            color={"green"}
            label={"good"}
            good={good}
            setGood={setGood}
          />
          <p>Good</p>
        </div>

        <div className="box">
          <ToggleSwitch
            color={"blue"}
            label={"cheap"}
            cheap={cheap}
            setCheap={setCheap}
          />
          <p>Cheap</p>
        </div>
      </div>
    </>
  );
}

export default FastGoodCheap;

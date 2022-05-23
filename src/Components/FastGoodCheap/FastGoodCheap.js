import React, { useState } from "react";
import ToggleSwitch from "./ToggleSwitch";
import ToggleTitle from "./ToggleTitle";

function FastGoodCheap() {
  const [fast, setFast] = useState(false);
  const [good, setGood] = useState(false);
  const [cheap, setCheap] = useState(false);

  return (
    <div>
      <ToggleTitle title="Fast Good Cheap" />

      <ToggleSwitch label="fast" checked={fast} setChecked={setFast} />
      <ToggleSwitch label="good" checked={good} setChecked={setGood} />
      <ToggleSwitch label="cheap" checked={cheap} setChecked={setCheap} />
    </div>
  );
}

export default FastGoodCheap;

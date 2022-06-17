import React, { useState } from "react";

function FastGoodCheap() {
  const [checkedFast, setCheckedFast] = useState(false);
  const [checkedGood, setCheckedGood] = useState(false);
  const [checkedCheap, setCheckedCheap] = useState(false);

  const handleFast = () => {
    if (checkedGood && checkedCheap) {
      setCheckedCheap(false);
    }
    setCheckedFast(!checkedFast);
  };

  const handleGood = () => {
    if (checkedFast && checkedCheap) {
      setCheckedCheap(false);
    }
    setCheckedGood(!checkedGood);
  };

  const handleCheap = () => {
    if (checkedFast && checkedGood) {
      setCheckedFast(false);
    }
    setCheckedCheap(!checkedCheap);
  };
  return (
    <div>
      <h1>Fast Good Cheap</h1>
      <h4>How do you like your ideal dev</h4>
      <label>
        <input
          type="checkbox"
          name="fast"
          id="fast"
          onChange={handleFast}
          checked={checkedFast}
        />
        Fast
      </label>

      <label>
        <input
          type="checkbox"
          name="good"
          id="good"
          onChange={handleGood}
          checked={checkedGood}
        />
        good
      </label>

      <label>
        <input
          type="checkbox"
          name="Cheap"
          id="Cheap"
          onChange={handleCheap}
          checked={checkedCheap}
        />
        cheap
      </label>
    </div>
  );
}

export default FastGoodCheap;

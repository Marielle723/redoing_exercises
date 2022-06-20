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
    <div className="fastgoodcheap">
      <h1 className="text-center">Fast Good Cheap</h1>
      <h4>How do you like your ideal dev</h4>
      <div className="fgc-wrapper">
        <div>
          <label className="switch red">
            <input
              type="checkbox"
              name="fast"
              id="fast"
              onChange={handleFast}
              checked={checkedFast}
              className="toggle"
            />
            <span className="slider" />
          </label>
          <p className="maj bold">FAST</p>
        </div>

        <div>
          <label className="switch green">
            <input
              type="checkbox"
              name="good"
              id="good"
              onChange={handleGood}
              checked={checkedGood}
              className="toggle"
            />
            <span className="slider" />
          </label>
          <p className="maj bold">GOOD</p>
        </div>

        <div>
          <label className="switch blue">
            <input
              type="checkbox"
              name="Cheap"
              id="Cheap"
              onChange={handleCheap}
              checked={checkedCheap}
              className="toggle"
            />
            <span className="slider" />
          </label>
          <p className="maj bold">CHEAP</p>
        </div>
      </div>
    </div>
  );
}

export default FastGoodCheap;

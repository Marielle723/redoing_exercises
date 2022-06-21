import React, { useState } from "react";
import woman from "./woman.png";
import potion from "./Potion.png";
import cupcake from "./cupcake.png";

function Counter() {
  const [counterPotion, setCounterPotion] = useState(0);
  const [counterCake, setCounterCake] = useState(0);
  const [flag, setFlag] = useState("");

  const handlePotionClick = () => {
    setCounterPotion(counterPotion + 1);
    setFlag("potion");
  };

  const handleCakeClick = () => {
    setCounterCake(counterCake + 1);
    setFlag("cake");
  };

  return (
    <>
      <header>
        <h1>
          <span className="logo">&#128425;</span>React Counter
        </h1>
      </header>

      <main>
        <div className="counter-wrapper">
          <div className="img-container">
            <div className="counter">
              <img src={potion} onClick={handlePotionClick} />

              <div className="counter-var">
                {flag === "potion" ? (
                  <span>{counterPotion} sips</span>
                ) : (
                  <span>{counterCake} bites</span>
                )}
              </div>

              <img src={cupcake} onClick={handleCakeClick} />
            </div>
            <img
              className="woman-anime"
              src={woman}
              alt="african woman with turban and makeup"
            />
          </div>

          <p
            className="reset"
            onClick={() => {
              setCounterCake(0);
              setCounterPotion(0);
            }}
          >
            reset
          </p>
        </div>
      </main>

      <footer>
        <p>
          Made with <span> React </span> at <span> Le Reacteur </span> by
          <span> Marielle</span>
        </p>
      </footer>
    </>
  );
}

export default Counter;

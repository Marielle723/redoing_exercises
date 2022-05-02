import React, { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="side letf-top">
      <header>
        <h1>
          <span className="logo">&#128425;</span>React Counter
        </h1>
      </header>

      <main>
        <div className="counter-wrapper">
          <div className="counter">
            {counter > 0 && (
              <button onClick={() => setCounter(counter - 1)}>&#10134;</button>
            )}
            <p className="counter-var">{counter}</p>

            {counter < 10 && (
              <button onClick={() => setCounter(counter + 1)}>&#10133;</button>
            )}
          </div>

          <p className="reset" onClick={() => setCounter(0)}>
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
    </div>
  );
}

export default Counter;

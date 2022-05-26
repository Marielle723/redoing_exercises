import React, { useState } from "react";
import DummyText from "./DummyText";

function LoremIpsumGen() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    let textDisplayed = DummyText.slice(0, amount);
    setText(textDisplayed);
  };

  return (
    <section className="section-center">
      <h3>Tired of boring lorem ipsum ?</h3>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">Paragraphs:</label>
        <input
          type="number"
          name="amount"
          id="amount"
          max={DummyText.length}
          min={0}
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button type="submit" className="lorem-btn">
          generate
        </button>
        <button type="button" className="reset-btn" onClick={() => setText([])}>
          reset
        </button>
      </form>
      <article className="lorem-text">
        {text.map((paragraph, index) => {
          return (
            <p key={index} className="lorem-par">
              {paragraph}
            </p>
          );
        })}
      </article>
    </section>
  );
}

export default LoremIpsumGen;

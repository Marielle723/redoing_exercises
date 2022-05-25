import React, { useState } from "react";
import DummyText from "./DummyText";

function LoremIpsumGen() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Hello World");
  };

  return (
    <section className="section-center">
      <h3>Tired of boring lorem ipsum</h3>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">Paragraph:</label>
        <input type="number" name="amount" id="amount" />
      </form>
    </section>
  );
}

export default LoremIpsumGen;

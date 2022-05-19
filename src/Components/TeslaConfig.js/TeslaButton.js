import React, { useState } from "react";
import TeslaButtonName from "./TeslaButtonName";
import TeslaButtonPrice from "./TeslaButtonPrice";

function TeslaButton({ name, price, type, current, setCurrent, index }) {
  const handleClick = (name) => {
    setCurrent(name);
  };

  return (
    <button
      className={current === name ? "config-button active" : "config-button"}
      onClick={() => handleClick(name)}
    >
      <TeslaButtonName name={name} /> -
      <TeslaButtonPrice price={price} />
    </button>

    // <>
    //   <label>
    //     <input
    //       type="radio"
    //       className="tesla-radio"
    //       id={`${name}`}
    //       value={`${price}`}
    //       name={`${type}`}
    //       onChange={(e) => handleChange(e.target.value)}
    //     />
    //     {/* <TeslaButtonName name={name} />
    //     <TeslaButtonPrice price={price} /> */}
    //     label
    //   </label>

    // </>
  );
}

export default TeslaButton;

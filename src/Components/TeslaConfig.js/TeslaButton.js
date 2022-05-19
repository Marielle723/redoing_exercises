import React, { useState } from "react";
import TeslaButtonName from "./TeslaButtonName";
import TeslaButtonPrice from "./TeslaButtonPrice";

function TeslaButton({ name, price, type }) {
  const handleChange = (val) => {
    setTotal(total + val);
  };

  const [total, setTotal] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");

  return (
    <button className="config-button">
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

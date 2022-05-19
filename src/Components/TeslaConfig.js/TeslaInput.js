import React, { useState } from "react";
import TeslaButton from "./TeslaButton";

function TeslaInput(props) {
  const [current, setCurrent] = useState(props.type[0].name);

  return (
    <ul>
      {props.type.map((tesla, index) => {
        return (
          <li key={index}>
            <TeslaButton
              current={current}
              setCurrent={setCurrent}
              name={tesla.name}
              price={tesla.price}
              type={props.type}
            />
          </li>
        );
        // <input
        //   key={index}
        //   type="radio"
        //   id={`${props.type}`}
        //   name="car"
        //   value={`${props.type}`}
        // >
        //   {tesla.carName} - {tesla.carPrice}
        // </input>;
      })}
    </ul>
  );
}

export default TeslaInput;

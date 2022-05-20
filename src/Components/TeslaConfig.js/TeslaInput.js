import React, { useState } from "react";
import TeslaButton from "./TeslaButton";

function TeslaInput({
  carCurrent,
  colorCurrent,
  setCarCurrent,
  setColorCurrent,
  type,
  genre,
}) {
  // const [carCurrent, setCarCurrent] = useState(props.type[0].name);
  // const [colorCurrent, setColorCurrent] = useState(props.type[1].name);

  return (
    <ul>
      {type.map((tesla, index) => {
        return (
          <li key={index}>
            <TeslaButton
              current={genre === "car" ? carCurrent : colorCurrent}
              setCurrent={genre === "car" ? setCarCurrent : setColorCurrent}
              name={tesla.name}
              price={tesla.price}
              type={type}
              index={index}
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

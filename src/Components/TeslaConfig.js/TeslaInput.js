import React from "react";

function TeslaInput(props) {
  return (
    <ul>
      {props.type.map((tesla, index) => {
        return (
          <li key={index}>
            <button>
              {tesla.name} - {tesla.price} €
            </button>
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

import React from "react";

function CarSelection(props) {
  const { carModel } = props;

  const carModelTab = Object.keys(carModel);
  // console.log("carModel : " + carModelTab);
  return (
    <ul>
      {carModelTab.map((model, index) => {
        return <li key={index}>{model}</li>;
      })}
    </ul>
  );
}

export default CarSelection;

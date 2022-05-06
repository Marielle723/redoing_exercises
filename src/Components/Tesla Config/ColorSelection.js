import React from "react";
import ColorPrice from "./ColorPrice";

function ColorSelection({ colorChoice }) {
  // console.log("color choice :" + colorChoice);

  const colorSelected = Object.keys(colorChoice);

  console.log("colorSelected " + colorSelected);

  return (
    <ul>
      {colorSelected.map((colorSel, index) => {
        return (
          <li key={index}>
            <p>{colorSel} : </p>
            <p>
              <ColorPrice colorChoice={colorChoice} index={index} />
            </p>
          </li>
        );
      })}
    </ul>
  );
}

export default ColorSelection;

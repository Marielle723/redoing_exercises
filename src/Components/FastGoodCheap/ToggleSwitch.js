import React, { useState } from "react";

function ToggleSwitch(props) {
  const [checked, setChecked] = useState(false);
  console.log("checked " + checked);

  const handleChange = () => {
    if (props.label === "fast") {
      props.setFast(!props.fast);
      setChecked(!props.fast);
    } else if (props.label === "good") {
      props.setGood(!props.good);
      setChecked(!props.good);
    } else if (props.label === "cheap") {
      props.setCheap(!props.cheap);
    }
  };

  return (
    <div>
      <label className="toggle">
        {props.label}
        <input
          className="toggle-input"
          name="toggleSwitch"
          type="checkbox"
          value={checked}
          onChange={handleChange}
        />
        <div
          className="toggle-fill"
          style={{ backgroundColor: checked && `${props.color}` }}
        ></div>
      </label>
    </div>
  );
}

export default ToggleSwitch;

import React, { useState } from "react";

function ToggleSwitch({ label, checked, setChecked }) {
  // const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <div className="text-center maj bold">
      <label>
        <input
          type="checkbox"
          id="checkbox"
          checked={checked}
          onChange={handleChange}
        />
        {label}
      </label>
    </div>
  );
}

export default ToggleSwitch;

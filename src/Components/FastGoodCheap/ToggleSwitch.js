import React, { useState } from "react";

function ToggleSwitch({ label, checked, setChecked }) {
  // const [checked, setChecked] = useState(false);

  return (
    <div className="text-center maj bold">
      <label>
        <input
          type="checkbox"
          id="checkbox"
          value={checked}
          onChange={() => setChecked(!checked)}
        />
        {label}
      </label>
    </div>
  );
}

export default ToggleSwitch;

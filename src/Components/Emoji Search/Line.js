import React from "react";

function Line({ title, symbol, keywords }) {
  return (
    <div className="line">
      <p>
        <span>{symbol}</span>
        {title}
      </p>
    </div>
  );
}

export default Line;

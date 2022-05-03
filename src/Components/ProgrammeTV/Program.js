import React from "react";

function Program({ program }) {
  return (
    <main className="program">
      <p className="program-time">{program.time}</p>
      <img src={`${program.image}`} alt="tv program thumbnail" />
      <div className="program-details">
        <div className="program-title">
          <h3>{program.title}</h3>
          <p style={{ color: "#888" }}>{program.type}</p>
          <div className="program-timing">
            <p>{program.duration}</p>
            {program.direct && <p style={{ color: "fuchsia" }}>Direct</p>}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Program;

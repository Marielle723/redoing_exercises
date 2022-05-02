import React from "react";

function Programs({ programs }) {
  console.log(programs);
  return (
    <main>
      <ul>
        {programs.map((program, index) => {
          return <li>{program.time}</li>;
        })}
      </ul>
    </main>
  );
}

export default Programs;

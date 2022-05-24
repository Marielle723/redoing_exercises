import React, { useState } from "react";
import List from "./List";
import data from "./Data";

function BirthdayReminder() {
  const [people, setPeople] = useState(data);

  return (
    <main className="br">
      <section className="container">
        <h3>{people.length} artists with saturn in the 5th house</h3>
        <List people={people} />
        <button onClick={() => setPeople([])}>clear all</button>
      </section>
    </main>
  );
}

export default BirthdayReminder;

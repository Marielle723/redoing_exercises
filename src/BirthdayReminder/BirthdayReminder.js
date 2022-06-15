import React, { useState } from "react";
import List from "./List";
import data from "./Data";
import ArtistForm from "./ArtistForm";

function BirthdayReminder() {
  const [people, setPeople] = useState(data);
  const [artist, setArtist] = useState(false);

  return (
    <main className="br">
      <section className="container">
        <h3>{people.length} artists with saturn in the 5th house</h3>
        <List people={people} />
        <button onClick={() => setArtist(true)}>Add an Artist</button>
        {artist && (
          <ArtistForm
            artist={artist}
            setArtist={setArtist}
            people={people}
            setPeople={setPeople}
          />
        )}
      </section>
    </main>
  );
}

export default BirthdayReminder;

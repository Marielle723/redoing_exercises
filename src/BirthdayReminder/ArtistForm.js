import React, { useState } from "react";

function ArtistForm({ artist, setArtist, setPeople, people }) {
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [activity, setActivity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPeople = [...people];
    newPeople.push({
      id: newPeople.length + 1,
      name: name,
      dob: dob,
      activity: activity,
    });
    setPeople(newPeople);
  };

  console.log(people);

  return (
    <div className="artist-form">
      <p type="button" onClick={() => setArtist(false)} className="close-btn">
        X
      </p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Name:
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>

        <label htmlFor="dob">
          Date of Birth:
          <input
            type="date"
            id="dob"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
        </label>

        <label htmlFor="activity">
          Activity:
          <input
            type="textArea"
            id="activity"
            value={activity}
            onChange={(e) => setActivity(e.target.value)}
          />
        </label>

        <label htmlFor="picture">
          Picture:
          <input type="file" id="picture" />
        </label>
        <button className="submit-btn">Submit</button>
      </form>
    </div>
  );
}

export default ArtistForm;

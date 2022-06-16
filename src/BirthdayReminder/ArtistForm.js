import React, { useState } from "react";

function ArtistForm({ artist, setArtist, setPeople, people }) {
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [activity, setActivity] = useState("");
  const [image, setImage] = useState("");
  const [cloudImg, setCloudImg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPeople = [...people];
    newPeople.push({
      id: newPeople.length + 1,
      name: name,
      dob: dob,
      activity: activity,
      image: cloudImg,
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
          Picture from computer:
          <input
            type="file"
            id="picture"
            accept="image/*"
            value={image}
            onChange={(e) => setImage(e.target.files[0])}
          />
        </label>

        <label htmlFor="picture">
          Picture from cloud :
          <input
            type="text"
            id="cloudPic"
            value={cloudImg}
            onChange={(e) => setCloudImg(e.target.value)}
          />
        </label>

        <button className="submit-btn">Submit</button>
      </form>
    </div>
  );
}

export default ArtistForm;

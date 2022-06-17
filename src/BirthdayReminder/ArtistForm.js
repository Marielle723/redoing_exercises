import React, { useState } from "react";
import axios from "axios";

function ArtistForm({ artist, setArtist, setPeople, people }) {
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [activity, setActivity] = useState("");
  const [image, setImage] = useState("");
  const [cloudImg, setCloudImg] = useState("");
  const [fileImg, setFileImg] = useState(false);
  const [linkImg, setLinkImg] = useState(true);

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

  const handleFileImg = () => {
    setFileImg(!fileImg);
    setLinkImg(false);
  };

  const handleLinkImg = () => {
    setLinkImg(!linkImg);
    setFileImg(false);
  };

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
          <input
            type="checkbox"
            name="picChoice"
            id="file"
            checked={fileImg}
            onChange={handleFileImg}
          />
          Picture from computer:
          {fileImg && (
            <input
              type="file"
              id="picture"
              accept="image/*"
              value={image}
              onChange={(e) => setImage(e.target.files[0])}
            />
          )}
        </label>
        OU
        <label htmlFor="picture">
          <input
            type="checkbox"
            name="picChoice"
            id="link"
            checked={linkImg}
            onChange={handleLinkImg}
          />
          Picture from cloud :
          {linkImg && (
            <input
              type="text"
              id="cloudPic"
              value={cloudImg}
              onChange={(e) => setCloudImg(e.target.value)}
            />
          )}
        </label>
        <button className="submit-btn">Submit</button>
      </form>
    </div>
  );
}

export default ArtistForm;

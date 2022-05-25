import React from "react";

function ArtistForm({ artist, setArtist }) {
  const handleSubmit = () => {
    alert("Submit");
  };

  return (
    <div className="artist-form">
      <p type="button" onClick={() => setArtist(false)} className="close-btn">
        X
      </p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Name:
          <input type="text" id="name" />
        </label>

        <label htmlFor="dob">
          Date of Birth:
          <input type="date" id="dob" />
        </label>

        <label htmlFor="activity">
          Activity:
          <input type="textArea" id="activity" />
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

import React from "react";
import Card from "./Card";
import Cards from "./Cards";

function MatchingCard() {
  return (
    <div className="memGame-container">
      <h1>Memory Game - React in Wonderland</h1>
      {/* <div className="container">hello</div> */}
      <Cards />
    </div>
  );
}

export default MatchingCard;

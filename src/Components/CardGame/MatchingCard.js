import React from "react";
import Card from "./Card";

const cardList = [
  { title: "Inventor", num: 1 },
  { title: "Inventor", num: 2 },
  { title: "Scenarist", num: 1 },
  { title: "Scenarist", num: 2 },
  { title: "Writer", num: 1 },
  { title: "Writer", num: 2 },
  { title: "Dancer", num: 1 },
  { title: "Dancer", num: 2 },
  { title: "Creative Technologist", num: 1 },
  { title: "Creative Technologist", num: 2 },
];

function MatchingCard() {
  return (
    <>
      <h1>Matching Card Game</h1>
      <div className="cardGame">
        {cardList.map((card, index) => {
          const { title, num } = card;
          return <Card title={title} />;
        })}
      </div>
    </>
  );
}

export default MatchingCard;

import { toBeChecked } from "@testing-library/jest-dom/dist/matchers";
import React, { useState } from "react";
import Card from "./Card";

// Youtube video : https://www.youtube.com/watch?v=qhOZoJPMg6w&t=802s

function Cards() {
  const [items, setItems] = useState(
    [
      { id: 1, img: "/img/As of heart.png", stat: "" },
      { id: 1, img: "/img/As of heart.png", stat: "" },
      { id: 2, img: "/img/Cup of tea.png", stat: "" },
      { id: 2, img: "/img/Cup of tea.png", stat: "" },
      { id: 3, img: "/img/Hat.png", stat: "" },
      { id: 3, img: "/img/Hat.png", stat: "" },
      { id: 4, img: "/img/Key.png", stat: "" },
      { id: 4, img: "/img/Key.png", stat: "" },
      { id: 5, img: "/img/mushroom.png", stat: "" },
      { id: 5, img: "/img/mushroom.png", stat: "" },
      { id: 6, img: "/img/Potion.png", stat: "" },
      { id: 6, img: "/img/Potion.png", stat: "" },
      { id: 7, img: "/img/tea time.png", stat: "" },
      { id: 7, img: "/img/tea time.png", stat: "" },
      { id: 8, img: "/img/time.png", stat: "" },
      { id: 8, img: "/img/time.png", stat: "" },
      { id: 9, img: "/img/cupcake.png", stat: "" },
      { id: 9, img: "/img/cupcake.png", stat: "" },
    ].sort(() => Math.random() - 0.5)
  );

  const [prev, setPrev] = useState(-1);

  function check(current) {
    if (items[current].id == items[prev].id) {
      items[current].stat = "correct";
      items[prev].stat = "correct";
      setItems([...items]);
      setPrev(-1);
    } else {
      items[current].stat = "wrong";
      items[prev].stat = "wrong";
      setItems([...items]);
      setTimeout(() => {
        items[current].stat = "";
        items[prev].stat = "";
        setItems([...items]);
        setPrev(-1);
      }, 1000);
    }
  }

  function handleClick(id) {
    if (prev === -1) {
      items[id].stat = "active";
      setItems([...items]);
      setPrev(id);
    } else {
      check(id);
    }
  }

  return (
    <div className="cards-container">
      {items.map((item, index) => (
        <Card key={index} item={item} id={index} handleClick={handleClick} />
      ))}
    </div>
  );
}

export default Cards;

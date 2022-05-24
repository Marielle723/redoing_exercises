import React from "react";

function List({ people }) {
  return (
    <>
      {people.map((person) => {
        const { id, name, dob, activity, image } = person;
        return (
          <article key={id} className="person">
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>Date Of Birth : {dob}</p>
              <p>Métier : {activity}</p>
            </div>
          </article>
        );
      })}
    </>
  );
}

export default List;

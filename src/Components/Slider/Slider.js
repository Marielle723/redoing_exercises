import React, { useState, useEffect } from "react";
import moviedata from "./moviedata";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function Slider() {
  const [movies, setMovies] = useState(moviedata);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = movies.length - 1;

    if (index < 0) setIndex(lastIndex);
    if (index > lastIndex) setIndex(0);
  }, [index, movies]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => clearInterval(slider);
  }, [index]);

  return (
    <section className="section">
      <div className="title-center">
        <h2>Tim Burton Movies</h2>
      </div>

      <div className="slider-btn">
        <button className="prev" onClick={() => setIndex(index - 1)}>
          <FaChevronLeft />
        </button>

        <button className="next" onClick={() => setIndex(index + 1)}>
          <FaChevronRight />
        </button>
      </div>

      <div className="movie-section-center">
        {movies.map((movie, movieIndex) => {
          const { id, title, image, date, genre, duration, authors, synopsis } =
            movie;

          let position = "nextSlide";
          if (movieIndex === index) {
            position = "activeSlide";
          }
          if (
            movieIndex === index - 1 ||
            (index === 0 && movieIndex === movies.length)
          ) {
            position = "lastSlide";
          }
          return (
            <article className={position} key={id}>
              <img src={image} alt={title} className="movie-img" />
              <h4>{title}</h4>
              <div>
                <p>{genre}</p>
                <p>{duration}</p>
                <p>{date}</p>
              </div>
              <p>{synopsis}</p>
              <p>{authors}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Slider;

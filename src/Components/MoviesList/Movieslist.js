import React from "react";
import Moviecard from "../Moviecard/Moviecard";
import "./movieslist.css";

const Movielist = ({ movies, textFilter , starsRate }) => {
  return (
    <div className="movies">
      {movies
        .filter(
          (movie) =>
            movie.rate >= starsRate &&
            movie.title.toLowerCase().includes(textFilter.toLowerCase())
        )
        .map((movie) => (
          <Moviecard movie={movie} key={movie.id} />
        ))}
    </div>
  );
};

export default Movielist;

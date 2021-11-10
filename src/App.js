import "./App.css";
import { useState, useEffect } from "react";
import Filter from "./Components/Filter/Filter";
import Movielist from "./Components/MoviesList/Movieslist";
import NavBar from "./Components/NavBar/NavBar";
import { data } from "./data.js";

function App() {
  const [textFilter, setTextFilter] = useState("");

  useEffect(() => {
    alert("Welcome to my first movie website, have fun!");
  }, []);

  const [movies, setMovies] = useState(data);
  const [starsRate, setStarsRate] = useState(0);

  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  return (
    <div>
      <NavBar addMovie={addMovie} />
      <Filter setTextFilter={setTextFilter} setStarsRate={setStarsRate}/>
      <Movielist movies={movies} textFilter={textFilter} starsRate={starsRate} />
    </div>
  );
}

export default App;

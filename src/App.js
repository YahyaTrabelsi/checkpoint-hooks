import "./App.css";
import { useState , useEffect } from "react";
import Filter from "./Components/Filter/Filter";
import Movielist from "./Components/MoviesList/Movieslist";
import NavBar from "./Components/NavBar/NavBar";
import { data } from "./data.js";
import Moviecard from "./Components/Moviecard/Moviecard";
import Moviedetails from "./Components/Moviedetails/Moviedetails";
import {Route} from "react-router-dom"
function App() {
  
const [textFilter, setTextFilter] = useState("")
const [starsRate, setStarsRate] = useState(0)


   useEffect(() => {
   alert("Welcome to my Movies Application, hope you enjoy my new website")
   }, [])

  const [movies, setMovies] = useState(data);
  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
    
  };

  return (
    <div className="app">
      
      <NavBar addMovie={addMovie}/>
      
      <Filter setTextFilter={setTextFilter} setStarsRate={setStarsRate}/>

    
      <Route
          exact
          path="/"
          render={() => (
            <Movielist movies={movies} textFilter={textFilter} starsRate={starsRate}/>

          )}
        />

        <Route
          exact
          path="/movie/moviedetails/:myid"
          render={(defaultProps) => (
            <Moviedetails {...defaultProps} movies={movies} />
          )}
        />
     
      
    
    </div>


  );
}

export default App;
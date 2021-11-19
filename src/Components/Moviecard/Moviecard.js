import "./moviecard.css";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

function Moviecard({ movie }) {
  return (
    <div className="movie">
      <Link to={`/movie/moviedetails/${movie.id}`}>

      <img className="photo-css" width="250" src={movie.photo} alt="" />

      </Link>
      <h2> {movie.title} </h2>


      <ReactStars edit={false} value={movie.rate} size={20} />
    </div>
  );
}

export default Moviecard;
import "./moviecard.css";
import ReactStars from "react-rating-stars-component";

function Moviecard({ movie }) {
  return (
    <div className="movie">
      <img className="photo-css" width="250" src={movie.photo} alt="" />
      <h2 className="title-css"> {movie.title} </h2>

      <ReactStars edit={false} value={movie.rate} size={15} />
    </div>
  );
}

export default Moviecard;

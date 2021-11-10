import React from "react";
import "./filter.css";
import ReactStars from "react-rating-stars-component";

const Filter = ({ setTextFilter, setStarsRate }) => {
  return (
    <div className="body">
      <form action="" class="search-bar">
        <input
          type="search"
          name="search"
          pattern=".*\S.*"
          required
          onChange={(e) => setTextFilter(e.target.value)}
        />
        <button class="search-btn" type="submit">
          <span>Search</span>
        </button>
      </form>

      <ReactStars size="35" onChange={(e) => setStarsRate(e)} />
    </div>
  );
};

export default Filter;

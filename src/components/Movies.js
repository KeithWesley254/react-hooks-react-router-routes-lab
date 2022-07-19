import React from "react";
import { movies } from "../data";

function Movies() {
  const myMovies = movies.map((movie) => {
    return(
      <div key={movie.title}>
        <p style={{fontWeight: "bold", fontSize:"large"}}>Name: {movie.title}</p>
        <p> Time: {movie.time}</p>
        <p>Genres:</p>
        <ul>{movie.genres.map((genre) => <li key={genre}>{genre}</li>)}</ul>
      </div>
    )
  })
  return (
    <div>
      <h1>Movies Page</h1>
      {myMovies}
    </div>
  )
}

export default Movies;

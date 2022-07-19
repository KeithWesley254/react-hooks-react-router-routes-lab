import React from "react";
import { directors } from "../data";

function Directors() {
  const myDirectors = directors.map((director) => {
    return(
      <div key={director.name}>
        <p style={{fontWeight: "bold", fontSize:"large"}}>{director.name}</p>
        <p>Movies:</p>
        <ul>{director.movies.map((movie) => <li key={movie}>{movie}</li>)}</ul>
      </div>
    )
  })
  return (
    <div>
      <h1>Directors Page</h1>
      {myDirectors}
    </div>
  )
}

export default Directors;

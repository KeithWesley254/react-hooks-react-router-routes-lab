import React from "react";
import { actors, movies } from "../data";

function Actors() {
  const myActors = actors.map((actor) => {
    return(
      <div key={actor.name}>
        <p style={{fontWeight: "bold", fontSize:"large"}}>{actor.name}</p>
        <p>Movies:</p>
        <ul>{actor.movies.map((movie) => <li key={movie}>{movie}</li>)}</ul>
      </div>
    )
  })
  return (
    <div>
      <h1>Actors Page</h1>
      {myActors}
    </div>
  )
}

export default Actors;

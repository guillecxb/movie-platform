import React, { useState, useEffect } from "react";

export function ShowMovies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/film/")
      .then((response) => response.json())
      .then((data) => setMovies(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h2>Available movies:</h2>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <h3>{movie.name}</h3>
            <p>Director: {movie.director}</p>
            <p>Year: {movie.year}</p>
            <p>Score: {movie.score}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
import React, { useState, useEffect } from "react";
import { useRef } from "react";
import { useMovies } from "../hooks/useMovies";
import { Movies } from "./Movies";

// useRef es un hook que crea una referencia mutable qu epersiste durante toda la vida del componente

export function UpdateMovies() {
  //if (event && event.preventDefault) { event.preventDefault(); }
  //event.preventDefault()
  // http://localhost:8000/film/search?name=The%20Shawshank%20Redemption
  //const url = "http://localhost:8000/film/search";

  const { movies } = useMovies();
  const inputRef = useRef();

  const handleSubmit = (event) => {
    if (event && event.preventDefault) {
      event.preventDefault();
    }
    const fields = Object.fromEntries(new window.FormData(event.target));
    console.log(fields);
    
    // En fields.nameSearch tengo el nombre de lo introducido
    //console.log(fields.nameSearch)

    const requestOptions = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: fields.nameSearch, director: fields.directorSearch, year: fields.yearSearch, score: fields.scoreSearch})
    }

    fetch('http://localhost:8000/film/update', requestOptions)
        .then(response => response.json())
        .then(data => console.log(data))
  };

  return (
    <div>
      <h2 className="center-text">Update movie</h2>
      <form className="addForm" onSubmit={handleSubmit}>
        <input name="nameSearch" placeholder="Name" />
        <input name="directorSearch" placeholder="Director" />
        <input name="yearSearch" placeholder="Year" />
        <input name="scoreSearch" placeholder="Score" />
        <button onClick={() => window.location.reload()} type="submit">Update</button>
      </form>
    </div>
  );
}
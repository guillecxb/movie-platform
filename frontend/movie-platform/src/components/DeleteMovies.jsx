import React, { useState, useEffect } from "react";
import { useRef } from "react";
import { useMovies } from "../hooks/useMovies";
import { Movies } from "./Movies";

// useRef es un hook que crea una referencia mutable qu epersiste durante toda la vida del componente

export function DeleteMovies() {
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
    console.log(fields.nameSearch);
    
    // En fields.nameSearch tengo el nombre de lo introducido
    //console.log(fields.nameSearch)
    // la peticion hay que hacerla http://localhost:8000/film/delete/peli
    fetch(`http://localhost:8000/film/delete/${fields.nameSearch}`, { method: "DELETE" })
        .then(response => response.json())
        .then(data => console.log(data))

    }

  return (
    <div>
      <h2 className="center-text">Delete movie</h2>
      <form className="addForm" onSubmit={handleSubmit}>
        <input name="nameSearch" placeholder="Name" />
        <button onClick={() => window.location.reload()} type="submit">Delete </button>
      </form>
    </div>
  );
}

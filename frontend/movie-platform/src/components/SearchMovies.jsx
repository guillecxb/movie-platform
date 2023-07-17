import React from "react";
import { useState } from 'react' 
import { useMovies } from "../hooks/useMovies";
import { Movies } from "./Movies";

// useRef es un hook que crea una referencia mutable qu epersiste durante toda la vida del componente

export function SearchMovies() {
  const [movies, setMovies] = useState([]);

  const handleSubmit = (event) => {
    if (event && event.preventDefault) { event.preventDefault(); }
    const fields = Object.fromEntries(new window.FormData(event.target))
    console.log(fields)

  
    const name = fields.nameSearch ? fields.nameSearch : 'random';
    const director = fields.directorSearch ? fields.directorSearch : 'random';
    const year = fields.yearSearch ? fields.yearSearch : '0';
    const score = fields.scoreSearch ? fields.scoreSearch : '9';   



    const request = new Request(`http://localhost:8000/film/search2?name=${name}&director=${director}&year=${year}&score=${score}`);

    fetch(request)
      .then(response => response.json())
      .then(data =>  setMovies(data));
  }

  return (
    <div>
      <h2 className='center-text'>Search movie</h2>
      <form className='addForm' onSubmit={handleSubmit}>
        <input name='nameSearch' placeholder="Name"/>
        <input name='directorSearch' placeholder="Director"/>
        <input name='yearSearch' placeholder="Year"/>
        <input name='scoreSearch' placeholder="Score [1-5]"/>
        <button type="submit">Search</button>
      </form>
      <main>
        <Movies movies={movies}/>
      </main>
    </div>
  )
}
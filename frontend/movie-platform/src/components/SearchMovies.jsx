import React from "react";
import { useState } from "react";
import { Movies } from "./Movies";

export function SearchMovies() {
  // State variable to store the search results
  const [movies, setMovies] = useState([]);

  // Function executed when the form is submitted
  const handleSubmit = (event) => {
    if (event && event.preventDefault) {
      event.preventDefault();
    }
    const fields = Object.fromEntries(new window.FormData(event.target));

    // Extracting values from form fields, using default values if empty
    const name = fields.nameSearch ? fields.nameSearch : null;
    const director = fields.directorSearch ? fields.directorSearch : null;
    const year = fields.yearSearch ? fields.yearSearch : null;
    const score = fields.scoreSearch ? fields.scoreSearch : null;

    // Constructing the request URL with search parameters
    // `http://localhost:8000/film/search?name=${name}&director=${director}&year=${year}&score=${score}`
    const request = new Request(
      `http://localhost:8000/films/${name}/${director}/${year}/${score}`
    );
    // Sending the HTTP request to search for movies
    fetch(request)
      .then((response) => response.json())
      .then((data) => setMovies(data));
  };

  return (
    <div>
      <h2 className="center-text">Search movie</h2>
      <form className="addForm" onSubmit={handleSubmit}>
        <input name="nameSearch" placeholder="Name" />
        <input name="directorSearch" placeholder="Director" />
        <input name="yearSearch" placeholder="Year" />
        <input name="scoreSearch" placeholder="Score [1-5]" />
        <button type="submit">Search</button>
      </form>
      <main>
        <Movies movies={movies} />
      </main>
    </div>
  );
}

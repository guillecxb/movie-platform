import React from "react";

export function AddMovies() {
  // Function executed when the form is submitted
  const handleSubmit = (event) => {
    if (event && event.preventDefault) {
      event.preventDefault();
    }
    const fields = Object.fromEntries(new window.FormData(event.target));

    // HTTP request options
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: fields.nameSearch,
        director: fields.directorSearch,
        year: fields.yearSearch,
        score: fields.yearSearch,
      }),
    };

    // Sending the HTTP request to add the movie
    fetch("http://localhost:8000/film/add", requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  return (
    <div>
      <h2 className="center-text">Add movie</h2>
      <form className="addForm" onSubmit={handleSubmit}>
        <input name="nameSearch" placeholder="Name" />
        <input name="directorSearch" placeholder="Director" />
        <input name="yearSearch" placeholder="Year" />
        <input name="scoreSearch" placeholder="Score [1-5]" />
        <button onClick={() => window.location.reload()} type="submit">
          Add
        </button>
      </form>
    </div>
  );
}

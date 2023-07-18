import React from "react";

export function UpdateMovies() {
  // Function executed when the form is submitted
  const handleSubmit = (event) => {
    if (event && event.preventDefault) {
      event.preventDefault();
    }
    const fields = Object.fromEntries(new window.FormData(event.target));

    // Configuring the request options for the update request
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: fields.nameSearch,
        director: fields.directorSearch,
        year: fields.yearSearch,
        score: fields.scoreSearch,
      }),
    };

    // Sending the update request to the server
    fetch("http://localhost:8000/films", requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  return (
    <div>
      <h2 className="center-text">Update movie</h2>
      <form className="addForm" onSubmit={handleSubmit}>
        <input name="nameSearch" placeholder="Name" />
        <input name="directorSearch" placeholder="Director" />
        <input name="yearSearch" placeholder="Year" />
        <input name="scoreSearch" placeholder="Score [1-5]" />
        <button onClick={() => window.location.reload()} type="submit">
          Update
        </button>
      </form>
    </div>
  );
}

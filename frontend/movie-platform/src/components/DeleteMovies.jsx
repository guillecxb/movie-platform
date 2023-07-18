import React from "react";

export function DeleteMovies() {
  // Function executed when the form is submitted
  const handleSubmit = (event) => {
    if (event && event.preventDefault) {
      event.preventDefault();
    }
    const fields = Object.fromEntries(new window.FormData(event.target));

    // Sending the HTTP request to delete the movie
    fetch(`http://localhost:8000/film/delete/${fields.nameSearch}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  return (
    <div>
      <h2 className="center-text">Delete movie</h2>
      <form className="addForm" onSubmit={handleSubmit}>
        <input name="nameSearch" placeholder="Name" />
        <button onClick={() => window.location.reload()} type="submit">
          Delete{" "}
        </button>
      </form>
    </div>
  );
}

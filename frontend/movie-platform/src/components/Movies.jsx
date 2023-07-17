function ListrOfMovies({ movies }) {
  // Render a list of movies
  return (
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
  );
}

function NoMoviesResults() {
  // Render a message when no movies are available
  return <p>No hay peliculas</p>;
}

export function Movies({ movies }) {
  const hashMovies = movies?.length > 0;

  // Render either the list of movies or a message based on the presence of movies
  return hashMovies ? <ListrOfMovies movies={movies} /> : <NoMoviesResults />;
}

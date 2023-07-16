function ListrOfMovies({ movies }) {
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
    ) 
}

function NoMoviesResults() {
    return (<p>No hay peliculas</p>)
}

export function Movies({ movies }) {
    const hashMovies = movies?.length > 0

    return (
        hashMovies
        ? <ListrOfMovies movies={movies} />
        : <NoMoviesResults />
    )
}
    


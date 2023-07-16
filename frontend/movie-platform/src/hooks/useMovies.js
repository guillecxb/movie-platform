import results from '../mocks/searchedFilms.json'
import noResults from '../mocks/noResults.json'

//este custom Hook es el que se preocupa de hacer el fetching de datos la pelicula y demás
export function useMovies () {

    const mappedMovies = results?.map(movie => ({
        id: movie.id,
        name: movie.name,
        director: movie.director,
        year: movie.year,
        score: movie.score
    }))

    return { movies: mappedMovies }
}
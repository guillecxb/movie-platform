import './App.css'
import { ShowMovies } from './components/ShowMovies'
import { SearchMovies } from './components/SearchMovies'
import { AddMovies } from './components/AddMovies'
import { DeleteMovies } from './components/DeleteMovies'
import { UpdateMovies } from './components/UpdateMovies'

function App() {
  return (
    <>
      <header>
        <h1>Movie Platform</h1>
      </header>

      <div className='page'>
        {/* PRIMERA COLUMNA */}
        <div>
          <ShowMovies />
        </div>

        {/* SEGUNDA COLUMNA */}
        <div>
          <SearchMovies />
        </div>

        {/* TERCERA COLUMNA */}
        <div>
          <AddMovies /> 
          <DeleteMovies />
          <UpdateMovies />
        </div>
        <div className='div' />
      </div></>
  )
}

export default App

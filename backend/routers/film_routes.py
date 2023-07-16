from fastapi import APIRouter, HTTPException
from typing import Optional, List
from models.film import Film
from repositories.film_repository import query_get, query_put, query_delete

router= APIRouter(prefix="/film")

films_list = [Film(id=1 ,name="El señor de los Anillos", director="Peter Jackson", year=2002, score=5), 
              Film(id=2 ,name="Titanic", director="James Cameron", year=1997, score=4), 
              Film(id=3 ,name="Barbie", director="Greta Gerwig", year=2023, score=2)]

@router.get("/")
async def get_films():
    return query_get("""SELECT * FROM film""", ())

@router.post("/add")
def add_film(film: Film):
    #reapsar lo del id a ver como hacerlo automatico
    query_put("""INSERT INTO film (name, director, year, score)
    VALUES (%s, %s, %s, %s)""", (film.name, film.director, film.year, film.score))
    return {"message": "Película añadida correctamente"}

@router.delete("/delete/{film_name}")
def delete_film(film_name: str):
    query_delete("""DELETE FROM film WHERE name = %s;""", film_name)
    return {"message": "Película eliminada correctamente"}

@router.put("/update")
def update_film(film: Film):
    query_put("""UPDATE film SET director = %s, year = %s, score = %s WHERE name=%s;""",
              (film.director, film.year, film.score, film.name))
    return {"message": "Película actualizada correctamente"}

#http://localhost:8000/film/search?name=The%20Shawshank%20Redemption
@router.get("/search1")
async def get_films(name: Optional[str] = None, director: Optional[str] = None, year: Optional[int] = None, score: Optional[int] = None):
    if name is not None:
        return query_get("""SELECT * FROM film WHERE name LIKE %s""", (name))

@router.get("/search")
async def search_films(film: Film):    
    # Build the base SQL query
    query = """SELECT * FROM film WHERE 1=1"""
    
    # Add conditions based on the provided values
    params = []
    if film.name is not None:
        query += " AND name LIKE %s"
        params.append('%' + film.name + '%')
    if film.director is not None:
        query += " AND director LIKE %s"
        params.append('%' + film.director + '%')
    if film.year is not None:
        query += " AND year LIKE %s"
        params.append('%' + film.year + '%')
    
    return query_put(query, ())
    
    




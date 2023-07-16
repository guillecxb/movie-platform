from pydantic import BaseModel

class Film(BaseModel):
    name: str
    director: str
    year: str
    score: str
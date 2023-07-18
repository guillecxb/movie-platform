import unittest
from fastapi.testclient import TestClient
import pytest
from main import app

class FilmAPITest(unittest.TestCase):
    def setUp(self):
        self.client = TestClient(app)

    def test_get_films(self):
        response = self.client.get("/film/")
        self.assertEqual(response.status_code, 200)  # Verifica que la respuesta sea exitosa

    def test_add_film(self):
        film_data = {
            "name": "Film Name",
            "director": "Director Name",
            "year": "2023",
            "score": "8.5"
        }
        response = self.client.post("/film/add", json=film_data)
        self.assertEqual(response.status_code, 200)  # Verifica que la respuesta sea exitosa

    def test_delete_film(self):
        film_name = "Film Name"
        response = self.client.delete(f"/film/delete/{film_name}")
        self.assertEqual(response.status_code, 200)  # Verifica que la respuesta sea exitosa

    def test_update_film(self):
        film_data = {
            "name": "Film Name",
            "director": "New Director",
            "year": "2024",
            "score": "9.0"
        }
        response = self.client.put("/film/update", json=film_data)
        self.assertEqual(response.status_code, 200)  # Verifica que la respuesta sea exitosa

    def test_get_films_search(self):
        params = {
            "name": "Film Name",
            "director": "Director Name",
            "year": "2023",
            "score": "8.5"
        }
        response = self.client.get("/film/search", params=params)
        self.assertEqual(response.status_code, 200)  # Verifica que la respuesta sea exitosa

@pytest.fixture
def client():
    return TestClient(app)

def test_get_films_xxxxxx(client):
    response = client.get("/film/")
    assert response.json() == []
    assert response.status_code == 200


def some_test():
    assert 1 == 1
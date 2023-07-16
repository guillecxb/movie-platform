from fastapi import FastAPI
from routers import film_routes as films
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

#url local: http://localhost:8000/
#url swagger: http://localhost:8000/docs
#url redoc: http://localhost:8000/redoc

# Routers
app.include_router(films.router)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/health")
async def health_endpoint():
    return {"status":"healthy"}

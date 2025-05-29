from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from monitor import get_packets

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/api/packets")
def read_packets():
    return get_packets()

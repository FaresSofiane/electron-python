from fastapi import FastAPI
import api_model
import os

HOST = "127.0.0.1"
PORT = 7777

app = FastAPI()

from fastapi.middleware.cors import CORSMiddleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Autorisez toutes les origines
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/hello/{name}")
def read_root(name: str):
    return f"hello {name}"

@app.post("/open-explorer/")
def open_explorer(model: api_model.PathModel):

    os.startfile(model.path)

    return f"Opening {model.path}"

if __name__ == "__main__":
    import asyncio
    import uvicorn

    loop = asyncio.new_event_loop()
    asyncio.set_event_loop(loop)

    loop.run_until_complete(uvicorn.run(app, host=HOST, port=PORT))

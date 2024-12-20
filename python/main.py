from fastapi import FastAPI, WebSocket, WebSocketDisconnect
import api_model
import os
import io
import contextlib

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

@app.post("/interpretor/")
def interpretor(model: api_model.PyIntModel):
    try:
        exec_globals = {}  # placeholder for capturing globals within exec

        with io.StringIO() as buf, contextlib.redirect_stdout(buf):
            exec(model.value, {}, exec_globals)
            output = buf.getvalue()

        return {"result": output}
    except Exception as e:
        return {"error": str(e)}



@app.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    await websocket.accept()
    try:
        while True:
            data = await websocket.receive_text()
            if data == "ping":
                await websocket.send_text("pong")
            else:
                await websocket.send_text("Invalid message")
    except WebSocketDisconnect:
        print("Client disconnected")

if __name__ == "__main__":
    import asyncio
    import uvicorn

    loop = asyncio.new_event_loop()
    asyncio.set_event_loop(loop)

    loop.run_until_complete(uvicorn.run(app, host=HOST, port=PORT))
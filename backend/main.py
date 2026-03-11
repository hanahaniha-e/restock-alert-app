from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class Item(BaseModel):
    url: str

@app.post("/add")
def add(item: Item):
    return {"status": "monitoring", "url": item.url}

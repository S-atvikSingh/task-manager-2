<<<<<<< HEAD
from pydantic import BaseModel

class Task(BaseModel):
    id: int
    title: str
    description: str
=======
from pydantic import BaseModel

class Task(BaseModel):
    id: int
    title: str
    description: str
>>>>>>> 0e919e6d34092fb1dc33a0a35cdd58cba4df98b9
    completed: bool = False
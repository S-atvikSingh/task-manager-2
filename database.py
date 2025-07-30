<<<<<<< HEAD
import json

FILENAME = "tasks.json"

def read_tasks():
    try:
        with open(FILENAME, "r") as f:
            return json.load(f)
    except FileNotFoundError:
        return []

def save_tasks(tasks):
    with open(FILENAME, "w") as f:
        json.dump(tasks, f, indent=2)
=======
import json

FILENAME = "tasks.json"

def read_tasks():
    try:
        with open(FILENAME, "r") as f:
            return json.load(f)
    except FileNotFoundError:
        return []

def save_tasks(tasks):
    with open(FILENAME, "w") as f:
        json.dump(tasks, f, indent=2)
>>>>>>> 0e919e6d34092fb1dc33a0a35cdd58cba4df98b9

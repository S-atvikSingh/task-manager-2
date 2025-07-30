# task-manager-2

# Task Manager

A full-stack task management application built with FastAPI (Python) for the backend and React with Bootstrap for the frontend.

---

## Features

- Create, read, update, and delete tasks
- Toggle task completion status
- Edit both the task title and description
- Persist data to a local `tasks.json` file
- Responsive UI using Bootstrap
- Error handling and loading indicators

---

## Tech Stack

- **Python 3.10+**
- **FastAPI**
- **Pydantic**
- **Uvicorn** (development server)
- **Git & GitHub** for version control
- **React**
- **Bootstrap**


## Getting Started

**Backend**
1. **Clone the repo**

```bash
git clone https://github.com/your-username/task-manager-2.git
cd task-manager
```

2. **Install dependencies**

```bash
pip install -r requirements.txt
```

3. **Run the server**

```bash
uvicorn app.main:app --reload
```

4. **Open API docs**

Go to: [http://127.0.0.1:8000/docs](http://127.0.0.1:8000/docs)

---

**Frontend**
1. **Open a new terminal:**

```bash
cd task-manager-frontend
```

2. **Install frontend dependencies:**

```bash
npm install
```

3. **Run the React app:**

```bash
npm run dev
```

Frontend runs on: http://localhost:5173
## Contributing

Feel free to fork this repo, try new features, and create pull requests!

---

## Resources

* [FastAPI Docs](https://fastapi.tiangolo.com/)
* [Pydantic Docs](https://docs.pydantic.dev/)
* [Uvicorn Docs](https://www.uvicorn.org/)
* [GitHub Docs](https://docs.github.com/en/get-started)
* [React Docs](https://react.dev/)
---

## License

This project is licensed under the MIT License.


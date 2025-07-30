import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/tasks';

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({ title: '', description: '' });
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchTasks = async () => {
    try {
      setLoading(true);
      const res = await axios.get(API_URL);
      setTasks(res.data);
      setError('');
    } catch (err) {
      setError('Error fetching tasks');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleInputChange = (e) => {
    setNewTask({ ...newTask, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingTaskId !== null) {
        const taskToUpdate = tasks.find(t => t.id === editingTaskId);
        await axios.put(`${API_URL}/${editingTaskId}`, {
          id: editingTaskId,
          title: newTask.title,
          description: newTask.description,
          completed: taskToUpdate ? taskToUpdate.completed : false,
        });
        setEditingTaskId(null);
      } else {
        await axios.post(API_URL, { ...newTask, completed: false });
      }
      setNewTask({ title: '', description: '' });
      setError('');
      fetchTasks();
    } catch (err) {
      setError('Error saving task');
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setError('');
      fetchTasks();
    } catch (err) {
      setError('Error deleting task');
    }
  };

  const toggleCompletion = async (task) => {
    try {
      await axios.put(`${API_URL}/${task.id}`, {
        id: task.id,
        title: task.title,
        description: task.description,
        completed: !task.completed,
      });
      setError('');
      fetchTasks();
    } catch (err) {
      setError('Error updating task');
    }
  };

  const handleEditClick = (task) => {
    setNewTask({ title: task.title, description: task.description });
    setEditingTaskId(task.id);
    setError('');
  };

  const handleCancelEdit = () => {
    setNewTask({ title: '', description: '' });
    setEditingTaskId(null);
    setError('');
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Task Manager</h2>

      {error && <div className="alert alert-danger">{error}</div>}

      <form onSubmit={handleSubmit} className="mb-4">
        <div className="row g-2">
          <div className="col-md-4">
            <input
              type="text"
              name="title"
              className="form-control"
              placeholder="Title"
              value={newTask.title}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="col-md-5">
            <input
              type="text"
              name="description"
              className="form-control"
              placeholder="Description"
              value={newTask.description}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="col-md-3 d-flex">
            <button type="submit" className="btn btn-primary me-2 flex-grow-1">
              {editingTaskId !== null ? 'Update Task' : 'Add Task'}
            </button>
            {editingTaskId !== null && (
              <button
                type="button"
                className="btn btn-secondary"
                onClick={handleCancelEdit}
              >
                Cancel
              </button>
            )}
          </div>
        </div>
      </form>

      {loading ? (
        <div>Loading tasks...</div>
      ) : (
        <ul className="list-group">
          {tasks.map((task) => (
            <li
              key={task.id}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              <div>
                <h5>{task.title}</h5>
                <p className="mb-1">{task.description}</p>
                <span
                  className={
                    task.completed
                      ? 'badge bg-success'
                      : 'badge bg-warning text-dark'
                  }
                >
                  {task.completed ? 'Completed' : 'Pending'}
                </span>
              </div>
              <div>
                <button
                  className="btn btn-sm btn-info me-2"
                  onClick={() => handleEditClick(task)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-sm btn-success me-2"
                  onClick={() => toggleCompletion(task)}
                >
                  Toggle
                </button>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => handleDelete(task.id)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TaskList;

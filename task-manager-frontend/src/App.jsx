import React from 'react';
import TaskList from './components/TaskList';

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Task Manager</h1>
      <TaskList />
    </div>
  );
}

export default App;

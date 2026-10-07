import { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, name: "Learn HTML", status: "Completed" },
    { id: 2, name: "Learn CSS", status: "In Progress" }
  ]);

  const [task, setTask] = useState("");

  const addTask = () => {
    if (task === "") {
      alert("Enter a task");
      return;
    }

    setTasks([
      ...tasks,
      {
        id: Date.now(),
        name: task,
        status: "In Progress"
      }
    ]);

    setTask("");
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((item) => item.id !== id));
  };

  return (
    <div className="app">

      <h1>Task Manager</h1>

      <h2>Add Task</h2>

      <input
        type="text"
        placeholder="Enter task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button onClick={addTask}>
        Add Task
      </button>

      <h2>Task Dashboard</h2>

      <table>
        <thead>
          <tr>
            <th>Task</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {tasks.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.status}</td>
              <td>
                <button
                  onClick={() => deleteTask(item.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}

export default App;
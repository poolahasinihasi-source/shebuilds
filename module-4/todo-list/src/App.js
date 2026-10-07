import { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    "Learn HTML",
    "Learn CSS"
  ]);

  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (newTodo.trim() === "") {
      alert("Please enter a To Do");
      return;
    }

    setTodos([...todos, newTodo]);
    setNewTodo("");
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter(
      (_, i) => i !== index
    );

    setTodos(updatedTodos);
  };

  return (
    <div className="app">

      {/* Add To Do Page */}

      <h1>To DO List App</h1>

      <div className="add-section">
        <h2>Add To Do</h2>

        <div className="input-section">
          <label>To Do List</label>

          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
        </div>

        <button onClick={addTodo}>
          Add To Do
        </button>
      </div>


      {/* To Do Dashboard */}

      <h1 className="todo-title">
        To Do List
      </h1>

      <h2 className="dashboard-title">
        To Do List Dashboard
      </h2>

      <table>

        <thead>
          <tr>
            <th>ToDo</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>

          {todos.map((todo, index) => (
            <tr key={index}>

              <td>{todo}</td>

              <td>
                <button
                  onClick={() => deleteTodo(index)}
                >
                  Delete
                </button>
              </td>

            </tr>
          ))}

        </tbody>

      </table>

      <button
        className="add-todolist"
        onClick={() => {
          document.querySelector("input").focus();
        }}
      >
        Add Todolist
      </button>

    </div>
  );
}

export default App;
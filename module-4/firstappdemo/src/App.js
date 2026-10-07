import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");

  return (
    <div className="app">

      <h1>My First React App</h1>

      <p>Welcome to First App Demo</p>

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={() => alert("Hello " + name)}>
        Click Me
      </button>

      {name && (
        <h2>Hello, {name}! 👋</h2>
      )}

    </div>
  );
}

export default App;
import React, { useState } from "react";
import "./App.css";
// import 'antd/dist/reset.css';
import TodoForm from "./Components/TodoForm";
import TodoList from "./Components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <TodoForm todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
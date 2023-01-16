import React, { useState } from 'react';
import './App.css';
// import 'antd/dist/reset.css';
import TodoForm from "./Components/TodoForm"


function App() {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState("")

  return (
    <div className="App">
      <TodoForm input={input} setInput={setInput} />
    </div>
  );
}

export default App;

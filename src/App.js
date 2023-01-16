import React, { useState } from 'react';
import './App.css';
// import 'antd/dist/reset.css';
import TodoForm from "./Components/TodoForm"


function App() {
  const [todos, setTodos] = useState([])

  const addTodos = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return
    }
    console.log("BB", todo)
    const newTodos = [todo, ...todos]
    console.log("CCC", newTodos)
    setTodos(newTodos)
  }

  const removeTodo = (todo) => {

  }


  return (
    <div className="App">
      <TodoForm todos={todos} setTodos={setTodos} addTodos={addTodos} />
    </div>
  );
}

export default App;

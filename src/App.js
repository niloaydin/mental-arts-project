import React, { useState } from 'react';
import './App.css';
// import 'antd/dist/reset.css';
import TodoForm from "./Components/TodoForm"
import TodoList from "./Components/TodoList"


function App() {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState("")


  const addTodos = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return
    }
    // console.log("BB", todo)
    const newTodos = [todo, ...todos]
    // console.log("CCC", newTodos)
    setTodos(newTodos)
  }

  const removeTodo = (id) => {
    const newTodoArray = [...todos].filter(todo => todo.id !== id)
    console.log("AMJAD", newTodoArray)
    setTodos(newTodoArray)
  }



  return (
    <div className="App">
      <TodoForm todos={todos} input={input} setInput={setInput} setTodos={setTodos} addTodos={addTodos} />
      <TodoList todos={todos} input={input} setInput={setInput} setTodos={setTodos} removeTodo={removeTodo} />
    </div>
  );
}

export default App;

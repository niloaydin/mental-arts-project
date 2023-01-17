import React, { useState } from 'react';
import './App.css';
// import 'antd/dist/reset.css';
import TodoForm from "./Components/TodoForm"
import EditTodoForm from "./Components/EditTodoForm"
import TodoList from "./Components/TodoList"


function App() {
  const [todos, setTodos] = useState([])
  const [editedTask, setEditedTask] = useState("")
  const [input, setInput] = useState("")
  const [isEditing, setIsEditing] = useState(false)


  const addTodos = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return
    }
    // console.log("BB", todo)
    const newTodos = [todo, ...todos]
    console.log("AAAA")
    setTodos(newTodos.sort((a, b) => a.time - b.time))
  }

  const removeTodo = (id) => {
    const newTodoArray = [...todos].filter(todo => todo.id !== id)
    console.log("AMJAD", newTodoArray)
    setTodos(newTodoArray)
  }

  const updateTask = (todo) => {
    setEditedTask(prev => prev.map(t => (
      t.id === todo.id ? { ...t, text: todo.text } : t
    )))
    //close the edit modal
  }

  const enterEditMode = (task) => {
    setEditedTask(task)
    setIsEditing(true)
  }



  return (
    <div className="App">
      {isEditing ?
        <EditTodoForm setIsEditing={setIsEditing} editedTask={editedTask} updateTask={updateTask} isEditing={isEditing} />
        :
        <TodoForm todos={todos} input={input} setInput={setInput} setTodos={setTodos} addTodos={addTodos} />
      }

      <TodoList todos={todos} input={input} setInput={setInput} setTodos={setTodos} removeTodo={removeTodo} editedTask={editedTask} updateTask={updateTask} enterEditMode={enterEditMode} />
    </div>
  );
}

export default App;

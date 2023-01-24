import React, { useState } from "react";
import { DragDropContext } from 'react-beautiful-dnd';
import "./App.css";
// import 'antd/dist/reset.css';
import TodoForm from "./Components/TodoForm";
import TodoList from "./Components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [isEditing, setIsEditing] = useState(false)
  const [completedTodos, setCompletedTodos] = useState([])

  const handleOnDragEnd = (result) => {
    const { source, destination } = result
    if (!destination) return;


    if (destination.droppableId === source.droppableId
      &&
      destination?.index === source?.index) { return };

    let add;
    let active = todos;
    let complete = completedTodos;


    if (source.droppableId === "ActiveTodos") {

      add = active[source.index]
      active.splice(source.index, 1);

    } else if (source.droppableId === "CompletedTodos") {

      add = complete[source.index]
      complete.splice(source.index, 1);

    }

    if (destination.droppableId === "ActiveTodos") {
      active.splice(destination.index, 0, add);
    } else {
      complete.splice(destination.index, 0, add);
    }

    setCompletedTodos(complete)
    setTodos(active)
  }

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <div className={!isEditing ? "App" : "App edited"}>
        <TodoForm todos={todos} setTodos={setTodos} />

        <TodoList todos={todos} setTodos={setTodos} completedTodos={completedTodos} setCompletedTodos={setCompletedTodos} isEditing={isEditing} setIsEditing={setIsEditing} />
      </div>
    </DragDropContext>
  );
}

export default App;
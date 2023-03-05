import React, { useState } from 'react'
import { DragDropContext } from 'react-beautiful-dnd'
import './App.css'
import TodoForm from './Components/TodoForm'
import TodoList from './Components/TodoList'

function App() {
	const [todos, setTodos] = useState([])
	const [isEditing, setIsEditing] = useState(false)
	const [completedTodos, setCompletedTodos] = useState([])

	// Implementation of the Drag feature
	const handleOnDragEnd = (result) => {
		const { source, destination } = result
		if (!destination) return

		// Change the todo and completed todo array according to the list that you drag from and drop at
		if (destination.droppableId === source.droppableId && destination?.index === source?.index) {
			return
		}

		let add
		let active = todos
		let complete = completedTodos

		// Delete the todo from todos array that you are dragging
		if (source.droppableId === 'ActiveTodos') {
			add = active[source.index]
			active.splice(source.index, 1)
			// Delete the todo from completedTodos array that you are dragging
		} else if (source.droppableId === 'CompletedTodos') {
			add = complete[source.index]
			complete.splice(source.index, 1)
		}
		//Add todo to the active todo list
		if (destination.droppableId === 'ActiveTodos') {
			active.splice(destination.index, 0, add)
			//Add todo to the completed todo list
		} else {
			complete.splice(destination.index, 0, add)
		}
		// Mutate states
		setCompletedTodos(complete)
		setTodos(active)
	}

	return (
		<div>
			<DragDropContext onDragEnd={handleOnDragEnd}>
				<div className={!isEditing ? 'App' : 'App edited'} data-testid="app_id">
					<TodoForm todos={todos} setTodos={setTodos} data-testid="todoForm" />
					<TodoList
						todos={todos}
						setTodos={setTodos}
						completedTodos={completedTodos}
						setCompletedTodos={setCompletedTodos}
						isEditing={isEditing}
						setIsEditing={setIsEditing}
						data-testid="todoList"
					/>
				</div>
			</DragDropContext>
		</div>
	)
}

export default App

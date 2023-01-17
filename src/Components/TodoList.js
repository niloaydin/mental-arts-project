import React from 'react'
import "./Css/TodoList.css"
import { Col, Row } from 'antd';
import TodoItem from "./TodoItem"



const TodoList = ({ todos, setTodos, removeTodo, enterEditMode }) => {

    // const updateTodo = (id, newValue) => {
    //     if (!newValue.text || /^\s*$/.test(newValue.text)) {
    //         return
    //     }

    //     setTodos(prev => prev.map(item => (item.id === id ? newValue : item)))
    // }

    return (
        <div className="todo_list_container">
            <Row>
                <Col span={10} offset={1} className="active_todo_board">
                    ACTIVE BOARD

                    <TodoItem todos={todos} removeTodo={removeTodo} enterEditMode={enterEditMode} />



                </Col>
                <Col span={10} offset={1} className="completed_todo_board"> Completed</Col>

            </Row>

        </div>
    )


}


export default TodoList
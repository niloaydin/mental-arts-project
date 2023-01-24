import React from "react";
import "./Css/TodoList.css";
import { Col, Row } from "antd";
import TodoItem from "./TodoItem";
import { Droppable } from 'react-beautiful-dnd';

const TodoList = ({ todos, setTodos, isEditing, setIsEditing, setCompletedTodos, completedTodos }) => {

    return (
        <div className="todo_list_container">
            <Row>
                <Col xs={{ span: 22, offset: 1 }} sm={{ span: 10, offset: 2 }} md={{ span: 8, offset: 3 }} lg={{ span: 8, offset: 3 }}
                    className="active_todo_board"
                >
                    <h1> ACTIVE</h1>
                    <Droppable droppableId="ActiveTodos">
                        {
                            (provided) => (
                                <div ref={provided.innerRef}
                                    {...provided.droppableProps}>

                                    {
                                        todos?.map((todo, index) => {

                                            return <TodoItem key={todo?.id} index={parseInt(index)} todo={todo} todos={todos} setTodos={setTodos} isEditing={isEditing} setIsEditing={setIsEditing} />
                                        })
                                    }
                                    {provided.placeholder}
                                </div>

                            )}
                    </Droppable>
                </Col>
                <Col xs={{ span: 22, offset: 1 }} sm={{ span: 10, offset: 1 }} md={{ span: 8, offset: 1 }} lg={{ span: 8, offset: 1 }} className="completed_todo_board">
                    <h1>COMPLETED</h1>
                    <Droppable droppableId="CompletedTodos">
                        {
                            (provided) => (
                                <div ref={provided.innerRef}
                                    {...provided.droppableProps}>
                                    {
                                        completedTodos?.map((completedTodo, index) => {
                                            return <TodoItem key={completedTodo?.id} index={parseInt(index)} todo={completedTodo} todos={completedTodos} setTodos={setCompletedTodos} isEditing={isEditing} setIsEditing={setIsEditing} />
                                        })
                                    }
                                    {provided.placeholder}
                                </div>
                            )}
                    </Droppable>
                </Col>
            </Row>
        </div >
    );
};

export default TodoList;
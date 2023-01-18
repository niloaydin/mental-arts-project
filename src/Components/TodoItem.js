import React, { useState } from "react";
import { Button, Card, Input, Modal, message, Popconfirm } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import "./Css/TodoItem.css";
import { Draggable } from 'react-beautiful-dnd';

const TodoItem = ({ todo, todos, setTodos, isEditing, setIsEditing, index }) => {
    const [input, setInput] = useState("");
    const [edit, setEdit] = useState({
        id: null,
    });





    const handleDelete = (id) => {

        const newTodoArray = [...todos].filter((todo) => todo.id !== id);
        setTodos(newTodoArray)
        message.success(`You've succesfully deleted the todo!`);

    };

    const updateTodo = () => {
        const editedTodoList = [...todos].map((todo) => {
            if (!input || /^\s*$/.test(input)) return todo;

            if (todo.id === edit.id) {
                return (todo = { ...todo, text: input });
            }
            return todo;
        });

        setTodos(editedTodoList);

    };

    const handleChange = (event) => {
        setInput(event.target.value);
    };

    const handleEdit = () => {

        updateTodo();
        setEdit({
            id: null,
        });
        setInput("");
        setIsEditing(false)

    };
    const triggerEdit = (todo) => {
        console.log("AAA", todo.id)
        setEdit({ id: todo.id })
        setIsEditing(true)
    }
    const handleCancel = () => {
        setIsEditing(false)
    };

    return (

        isEditing && (todo.id === edit.id)
            ?
            <div key={todo?.id}
                className="edit_modal" >

                <Modal title="Update the Todo!" open={isEditing} footer={[]} onCancel={handleCancel} className="deneme">
                    <Input.Group compact className="edit_form">
                        <Input
                            style={{ width: "60%" }}
                            defaultValue={todo.text}
                            onChange={handleChange}
                            className="edit_form input"
                        />

                        <Button type="primary" disabled={!input} style={{ width: "20%" }} onClick={handleEdit} className="edit_form button">
                            Edit
                        </Button>

                    </Input.Group>
                </Modal>

            </div >
            :
            <Draggable draggableId={todo?.id.toString()} index={parseInt(index)}>
                {
                    (provided) => (
                        <div key={todo.id} className="todo_item_container" {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>

                            <Card className="todo_card">
                                <div className="todo_item">
                                    <span>
                                        {todo.text}
                                    </span>

                                    <div className="todo_icons">
                                        <div>

                                            <Popconfirm title="Delete the todo"
                                                description="Are you sure to delete this todo?"
                                                onConfirm={() => handleDelete(todo?.id)}
                                                okText="Yes"
                                                cancelText="No">
                                                <DeleteOutlined
                                                    style={{ fontSize: "20px", color: "rgba(210, 73, 35, 1)" }}
                                                    className="todo_icons delete"


                                                />
                                            </Popconfirm>



                                        </div>

                                        <div>
                                            <EditOutlined
                                                style={{ fontSize: "20px", color: "#05c3d9" }}
                                                onClick={() => triggerEdit(todo)}

                                            />
                                        </div>
                                    </div>
                                </div>


                            </Card>

                        </div>
                    )
                }

            </Draggable>
    )



};

export default TodoItem;
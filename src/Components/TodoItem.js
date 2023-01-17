import React, { useState } from "react";
import { Button, Card, Input } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

const TodoItem = ({ todos, setTodos }) => {
    const [input, setInput] = useState("");
    const [edit, setEdit] = useState({
        id: null,
    });

    const handleDelete = (id) => {
        const newTodoArray = [...todos].filter((todo) => todo.id !== id);
        setTodos(newTodoArray);
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
    };

    return todos.map((todo) => {
        if (todo.id === edit.id) {
            return (
                <React.Fragment key={todo.id}>
                    <Input.Group compact>
                        <Input
                            style={{ width: "50%" }}
                            defaultValue={todo.text}
                            onChange={handleChange}
                        />
                        <Button type="primary" onClick={handleEdit}>
                            Edit
                        </Button>
                    </Input.Group>
                </React.Fragment>
            );
        }
        return (
            <React.Fragment key={todo.id}>
                <Card style={{ width: "95%", margin: "10px 0px 10px 0px" }}>
                    {todo.text}
                    <DeleteOutlined
                        onClick={() => handleDelete(todo.id)}
                        style={{ marginLeft: "30px", size: "40px" }}
                    />
                    <EditOutlined
                        style={{ marginLeft: "30px", size: "40px" }}
                        onClick={() => {
                            setEdit({ id: todo.id });
                        }}
                    />
                </Card>
            </React.Fragment>
        );
    });
};

export default TodoItem;
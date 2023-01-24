import React, { useState } from "react";
import { Input, Button, Form } from "antd";
import "./Css/TodoForm.css";

const TodoForm = ({ todos, setTodos }) => {

    const [input, setInput] = useState("");
    const [form] = Form.useForm();

    const addTodos = (todo) => {
        if (/^\s*$/.test(todo.text)) return;
        const newTodos = [todo, ...todos];
        setTodos(newTodos);
    };

    const handleChange = (event) => {
        setInput(event.target.value);
    };

    const handleSubmit = () => {
        addTodos({
            id: Math.floor(Math.random() * 10000),
            text: input,
            time: Date.now(),
        });
        setInput("")
    };

    return (
        <div className="todo_form_container">
            <Form form={form} layout="vertical">
                <Input.Group compact className="todo_form_input_button">
                    <Input
                        placeholder="Add Todo"
                        allowClear
                        value={input}
                        onChange={handleChange}
                        className="todo_form_input_button input"
                    />
                    <Button disabled={!input} type="primary" onClick={handleSubmit} className="todo_form_input_button button">
                        Submit
                    </Button>
                </Input.Group>
            </Form>
        </div>
    );
};

export default TodoForm;
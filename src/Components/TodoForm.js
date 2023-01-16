import React, { useState } from 'react'
import { Input, Button, Form } from 'antd';
import "./Css/TodoForm.css"
import TodoList from "./TodoList"

const TodoForm = ({ todos, setTodos, addTodos }) => {
    const [input, setInput] = useState("")
    const [form] = Form.useForm();

    const handleChange = (event) => {
        setInput(event.target.value)
    }

    const handlesubmit = (text) => {
        return addTodos({
            id: Math.floor(Math.random() * 10000), text: input
        })
    }
    return (
        <div className='todo_form_container'>
            <Form form={form} layout="vertical">
                <Input.Group compact>
                    <Input style={{ width: '50%' }} placeholder="Add Todo" allowClear value={input} onChange={handleChange} />
                    <Button type="primary" onClick={handlesubmit}> Submit</Button>
                </Input.Group>
            </Form>

            <TodoList todos={todos} setTodos={setTodos} />
        </div>
    )
}

export default TodoForm
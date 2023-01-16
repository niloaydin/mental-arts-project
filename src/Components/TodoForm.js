import React, { useState } from 'react'
import { Input, Button, Form } from 'antd';
import "./Css/TodoForm.css"
import TodoList from "./TodoList"

const TodoForm = ({ input, setInput, addTodos, submitUpdate }) => {


    const [form] = Form.useForm();


    const handleChange = (event) => {
        setInput(event.target.value)
    }


    const handleSubmit = (param) => {

        return addTodos({

            id: Math.floor(Math.random() * 10000), text: input, time: new Date()
        })

    }
    return (
        <div className='todo_form_container'>
            <Form form={form} layout="vertical">
                <Input.Group compact>
                    <Input style={{ width: '50%' }} placeholder="Add Todo" allowClear value={input} onChange={handleChange} />
                    <Button type="primary" onClick={handleSubmit}> Submit</Button>
                </Input.Group>
            </Form>


        </div>
    )
}

export default TodoForm
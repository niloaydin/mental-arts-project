import React from 'react'
import { Input, Button, Form } from 'antd';
import "./Css/TodoForm.css"


const TodoForm = ({ input, setInput, addTodos, setTodos }) => {

    const [form] = Form.useForm();


    const handleChange = (event) => {
        setInput(event.target.value)
    }


    const handleSubmit = (e) => {
        e.preventDefault()

        addTodos({

            id: Math.floor(Math.random() * 10000), text: input, time: Date.now()
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
import React from 'react'
import { Input, Button } from 'antd';
import "./Css/TodoForm.css"
import TodoList from "./TodoList"

const TodoForm = ({ input, setInput }) => {


    return (
        <div className='todo_form_container'>
            <Input.Group compact>
                <Input style={{ width: '50%' }} placeholder="Add Todo" allowClear value={input} onChange={(event) => setInput(event.target.value)} />
                <Button type="primary">Submit</Button>
            </Input.Group>
            <TodoList />
        </div>
    )
}

export default TodoForm
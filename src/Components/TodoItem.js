import React, { useState } from 'react'
import { Card, Input, Button } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import TodoForm from "./TodoForm"

const TodoItem = ({ todos, removeTodo, updateTodo, input, setInput }) => {
    const [edit, setEdit] = useState({
        id: null,
        text: "",
        time: null
    })

    const submitUpdate = (text) => {
        updateTodo(edit.id, text)
        setEdit({
            id: null,
            text: "",
            time: null,
        })
    }
    if (edit.id) {
        return (<Input.Group compact>
            <Input style={{ width: '50%' }} placeholder="Add Todo" allowClear value={input} onChange={(event) => setInput(event.target.value)} />
            <Button type="primary" onClick={submitUpdate}> Submit</Button>
        </Input.Group>
        )
    }

    return todos.map((todo) => (
        <div>

            <Card key={todo.id} style={{ width: "95%", margin: "10px 0px 10px 0px", }}> {todo.text} <DeleteOutlined onClick={() => removeTodo(todo.id)} style={{ marginLeft: "30px", size: "40px" }} /> <EditOutlined style={{ marginLeft: "30px", size: "40px" }} onClick={() => setEdit({ id: todo.id, text: todo.text, time: new Date() })} /></Card>
            {/* <Input.Group compact>
                    <Input style={{ width: '50%' }} placeholder="Add Todo" allowClear value={input} onChange={handleChange} />
                    <Button type="primary" onClick={() => console.log("geliorr")}> Submit</Button>
                </Input.Group> */}

        </div >
    ))
}


export default TodoItem
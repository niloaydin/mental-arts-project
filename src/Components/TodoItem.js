import React from 'react'
import { Card } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons'

const TodoItem = ({ todos, removeTodo, updateTask, editedTask, enterEditMode }) => {


    return todos.map((todo) => (
        <div>

            <Card key={todo.id} style={{ width: "95%", margin: "10px 0px 10px 0px", }}> {todo.text} <DeleteOutlined onClick={() => removeTodo(todo.id)} style={{ marginLeft: "30px", size: "40px" }} /> <EditOutlined style={{ marginLeft: "30px", size: "40px" }} onClick={() => enterEditMode(todo)} /></Card>
            {/* <Input.Group compact>
                    <Input style={{ width: '50%' }} placeholder="Add Todo" allowClear value={input} onChange={handleChange} />
                    <Button type="primary" onClick={() => console.log("geliorr")}> Submit</Button>
                </Input.Group> */}

        </div >
    ))
}


export default TodoItem
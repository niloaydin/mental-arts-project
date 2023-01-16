import React from 'react'
import { Card } from 'antd';

const TodoItem = ({ todo }) => {
    return (
        <div>
            <Card style={{ width: "95%", margin: "10px 0px 10px 0px", }}> {todo.text}</Card>
        </div >
    )
}

export default TodoItem
import React, { useState } from 'react'
import { Input, Button, Form, Modal } from 'antd';
import "./Css/TodoForm.css"


const EditTodoForm = ({ setIsEditing, isEditing, editedTask }) => {

    const [updatedTaskText, setUpdatedTaskText] = useState(editedTask.text)

    const [form] = Form.useForm();



    const handleChange = (event) => {
        setUpdatedTaskText(event.target.value)
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("ALOOO")
        updatedTaskText({ ...editedTask, text: updatedTaskText })

    }
    const handleOk = () => {
        setIsEditing(false);
    };
    const handleCancel = () => {
        setIsEditing(false);
    };
    return (
        <div className='todo_form_container' onClick={() => {
            console.log("geliorr")
        }}>
            <Modal title="Update Todo" open={isEditing}>
                <Form form={form} layout="vertical">
                    <Input.Group compact>
                        <Input style={{ width: '50%' }} placeholder="Update Todo" allowClear value={updatedTaskText} onChange={handleChange} />
                        <Button type="primary" onClick={handleSubmit}> Update</Button>
                    </Input.Group>
                </Form>
            </Modal>

        </div>
    )
}

export default EditTodoForm
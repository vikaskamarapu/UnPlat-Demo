import React from 'react'
import './TodoItem.css'

const TodoItem = ({ task, fTime, tTime, title, id }) => {
    return (
        <div className='todo-item'>
            <div className='todo-title'>{task}</div>
            {(title !== "Done") && <div className='todo-time'>{fTime} to {tTime}</div>}
        </div>
    )
}

export default TodoItem
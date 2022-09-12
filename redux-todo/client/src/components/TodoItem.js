import React from 'react'
import './TodoItem.css'
import editIcon from '../assests/Vector.png'

const TodoItem = ({ task, fTime, tTime, title, id }) => {
    return (
        <div className='todo-item'>
            <div className='todo-item-container'>
                <div className='todo-title'>{task}</div>
                {(title !== "Done") ? (<div className='todo-time'>{fTime} to {tTime}</div>) : (<div className='py-2'></div>)}
            </div>
            <div className='edit-action'>
                <img src={editIcon} height="10px" width="3px" ></img>
            </div>
        </div>
    )
}

export default TodoItem
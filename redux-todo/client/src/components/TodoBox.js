import React from 'react'
import DelIcon from '../assests/Frame.png'
import TodoItem from './TodoItem'
import './TodoBox.css'
import { useState } from 'react'
import Input from './Input'
import { useDispatch } from 'react-redux';
import { useDeleteTodoMutation } from '../services/todoservice'
import { useDeleteInProgMutation } from '../services/InProgressService'
import { useDeleteDoneMutation } from '../services/DoneService'


const TodoBox = ({ title, currentList }) => {

    const dispatch = useDispatch()
    const [modal, setModal] = useState(false);

    const [deleteTodo] = useDeleteTodoMutation();
    const [deleteInProg] = useDeleteInProgMutation();
    const [deleteDone] = useDeleteDoneMutation();

    const handleDeleteTodo = async (todoId) => {
        await deleteTodo(todoId)
    }
    const handleDeleteInProg = async (inprogId) => {
        await deleteInProg(inprogId)
    }
    const handleDeleteDone = async (doneId) => {
        await deleteDone(doneId)
    }

    const toggle = () => {
        setModal(!modal)
    }
    const handleDelete = () => {
        if (title === "ToDo List") {
            handleDeleteTodo(currentList[0].id);
        } else if (title === "In Progress") {
            handleDeleteInProg(currentList[0].id);
        } else {
            handleDeleteDone(currentList[0].id);
        }
    }
    return (
        <div className='todo-box'>
            <div className='todo-box-container'>
                <div className='box-header'>
                    <h5>{title}</h5>
                    <img src={DelIcon} height="14" width="14" className='action' onClick={handleDelete} />
                </div>
                {
                    currentList.map((items, index) => (
                        <TodoItem
                            title={title}
                            task={items.task}
                            fTime={items.fTime}
                            tTime={items.tTime}
                            id={items.id}
                            key={index}
                        />
                    ))
                }
            </div>
            <div className='todo-add'>
                <span className='add-btn' onClick={toggle}>+</span>
            </div>
            <Input modal={modal} toggle={toggle} title={title} />
        </div>
    )
}

export default TodoBox
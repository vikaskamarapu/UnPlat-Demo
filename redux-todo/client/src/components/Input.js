import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './Input.css';
import { useDispatch } from 'react-redux';
import { saveDone, saveInProg, saveTodo } from '../features/todoSlice';

const Input = ({ modal, toggle, title }) => {
    const [task, setTask] = useState('');
    const [fromTime, setFromTime] = useState('');
    const [toTime, setToTime] = useState('');

    const [fm, setFM] = useState(true);
    const [tm, setTM] = useState(false);
    const dispatch = useDispatch()

    const handleChange = (e) => {
        const { name, value } = e.target

        if (name === "task") {
            setTask(value)
        } else if (name === "fromTime") {
            setFromTime(value)
        } else {
            setToTime(value)
        }
    }

    const handleSave = (e) => {
        e.preventDefault()
        toggle();
        console.log(task, fromTime + (fm ? " AM" : " PM"), toTime + (fm ? " AM" : " PM"))
        let fTime = fromTime + (fm ? " AM" : " PM");
        let tTime = toTime + (fm ? " AM" : " PM");
        if (title === "ToDo List") {
            dispatch(saveTodo({
                task:task,
                fTime:fTime,
                tTime:tTime,
                id: Date.now()
            }))
        } else if (title === "In Progress") {
            dispatch(saveInProg({
                task: task,
                fTime: fTime,
                tTime: tTime,
                id: Date.now()
            }))
        } else {
            dispatch(saveDone({
                task: task,
                fTime: fTime,
                tTime: tTime,
                id: Date.now()
            }))
        }
    }

    return (
        <Modal isOpen={modal} toggle={toggle}>
            <form onSubmit={handleSave}>
                <ModalHeader toggle={toggle}><b>{title}</b></ModalHeader>
                <ModalBody>

                    <div className="form-group">
                        <label><b>Task</b></label>
                        <input type="text" className="form-control" value={task} onChange={handleChange} name="task" required />
                    </div>
                    <div className="form-group d-flex mt-3">
                        <div>
                            <label className='d-block'><b>From</b></label>
                            <input type="time" className="form-control" value={fromTime} onChange={handleChange} name="fromTime" required></input>
                            <div className='btn btn-secondary rounded-circle mx-3' onClick={() => { setFM(!fm) }}>{fm ? "AM" : "PM"}</div>
                        </div>
                        <div className='mx-5'>
                            <label className='d-block'><b>To</b></label>
                            <input type="time" className="form-control" value={toTime} onChange={handleChange} name="toTime" required></input>
                            <div className='btn btn-secondary rounded-circle mx-3' onClick={() => { setTM(!tm) }}>{tm ? "AM" : "PM"}</div>
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color='primary' type='submit'>ADD</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </form>
        </Modal>
    )
}

export default Input
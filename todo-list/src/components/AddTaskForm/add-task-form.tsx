/* eslint-disable max-lines-per-function */
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../../store/tasks-slice'
import './add-task-form.css'

const AddTaskForm: React.FC = () => {
    const dispatch = useDispatch()
    const [taskName, setTaskName] = useState<string>('')
    const handleSubmit = () => {
        if (taskName.trim() !== '') {
            dispatch(addTask(taskName))
            setTaskName('')
        }
    }
    return (
        <div>
            <input className='add-input'
                type='text'
                placeholder='Task name'
                value={taskName}
                maxLength={30}
                onChange={(event) => setTaskName(event.target.value)}
            />
            <button className='add-button' onClick={handleSubmit}>Add</button>
        </div>
    )
}

export default AddTaskForm

import React from 'react'
import './task-card.css'
import { useDispatch } from 'react-redux'
import { toggleTaskCompletion } from '../../store/tasks-slice'
interface Task {
    id: number;
    name: string;
    completed: boolean;
}

interface TaskCardProperties {
    task: Task;
}

const TaskCard: React.FC<TaskCardProperties> = ({ task }) => {
    const dispatch = useDispatch()
    const handleToggleCompletion = () => {
        dispatch(toggleTaskCompletion(task.id))
    }
    const taskStyle = {
        'textDecoration': task.completed ? 'line-through' : 'none',
    }
    return (
        <div className='task-card'>
            <p className='task-name' style={taskStyle} onClick={handleToggleCompletion}>{task.name}</p>
        </div>
    )
}

export default TaskCard

import React from 'react'
import './task-counter.css'
import { useSelector } from 'react-redux'
import { selectTasks } from '../../store/tasks-slice'

interface Task {
    id: number;
    name: string;
    completed: boolean;
}

const TaskCounter: React.FC = () => {
    const tasks: Task[] = useSelector(selectTasks)
    const completedTasks: number = tasks.filter((task) => task.completed).length
    const uncompletedTasks: number = tasks.length - completedTasks

    return (
        <div className='counter-container'>
            <p className='task-counter'>Completed tasks: {completedTasks}</p>
            <p className='task-counter'>Uncompleted tasks: {uncompletedTasks}</p>
        </div>
    )
}

export default TaskCounter

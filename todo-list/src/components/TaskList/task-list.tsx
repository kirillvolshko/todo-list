import React from 'react'
import TaskCard from '../TaskCard/task-card'
import { useSelector } from 'react-redux'
import { selectTasks } from '../../store/tasks-slice'

const TaskList: React.FC = () => {
    const tasks = useSelector(selectTasks)

    return (
        <ul>
            {tasks.map((task) => (
                <li key={task.id}>
                    <TaskCard task={task} />
                </li>
            ))}
        </ul>
    )
}
export default TaskList

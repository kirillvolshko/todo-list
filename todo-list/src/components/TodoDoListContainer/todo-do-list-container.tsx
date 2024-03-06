import React from 'react'
import AddTaskForm from '../AddTaskForm/add-task-form'
import FilterOptions from '../FilterOptions/filter-options'
import TaskList from '../TaskList/task-list'
import TaskCounter from '../TaskCounter/task-counter'

const TodoDoListContainer: React.FC = () => {
    return (
        <div>
            <AddTaskForm />
            <TaskCounter />
            <FilterOptions />
            <TaskList />
        </div>
    )
}

export default TodoDoListContainer

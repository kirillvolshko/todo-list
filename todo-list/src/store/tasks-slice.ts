/* eslint-disable no-shadow */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Task {
    id: number;
    name: string;
    completed: boolean;
}

interface TasksState {
    tasks: Task[];
    filter: string;
}

const initialState: TasksState = {
    'tasks': [],
    'filter': 'all',
}

const tasksSlice = createSlice({
    'name': 'tasks',
    initialState,
    'reducers': {
        'addTask': (state, action: PayloadAction<string>) => {
            const newTask: Task = {
                'id': state.tasks.length + 1,
                'name': action.payload,
                'completed': false,
            }
            state.tasks.push(newTask)
        },
        'setFilter': (state, action: PayloadAction<string>) => {
            state.filter = action.payload
        },
        'toggleTaskCompletion': (state, action: PayloadAction<number>) => {
            const task = state.tasks.find((task) => task.id === action.payload)
            if (task) {
                task.completed = !task.completed
            }
        },
    },
})

export const { addTask, setFilter, toggleTaskCompletion } = tasksSlice.actions

export const selectTasks = (state: { tasks: TasksState }) => {
    const { tasks, filter } = state.tasks
    if (filter === 'completed') {
        return tasks.filter((task) => task.completed)
    } return filter === 'current' ? tasks.filter((task) => !task.completed) : tasks
}

export default tasksSlice.reducer

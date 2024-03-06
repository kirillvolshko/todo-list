import { combineReducers } from '@reduxjs/toolkit'
import tasksReducer from './tasks-slice'

const rootReducer = combineReducers({
    'tasks': tasksReducer,
})

export default rootReducer

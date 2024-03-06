import React, { useState, useEffect } from 'react'
import './filter-options.css'
import { useDispatch } from 'react-redux'
import { setFilter } from '../../store/tasks-slice'

const FilterOptions: React.FC = () => {
    const dispatch = useDispatch()
    const [filter, SetFilter] = useState<string>('')
    useEffect(() => {
        dispatch(setFilter(filter))
    }, [filter])

    return (
        <div>
            <label className='filter-label'>Filter:</label>
            <select className='select-filter' onChange={(event) => SetFilter(event.target.value)}>
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="current">Current</option>
            </select>
        </div>
    )
}

export default FilterOptions

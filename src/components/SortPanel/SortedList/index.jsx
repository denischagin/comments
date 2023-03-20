import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { sortedCommentsBy } from '../../../store/slicers/commentsSlicer'
import classes from './style.module.css'

const SortedList = () => {
    const [active, setActive] = useState(false);
    const [selectValue, setSelectValue] = useState("Сначала новые")
    const dispatch = useDispatch();

    const clickHandlerSortedList = (e) => {
        setSelectValue(e.target.textContent)
        setActive(false);
        dispatch(sortedCommentsBy(e.target.getAttribute("value")))
    }
    return (
        
        <div className={classes.wrapper}>
            <p className={classes.title} onClick={() => setActive(prev => !prev)}>{selectValue}</p>
            <ul className={!active ? classes.sorted_list : [classes.sorted_list, classes.active].join(" ")} onClick={clickHandlerSortedList}>
                <li value="like/ASC" >По количеству оценок ↑</li>
                <li value="like/DESC">По количеству оценок ↓</li>
                <li value="date/ASC" >Сначала новые</li>
                <li value="date/DESC">Сначала старые</li>
            </ul>
        </div>
    )

}

export default SortedList
import React, { useMemo, useState } from 'react'
import classes from './style.module.css'
import { useSelector } from 'react-redux/es/exports';
import SortedList from './SortedList';
import SortPanelTitle from './SortPanelTitle';

const SortPanel = () => {
    return (
        <div className={classes.sort_panel}>
            <SortPanelTitle />
            <SortedList className={classes.sort_panel_item}/>
            <p className={classes.sort_panel_item}>Избранное</p>
        </div>
    )
}

export default SortPanel
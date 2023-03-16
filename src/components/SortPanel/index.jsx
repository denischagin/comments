import React, { useMemo, useState } from 'react'
import classes from './style.module.css'
import { useSelector } from 'react-redux/es/exports';
import SortedList from './SortedList';

const SortPanel = () => {
    const { comments } = useSelector(state => state.comments)
    const [sortedListActive, setSortedListActive] = useState(false);

    const commentsCount = useMemo(() => {
        let result = 0;
        comments.forEach((el) => {
            result++;
            result += el.commentsReply.length;
        })
        return result
    }, [comments])

    return (
        <div className={classes.sort_panel}>
            <p className={[classes.sort_panel_item, classes.active].join(' ')}>
                <span >Комментарии</span>
                <span className={classes.sort_panel_item_grey}>({commentsCount})</span>
            </p>
            <SortedList active={sortedListActive} setActive={setSortedListActive} className={classes.sort_panel_item}/>
            <p className={classes.sort_panel_item}>Избранное</p>
        </div>
    )
}

export default SortPanel
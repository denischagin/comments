import React, { useMemo } from 'react'
import classes from './style.module.css'
import { useSelector } from 'react-redux/es/exports';

const SortPanel = () => {
    const { comments } = useSelector(state => state.comments)

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
            <p className={classes.sort_panel_item}>По количеству оценок</p>
            <p className={classes.sort_panel_item}>Избранное</p>
        </div>
    )
}

export default SortPanel
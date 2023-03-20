import React, { useMemo } from 'react'
import { useSelector } from 'react-redux/es/exports';
import classes from './style.module.css'

const SortPanelTitle = () => {
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
        <p className={[classes.sort_panel_item, classes.active].join(' ')}>
            <span >Комментарии</span>
            <span className={classes.sort_panel_item_grey}>({commentsCount})</span>
        </p>
    )
}

export default SortPanelTitle
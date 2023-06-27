import React, { memo } from 'react'
import { useCommentTime } from './../../../hooks/useCommentTime';
import classes from "./style.module.css"
import { useDispatch } from 'react-redux';
import { decrementLike, incrementLike, inFavorites, removeComment } from '../../../store/slicers/commentsSlicer';

const Comment = function({ comment, isReply, onReply }) {
    const commentTime = useCommentTime(new Date(comment.time))
    const dispatch = useDispatch()

    const clickInFavoritesHandler = () => {
        dispatch(inFavorites(comment.id));
    }

    const clickMinusHandler = () => {
        dispatch(decrementLike(comment.id))
    }

    const clickPlusHandler = () => {
        dispatch(incrementLike(comment.id))
    }

    const clickDeleteHandler = () => {
        dispatch(removeComment(comment.id))
    }

    return (
        <div className={classes.comments_wrapper}>
            <img src="src\assets\cheek.jpg" className="icon" alt="" />
            <div className={classes.comments_column}>
                <div className={classes.comment_title}>
                    <p className='username'>
                        {comment.username}
                    </p>
                    <p>
                        {commentTime}
                    </p>
                </div>
                <p className={classes.comment_text}>
                    {comment.text}
                </p>

                <div className={classes.comment_panel}>
                    {!isReply && <button className={classes.reply_button} onClick={onReply}>Ответить</button>}
                    <button onClick={clickInFavoritesHandler}>
                        <span className={comment.inFavorites ? classes.in_favorites : null}>★</span> В избранном
                    </button>
                    <div className={classes.likes_wrapper}>
                        <button onClick={clickMinusHandler} className={classes.minus}>-</button>
                        <p>{comment.likes}</p>
                        <button onClick={clickPlusHandler} className={classes.plus}>+</button>
                    </div>
                    <button onClick={clickDeleteHandler}>Удалить</button>
                </div>
            </div>
        </div>
    )
}

export default React.memo(
    Comment,
    (oldProps, newProps) =>
        oldProps.comment.id === newProps.comment.id &&
        oldProps.comment.likes === newProps.comment.likes &&
        oldProps.comment.inFavorites === newProps.comment.inFavorites) 
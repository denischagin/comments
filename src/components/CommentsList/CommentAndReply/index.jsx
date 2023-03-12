import React from 'react'
import Comment from '../Comment'
import classes from './style.module.css'

const CommentAndReply = ({comment}) => {
  return (
    <div>
        <Comment comment={comment}/>
        <div className={classes.comments_reply_wrapper}>  
            {comment.commentsReply.map(commentReply => 
                <Comment key={commentReply.id} comment={commentReply} isReply/>
            )}
        </div> 
    </div>
  )
}

export default CommentAndReply
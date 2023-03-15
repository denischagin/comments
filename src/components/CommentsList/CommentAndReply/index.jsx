import React, { useState } from 'react'
import FormAddReply from './FormAddReply'
import Comment from '../Comment'
import classes from './style.module.css'

const CommentAndReply = ({comment}) => {
  const [addReplyOpen, setAddReplyOpen] = useState(false)
  
  const buttonReplyOpenClick = () => {
    setAddReplyOpen(true)
  }

  return (
    <div>
        <Comment comment={comment} onReply={buttonReplyOpenClick}/>
        
        <div className={classes.comments_reply_wrapper}>  
          {comment.commentsReply.map(commentReply => 
              <Comment key={commentReply.id} comment={commentReply} isReply/>
          )}
          {addReplyOpen && 
          <FormAddReply 
            closeForm={() => {setAddReplyOpen(false)}} 
            username={comment.username}
            commentId={comment.id}/>}
        </div> 
    </div>
  )
}

export default CommentAndReply
import React from 'react'
import { useSelector } from 'react-redux/es/exports'
import Comment from './Comment'
import CommentAndReply from './CommentAndReply'

const CommentsList = () => {
	const { comments } = useSelector(state => state.comments)
	
	return (
		<div>
			{comments.length !== 0
				? comments.map(comment =>
					<CommentAndReply key={comment.id} comment={comment} />
				)
				: <p>Комментариев нет</p>
			}
		</div>
	)
}

export default CommentsList
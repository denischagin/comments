import React, { useState, useRef, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addReply } from '../../../../store/slicers/commentsSlicer'
import classes from "./style.module.css"

const FormAddReply = ({ closeForm ,username, commentId }) => {
  const [value, setValue] = useState(username + ", ")
  const inputElementRef = useRef(null)
  const dispatch = useDispatch();
  
  useEffect(() => {
    inputElementRef.current.focus()
  }, [])

  const onChangeHandler = (e) => {
    setValue(e.target.value);
  }

  const onSubmitHandler = (e) => {
    e.preventDefault()
    closeForm();
    console.log(commentId)
    dispatch(addReply({
      newReply: {
        id: Date.now(),
        username: "Денис Чагин",
        text: value,
        inFavorites: false,
        time: Date.now(),
        likes: 0,
      },
      commentId,
    }))
  }


  return (
    <form 
      className={classes.comments_reply_form}
      >
        <button 
          className={classes.exit}
          onClick={closeForm}>x</button>
        <input 
              ref={inputElementRef}
              placeholder='Введите текст комментария...' 
              type='text'
              value={value}
              onChange={onChangeHandler}/>
        <button onClick={onSubmitHandler} type="button" className={classes.send}>➤</button>
    </form>
  )
}

export default FormAddReply
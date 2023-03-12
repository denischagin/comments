import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addComment } from '../../store/slicers/commentsSlicer'
import classes from './style.module.css' 

const FormAddComment = () => {
  const [value, setValue] = useState('')
  const dispatch = useDispatch()

  const changeHandler = e => {
    setValue(e.target.value)
  }

  const clickHandler = () => {
    if (value.length > 1000 || value === '') return
    const newComment = {
      id: Date.now(),
      username: "Денис Чагин",
      text: value,
      inFavorites: false,
      time: Date.now(),
      likes: 0,
      commentsReply: [],
    }
    dispatch(addComment(newComment))
    setValue('')
  }
  
  return (
    <div className={classes.form}>
      <div className={classes.form_img}>
        <img src="src\assets\cheek.jpg" className='icon' alt="" />
      </div>

      <div className={classes.input_wrapper}>
        <div className={classes.text_wrapper}>
          <p className='username'>Денис Чагин</p>
          <p className={
            value.length <= 1000
              ? classes.count_symbols
              : [classes.count_symbols, classes.error].join(' ')
          }>
            {
              value.length == 0
                ? "Макс. 1000 символов"
                : `${value.length}/1000`
            }
          </p>
        </div>

        <input 
          type="text" 
          name="comment" 
          placeholder='Введите текст сообщения...'
          value={value}
          onChange={changeHandler}/>
      </div>
      <button className={classes.send_button} onClick={clickHandler}>Отправить</button>
    </div>
  )
}

export default FormAddComment
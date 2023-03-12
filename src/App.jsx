import React from 'react'
import CommentsList from './components/CommentsList'
import SortPanel from './components/SortPanel/index';
import FormAddComment from './components/FormAddComment/index';
import "./App.css"

const App = () => {
  return (
    <div className='container'>
      <SortPanel />
      <FormAddComment />
      <CommentsList />
    </div>
  )
}

export default App
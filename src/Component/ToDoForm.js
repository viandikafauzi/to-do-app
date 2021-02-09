import React, { useState } from 'react'

const ToDoForm = (props) => {
  const [text, setText] = useState('')

  const submitForm = (e) => {
    e.preventDefault()

    props.onSubmit({ ToDoText: text })

    setText('')
  }

  return (
    <>
      <form onSubmit={submitForm}>
        <input
          type='text'
          className='formInput'
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></input>
        <button type='submit' className='formSubmit' onClick={submitForm}>
          Add
        </button>
      </form>
    </>
  )
}

export default ToDoForm

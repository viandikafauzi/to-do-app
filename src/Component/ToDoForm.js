import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

const ToDoForm = (props) => {
  const [text, setText] = useState('')

  const submitForm = (e) => {
    e.preventDefault()

    if (text === '') {
      alert('text cannot be empty')
    } else {
      props.onSubmit({ id: uuidv4(), ToDoText: text, isComplete: false })
    }

    setText('')
  }

  return (
    <>
      <form onSubmit={submitForm} className='formStyle'>
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

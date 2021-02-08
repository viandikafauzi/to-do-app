import React, { useState } from 'react'

const Input = () => {
  const [text, setText] = useState('')

  const submitForm = (e) => {
    e.preventDefault()
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
        <button type='submit' className='formSubmit'>
          Add
        </button>
      </form>
    </>
  )
}

export default Input

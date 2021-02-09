import React, { useState } from 'react'
import ToDoForm from '../Component/ToDoForm'
import ToDoItem from '../Component/ToDoItem'

const ToDoList = () => {
  const [todos, setTodos] = useState([])

  const addTodo = ({ ToDoText }) => {
    const newTodos = [ToDoText, ...todos]

    setTodos(newTodos)
    console.log(newTodos)
  }

  return (
    <div>
      <h1 className='judulUtama'>To Do List App</h1>
      <ToDoForm onSubmit={addTodo} />
      <ToDoItem todoitem={todos} />
    </div>
  )
}

export default ToDoList

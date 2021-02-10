import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import ToDoForm from '../Component/ToDoForm'
import ToDoItem from '../Component/ToDoItem'

const ToDoList = () => {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    const newTodos = [todo, ...todos]

    setTodos(newTodos)
  }

  const completeItem = (todo) => {
    const toggleComplete = todos.map((arr) => {
      if (arr.id === todo.id) {
        arr.isComplete = !arr.isComplete
      }
      return arr
    })
    setTodos(toggleComplete)
  }

  const removeItem = (todo) => {
    const deleteElement = todos.filter((arr) => {
      if (arr.id !== todo.id) {
        return true
      } else return false
    })
    setTodos(deleteElement)
  }

  return (
    <Container>
      <h1 className='judulUtama'>To Do List App</h1>
      <ToDoForm onSubmit={addTodo} />
      <ToDoItem
        todoitem={todos}
        completeItem={completeItem}
        removeItem={removeItem}
      />
    </Container>
  )
}

export default ToDoList

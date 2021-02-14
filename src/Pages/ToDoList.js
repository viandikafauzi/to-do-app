import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import ToDoForm from '../Component/ToDoForm'
import ToDoItem from '../Component/ToDoItem'

const ToDoList = () => {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    if (localStorage.getItem('savedtodo') === null) {
      setTodos([])
    } else {
      const load = JSON.parse(localStorage.getItem('savedtodo'))
      setTodos(load)
    }
  }, [])

  const addTodo = (todo) => {
    const newTodos = [todo, ...todos]

    setTodos(newTodos)
    localStorage.setItem('savedtodo', JSON.stringify(newTodos))
  }

  const completeItem = (todo) => {
    const toggleComplete = todos.map((arr) => {
      if (arr.id === todo.id) {
        arr.isComplete = !arr.isComplete
      }
      return arr
    })
    setTodos(toggleComplete)
    localStorage.setItem('savedtodo', JSON.stringify(toggleComplete))
  }

  const removeItem = (todo) => {
    const deleteElement = todos.filter((arr) => {
      if (arr.id !== todo.id) {
        return true
      } else return false
    })
    setTodos(deleteElement)
    localStorage.setItem('savedtodo', JSON.stringify(deleteElement))
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

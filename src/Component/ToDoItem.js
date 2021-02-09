import React from 'react'

const ToDoItem = ({ todoitem }) => {
  return todoitem.map((todo) => <div>{todo}</div>)
}

export default ToDoItem

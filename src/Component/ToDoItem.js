import React from 'react'
import { Col, Row } from 'react-bootstrap'

const ToDoItem = ({ todoitem, completeItem, removeItem }) => {
  return todoitem.map((todo, index) => (
    <div
      className={todo.isComplete ? 'itemTextComplete' : 'itemText'}
      key={index}
    >
      <Row>
        <col-1 className='itemCheckbox'>
          <input
            type='checkbox'
            onClick={() => completeItem(todo)}
            checked={todo.isComplete}
          ></input>
        </col-1>
        <Col className='alignLeft'>
          <span>{todo.ToDoText}</span>
        </Col>
        <col-1>
          <button onClick={() => removeItem(todo)}>
            <i className='far fa-trash-alt itemDelete'></i>
          </button>
        </col-1>
      </Row>
    </div>
  ))
}

export default ToDoItem

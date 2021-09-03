import React from 'react'
import { TodoContext } from '../TodoContext';
import './../styles/TodoCounter.scss';

function TodoCounter() {
  const { completedTodos, totalTodo } = React.useContext(TodoContext)
  return (

    <h2 className='TodoCounter'>Finished {completedTodos}/{totalTodo} of ToDo's</h2>

  )
}
export { TodoCounter };

import React from 'react'
import { TodoContext } from '../TodoContext';
import '../styles/TodoForm.scss'

function TodoForm({ setOpenModal }) {
  const [newTodoValue, setNewTodoValue] = React.useState('');
  const { addTodo, saveTodo } = React.useContext(TodoContext)


  const onCancel = () => {
    setOpenModal(false)

  };
  const onSubmit = (e) => {
    e.preventDefault();
    addTodo(newTodoValue)
    setOpenModal(false)
  };
  const onChange = (e) => {
    setNewTodoValue(e.target.value)

  }
  return (
    <form onSubmit={onSubmit}>
      <label>..</label>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        placeholder="Write your task.."
      />
      <div className="todoForm__buttons--container">
        <button
          className="todoForm__button todoForm__button--cancel"
          type="button" onClick={onCancel}>Cancel</button>
        <button
          className="todoForm__button todoForm__button--add"
          type="submit">Add</button>
      </div>
    </form>
  )
}

export { TodoForm }

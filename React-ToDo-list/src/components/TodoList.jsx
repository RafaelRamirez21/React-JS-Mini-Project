import React from 'react'
import TodoItem from './TodoItem'
import './../styles/TodoList.scss'
import { TodoContext } from '../TodoContext';
import MyLoader from './MyLoader';
import '../styles/MyLoader.scss'


function TodoList(props) {

  const { searchedTodos: todos, setError, setTodos, loading, error, saveTodos } = React.useContext(TodoContext)



  const completeTodos = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos)
  };
  const deleteTodos = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos)
  };





  return (
    <section className="TodoList__container">
      {loading && <ul className="containerLoading"> {new Array(4).fill().map((todo, index) => (<MyLoader key={index} />))}</ul>}

      {error && <p>Failure, hubo un error...</p>}
      {(!loading && !todos.length) && <p className="container__welcome">Make your first ToDO's</p>}
      <ul>
        {todos.map((todo, index) => (<TodoItem obj={todo} key={index} onCompleteTodos={() => completeTodos(todo.text)} onDeleteTodos={() => deleteTodos(todo.text)} />))}
      </ul>
    </section>
  )
}

export default TodoList

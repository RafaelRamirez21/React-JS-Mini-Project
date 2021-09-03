import React from 'react'
import { useLocalStorage } from './useLocalStorage';
const TodoContext = React.createContext();
function TodoProvider(props) {
  const {
    item: todos,
    loading,
    error,
    setItem: setTodos,
    setError,
    saveItem: saveTodos,
  } = useLocalStorage('TODOS_V1', []);

  // const localStorageTodos;

  const [searchValue, setSearchValue] = React.useState('');
  const completedTodos = todos.filter(todo => todo.completed).length;
  const totalTodo = todos.length;
  let searchedTodos = [];
  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  };
  const addTodo = (text) => {
    const newTodos = [...todos]
    newTodos.push({
      completed: false,
      text,
    });
    saveTodos(newTodos)
  }

  return (
    <TodoContext.Provider value={{
      totalTodo,
      completedTodos,
      searchValue,
      setSearchValue,
      searchedTodos,
      setTodos,
      loading,
      setError,
      error,
      todos,
      addTodo,
      saveTodos,
    }}>
      {props.children}
    </TodoContext.Provider>
  );
}
export { TodoContext, TodoProvider };
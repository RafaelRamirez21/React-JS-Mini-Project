import React from 'react';
import CreateTodoButton from '../components/CreateTodoButton';
import { Modal } from '../components/Modal';
import { TodoCounter } from '../components/TodoCounter';
import { TodoForm } from '../components/TodoForm';
import TodoList from '../components/TodoList';
import { TodoSearch } from '../components/TodoSearch';
import { TodoContext, TodoProvider } from '../TodoContext';
import { useLocalStorage } from '../TodoContext/useLocalStorage';
import './../styles/App.scss'


console.log(TodoProvider)

// const defaulTodos = [
//   {
//     text: 'Homework',
//     completed: true,
//   },
//   {
//     text: 'Math Assessment ',
//     completed: false,
//   },
//   {
//     text: 'Programming my webpage',
//     completed: false,
//   }

// ];


function App() {

  const [openModal, setOpenModal] = React.useState(false)
  return (
    <>
      <TodoProvider>

        <TodoCounter
        />
        <TodoSearch
        />
        <TodoList
        />

        {openModal && (
          <Modal>
            <TodoForm setOpenModal={setOpenModal} />
          </Modal>
        )}

        <CreateTodoButton
          setOpenModal={setOpenModal}
          openModal={openModal}

        />
      </TodoProvider>
    </>
  )
}

export default App


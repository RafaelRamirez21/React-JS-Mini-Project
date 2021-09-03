import React from 'react';
import { TodoContext } from '../TodoContext';
import './../styles/CreateTodoButton.scss';


function CreateTodoButton({ openModal, setOpenModal }) {


  return (

    <button className={`${openModal ? "CreateTodoButtonCloser" : "CreateTodoButton"}`} onClick={() => setOpenModal(prevState => !prevState)}>
      +
    </button>
  )
}

export default CreateTodoButton

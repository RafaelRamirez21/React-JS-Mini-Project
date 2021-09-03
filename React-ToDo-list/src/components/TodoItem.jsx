import React from 'react';
import './../styles/TodoItem.scss';
import { AiOutlineDelete } from "react-icons/ai";
import { BsCheckAll } from "react-icons/bs";


function TodoItem(props) {


  return (
    <li className="TodoItem">
      <span
        className={`Icon Icon-check ${props.obj.completed && 'Icon-check--active'}`}
        onClick={props.onCompleteTodos}
      >
        <BsCheckAll />
      </span>
      <p className={`TodoItem-p ${props.obj.completed && 'TodoItem-p--complete'}`}>
        {props.obj.text}
      </p>
      <span className="Icon Icon-delete"
        onClick={props.onDeleteTodos}
      >
        <AiOutlineDelete />
      </span>
    </li>
  )
}

export default TodoItem

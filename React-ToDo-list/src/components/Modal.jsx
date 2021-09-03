import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/ModalBackground.scss'
function Modal({ children }) {
  // console.log(children);
  return ReactDOM.createPortal(
    <div className="ModalBackground">
      {children}

    </div>,


    document.getElementById('modal')
  )
}

export { Modal }

import React, { useContext } from 'react'
import { ApiContext } from '../Context/ApiProvider'
import '../assets/styles/global.scss';
function Header() {
  const { darkMode, handleClick } = useContext(ApiContext);
  return (
    <div className={darkMode ? "Header" : 'Header darkMode'}>
      <h1 className={darkMode ? "" : 'darkModet'} >Rick and Morty API</h1>
      <button
        type="button"
        onClick={handleClick}
      >{darkMode ? 'Dark Mode' : 'Light Mode'}</button>

    </div>
  )
}

export default Header

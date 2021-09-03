import React from 'react'
import { TodoContext } from '../TodoContext';
import './../styles/TodoSearch.scss'

function TodoSearch() {

  const { searchValue, setSearchValue } = React.useContext(TodoContext)
  const onSearchValueChange = (e) => {
    setSearchValue(e.target.value);
    console.log(e.target.value);
  }
  return (
    <section className="TodoSearch__container">
      <input
        className="TodoSearch" type="text" placeholder="Search task"
        value={searchValue}
        onChange={onSearchValueChange}
      />

    </section>
  )
}

export { TodoSearch }

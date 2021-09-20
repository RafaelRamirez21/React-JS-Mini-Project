import React, { useContext, useMemo, useState } from 'react';
import { ApiContext } from '../Context/ApiProvider';
import CardCharacter from './CardCharacter';
import '../assets/styles/Cards.scss';
import { AiOutlineSearch } from 'react-icons/ai';


function Characters() {
  const { characters, darkMode, handleClickFav, favorites } = useContext(ApiContext);

  const [search, setSearch] = useState('')
  const handleSearch = (e) => {
    setSearch(e.target.value)
  }
  // const filterItem = characters.filter((user) => {
  //   return user.name.toLowerCase().includes(search.toLocaleLowerCase());
  // })
  const filterItem = useMemo(() =>
    characters.filter((user) => {
      return user.name.toLowerCase().includes(search.toLowerCase());
    }), [characters, search]
  )
  return (
    <>
      <div className={darkMode ? "Characters" : "Characters darkModes"}>
        <input className="input_search" type="text" value={search} onChange={handleSearch} placeholder=" Looking for a particular character.." />
        <AiOutlineSearch className="searchIcon" />
      </div>

      <div className={darkMode ? "Characters" : "Characters darkModes"}>


        {filterItem.map((character, index) => (
          <CardCharacter key={index} character={character} darkMode={darkMode} handleClickFav={handleClickFav} />

        ))}

      </div>
    </>
  )
}


export default Characters;

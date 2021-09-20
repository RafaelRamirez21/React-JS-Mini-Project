import '../assets/styles/Cards.scss';
import React, { useContext } from 'react';
import { ApiContext } from '../Context/ApiProvider';
import { AiFillStar } from 'react-icons/ai';


function CardCharacter({ character, darkMode, handleClickFav }) {

  return (
    <div className={darkMode ? "CardItem" : 'CardItem darkMode'}>
      <img className="Cards" src={character.image} alt={character.name} />

      <div className="info__card">
        <h2>{character.name}</h2>

        <div>
          <span className={character.status === 'Alive' ? 'green' : 'red'}></span>
          <span>{character.status}-{character.species}</span>
        </div>
        <p>Last Known location:</p>
        <p>{character.location.name}</p>
        <p>First seen in:</p>
        <p>{character.origin.name}</p>
        <button
          onClick={() => handleClickFav(character)}
          className="fav__button"><AiFillStar className="star" />
        </button>



      </div>

    </div>
  )
}

export default CardCharacter

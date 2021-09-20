import React, { useContext } from 'react';
import { ApiContext } from '../Context/ApiProvider';
import '../assets/styles/Fav_Card.scss';
import { AiFillStar } from 'react-icons/ai';

function FavoriteCharacters() {
  const { favorites, darkMode } = useContext(ApiContext)

  return (
    <>

      <div className={darkMode ? 'section_fav' : 'section_fav darkMode'}>
        <h2>Favorites<AiFillStar className="star" /></h2>
        {
          favorites.favorites.map((fav, index) => (
            <li className="fav_Card" key={index}>
              <img className="fav_img" src={fav.image} alt={fav.name} />
              {fav.name}
            </li>
          ))
        }
      </div>
    </>
  )
}

export default FavoriteCharacters

import React, { createContext, useState, useEffect, useReducer } from 'react';
import { useFetch } from '../useFetch'
const ApiContext = createContext();

function ApiProvider(props) {
  const [characters, setCharacters] = useState([]);
  const [locations, setLocations] = useState([])


  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character`)
      .then(res => res.json())
      .then(data => setCharacters(data.results))
  }, []);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/location`)
      .then(res => res.json())
      .then(data => setLocations(data.results))
  }, []);
  const [darkMode, setDarkMode] = useState(false);
  const handleClick = () => {
    setDarkMode(!darkMode);
  }

  const initialState = {
    favorites: []
  }
  const favoriteReducer = (state, action) => {
    switch (action.type) {
      case 'ADD_TO_FAVORITE':
        return {
          ...state,
          favorites: [...state.favorites, action.payload]
        };
      default:
        return state;
    }
  }





  const [favorites, dispatch] = useReducer(favoriteReducer, initialState);

  const handleClickFav = favorite => {
    dispatch({ type: 'ADD_TO_FAVORITE', payload: favorite })
  }

  return (
    <ApiContext.Provider
      value={{
        characters,
        locations,
        darkMode,
        handleClick,
        favorites,
        handleClickFav



      }}
    >
      {props.children}

    </ApiContext.Provider>
  );
};

export { ApiContext, ApiProvider }

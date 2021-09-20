import React, { useContext } from 'react';
import Characters from '../components/Characters';
import Header from '../components/Header';

import '../assets/styles/global.scss'
import FavoriteCharacters from '../components/FavoriteCharacters';
const App = () => {

  return (

    <>
      <Header />
      <FavoriteCharacters />
      <Characters />
    </>
  );
};


export default App;
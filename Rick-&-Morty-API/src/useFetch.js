import React, { useEffect, useState } from 'react';

function useFetch(properties) {

  const [dataItem, setDataItem] = useState([])
  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character`)
      .then(res => res.json())
      .then(data => setDataItem(data.results))
  }, []);



  return dataItem;
}

export { useFetch }
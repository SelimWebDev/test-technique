import { useState, useEffect } from 'react';

export function useFetchAnimeList(req) {
  let [data, setData] = useState([]);
  let [isLoaded, setIsLoaded] = useState(false) 

  const url = 'https://graphql.anilist.co',
  options = {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
      },
      body: JSON.stringify({
          query: req.query,
          variables: req.variables
      })
  };

  useEffect(() => {
    fetch(url, options).then((res) => res.json())
                  .then((data) => setData(data.data.Page.media))
                  .then(() => setIsLoaded(true))
                  .catch((error) => console.log(error));
  },[]);

  return {data, isLoaded};
}
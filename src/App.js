import fetch from 'node-fetch';
import { useEffect, useState } from 'react';

function App() {
  const [loading, setLoading] = useState(true);
  const [charactors, setCharactors] = useState();
  const getHeros = async () => {
    const url = 'https://superhero-search.p.rapidapi.com/api/heroes';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '84fb7214e5mshfd75b39b8ec6a69p1c7831jsn03870c73be4c',
        'X-RapidAPI-Host': 'superhero-search.p.rapidapi.com'
      }
    };

    try {
    	const response = await fetch(url, options);
    	const result = await response.json();
      setLoading(false);
      setCharactors(result);
    } catch (error) {
    	console.error(error);
    }
  }
  useEffect(() => {
    getHeros();
  }, []);
  console.log(charactors);
  return (
    <div>
      {loading ? <p>...</p> : (
          charactors.map((item) => (
          <li key={item.id}>
            <img src={item.images.sm} />
            <p>{item.name}</p>
            <p>{item.work.occupation}</p>
          </li>
        ))
      )}
    </div>
  )
}

export default App;

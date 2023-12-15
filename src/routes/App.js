import { useEffect, useState } from 'react';
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  useParams,
} from "react-router-dom";
import Charactor from './Charactor';

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
    return (
        <div>
          {loading ? <p>...</p> : (
              charactors.map((charactor) => (
                <Charactor key={charactor.id} id={charactor.id} images={charactor.images.sm} name={charactor.name} work={charactor.work.occupation}/>
            ))
          )}
        </div>
    )
}

export default App;

import { useState, useEffect, useContext } from 'react'
import SearchContext from '../context/ContextProvider'
import { last } from '../api/axios'

const Home = () => {
  const { context, setContext } = useContext(SearchContext);
  const [data, setData] = useState([]);
  const [search, setSearch] = useState(context.searchOne);

  const key = '784d1371b6825e063a825dae7e0d84db'

  const fetchData = () => {
    const ARTIST_URL = `/2.0/?method=chart.gettopartists&api_key=${key}&format=json&limit=200/`;
    last.get(ARTIST_URL)
    .then((res) => {
      setData(res.data.artists.artist);
    })
  };

  const drawItem = (item) => {
    if (item.name.toLowerCase().includes(context.searchOne.toLowerCase())){
    return (
      <tr key={item.name}>
        <td>{item.name}</td>
        <td>{item.playcount}</td>
        <td>{item.listeners}</td>
      </tr>
    )
    }
  }

  useEffect(() => {
    fetchData();
  }, [])

  const submitSearch = () => {
    setContext({searchOne: search, searchTwo: context.searchTwo, searchThree: context.searchThree})
  };

  const clearSearch = () => {
    setContext({searchOne: '', searchTwo: context.searchTwo, searchThree: context.searchThree});
    setSearch('');
  }

  return (
    <main>
      <div className='section-title'><h2>top artists</h2></div>
      <div className='search-area'>
        <label htmlFor='name'>artist name: </label>
        <input
          id='name'
          type='text'
          value={search}
          onChange={(e) => {setSearch(e.target.value)}}
        />
        <button onClick={submitSearch}>submit</button>
        <button onClick={clearSearch}>clear</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>playcount</th>
            <th>listeners</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => {
            return drawItem(item);
          })}
        </tbody>
      </table>
    </main>
  )
};

export default Home;
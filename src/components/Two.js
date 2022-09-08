import { useState, useEffect, useContext } from 'react'
import SearchContext from '../context/ContextProvider'
import { last } from '../api/axios'

const Two = () => {
  const { context, setContext } = useContext(SearchContext);
  const [data, setData] = useState([]);
  const [aSearch, setASearch] = useState('');
  const [tSearch, setTSearch] = useState('');

  const key = '784d1371b6825e063a825dae7e0d84db'

  const fetchData = () => {
    const TRACKS_URL = `/2.0/?method=chart.gettoptracks&api_key=${key}&format=json&limit=200/`;
    last.get(TRACKS_URL)
    .then((res) => {
      setData(res.data.tracks.track);
    });
  };

  const drawItem = (item) => {
    if ((item.artist.name.toLowerCase().includes(context.searchTwo.toLowerCase())) && (
        (item.name.toLowerCase().includes(context.searchThree.toLowerCase())))) {
    return (
      <tr key={item.name}>
        <td>{item.name}</td>
        <td>{item.artist.name}</td>
        <td>{item.playcount}</td>
        <td>{item.listeners}</td>
      </tr>
    )
    }
  };

  const submitSearch = () => {
    setContext({searchOne: context.searchOne, searchTwo: aSearch, searchThree: tSearch})
  };

  const clearSearch = () => {
    setContext({searchOne: context.searchOne, searchTwo: '', searchThree: ''});
    setASearch('');
    setTSearch('');
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <main>
      <div className='section-title'><h2>top tracks</h2></div>
      <div className='search-area'>
        <label htmlFor='name'>artist name: </label>
        <input
          id='name'
          type='text'
          value={aSearch}
          onChange={(e) => {setASearch(e.target.value)}}
        />
        <label htmlFor='track'>track name: </label>
        <input
          id='track'
          type='text'
          value={tSearch}
          onChange={(e) => {setTSearch(e.target.value)}}
        />
        <button onClick={submitSearch}>submit</button>
        <button onClick={clearSearch}>clear</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>artist</th>
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

export default Two;
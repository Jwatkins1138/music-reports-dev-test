import axios from 'axios'

//lastfm api url
const last = axios.create({
  baseURL: 'https://ws.audioscrobbler.com',
});

export { last };
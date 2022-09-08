import axios from 'axios'

//lastfm api url
const last = axios.create({
  baseURL: 'http://ws.audioscrobbler.com',
});

export { last };
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://json-server-swapi.herokuapp.com/',
});

export default api;

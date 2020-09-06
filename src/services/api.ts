import axios from 'axios';

const api = axios.create({
  baseURL: 'https://dddice.herokuapp.com',
});

export default api;

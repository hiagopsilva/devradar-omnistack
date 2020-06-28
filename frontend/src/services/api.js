import axios from 'axios';

const api = axios.create({
  baseURL: 'https://localiza-dev-backend.herokuapp.com'
});

export default api;
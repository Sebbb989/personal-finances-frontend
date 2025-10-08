import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000', // Adjust if backend runs on a different port
  withCredentials: true,
});

export default api;

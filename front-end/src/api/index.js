import axios from 'axios';

// https://pt.stackoverflow.com/q/365296/207241

const API = axios.create({
  baseURL: 'http://localhost:3001',
  headers: {
    'Content-type': 'application/json',
  },
});

const login = (user) => API.post('/login', user);

const register = (user) => API.post('/user/register', user);

const getAll = () => API.get('/products');

export default { login, register, getAll };

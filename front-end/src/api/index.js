import axios from 'axios';

// const loginUrl = 'http://localhost:3001/login';
// const registerUrl = 'http://localhost:3001/user/register';

const API = axios.create({
  baseURL: 'http://localhost:3001',
  headers: {
    'Content-type': 'application/json',
  },
});

const login = (user) => API.post('/login', user);

const register = (user) => API.post('/user/register', user);

export default { login, register };

// export const login = (user) => axios.post(loginUrl, user, config);

// export const register = (user) => axios.post(registerUrl, user, config);

// export const teste = (user) => axios.post(loginUrl, user, config);

import axios from 'axios';


const API = axios.create({
  baseURL: 'http://localhost:3001',
  headers: {
    'Content-type': 'application/json',
  },
});

const login = (user) => API.post('/login', user);

const register = (user) => API.post('/user/register', user);

export default { login, register };



// export const teste = (user) => axios.post(loginUrl, user, config);

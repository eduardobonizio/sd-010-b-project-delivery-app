import axios from 'axios';

const url = 'http://localhost:3001/';

const login = (user) => axios.post(`${url}login`, user);

const register = (newUser) => axios.post(`${url}register`, newUser);

export default { login, register };

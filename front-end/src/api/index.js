import axios from 'axios';

const url = 'http://localhost:3001/';

const login = (user) => axios.post(`${url}login`, user);

export default { login };

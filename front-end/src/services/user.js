import axios from 'axios';

const API_URL = 'http://localhost:3001/';

export const loginUser = (login) => axios.post(`${API_URL}login`, login);

export const createUser = (user) => axios.post(`${API_URL}register`, user);

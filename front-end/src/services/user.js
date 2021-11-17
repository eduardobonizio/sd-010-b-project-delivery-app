import axios from 'axios';

const apiUrl = 'http://localhost:3001';

export const loginUser = (login) => axios.post(`${apiUrl}/login`, login);

export const create = (user) => axios.post(`${apiUrl}/register`, user);

export const getUsers = () => axios.get(`${apiUrl}/register`);

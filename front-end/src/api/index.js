import axios from 'axios';

const url = 'http://localhost:3001/';

// const { token } = JSON.parse(localStorage.getItem('user')) || '';

const login = (user) => axios.post(`${url}login`, user);

const getDataUser = (email) => axios.get(`${url}custumer?email=${email}`);

const getAllProduts = () => axios.get(`${url}products`);

const register = (newUser) => axios.post(`${url}register`, newUser);

const getAllSellers = () => axios.get(`${url}users/sellers`);

const createSale = (requestObject, token) => axios.post(
  `${url}sales`,
  requestObject,
  { headers: { authorization: token } },
);

export default { login, register, getDataUser, getAllSellers, createSale, getAllProduts };
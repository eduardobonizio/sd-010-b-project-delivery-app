import axios from 'axios';


// https://pt.stackoverflow.com/q/365296/207241

const APIPOST = axios.create({
  baseURL: 'http://localhost:3001/',
  headers: {
    'Content-type': 'application/json',
  },
});

const APITOKEN = (token) => {
  const newApi = axios.create({
    baseURL: 'http://localhost:3001',
    headers: {
      'Content-type': 'application/json',
      Authorization: token,
    },
  });
  return newApi;
};

const fetchOrders = (token) => APITOKEN(token).get('/sale/user', {});

const createSale = (saleBody, token) => APITOKEN(token).post('/sale', saleBody);

const getAllProducts = () => APITOKEN().get('/products', {});

const login = (user) => APIPOST.post('/login', user);

const register = (user) => APIPOST.post('/user/register', user);

export default { fetchOrders, login, register, getAllProducts, createSale };

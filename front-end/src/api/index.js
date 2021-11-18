import axios from 'axios';

const APIṔOST = axios.create({
  baseURL: 'http://localhost:3001',
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

const login = (user) => APIṔOST.post('/login', user);

const register = (user) => APIṔOST.post('/user/register', user);

const fetchSellerOrders = (token) => APITOKEN(token).get('/sale/seller', {});

export default { fetchOrders, login, register, fetchSellerOrders };

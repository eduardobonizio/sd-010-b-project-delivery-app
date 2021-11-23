import axios from 'axios';

const API = axios.create({
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

const getAllProducts = () => API.get('/products', {});

const login = (user) => API.post('/login', user);

const register = (user) => API.post('/user/register', user);

const fetchSaleInfo = (id) => API.get(`/sale/products/${id}`, {});

const updateSaleStatus = (id, status) => API.put(`/sale/${id}`, { status });

export default { fetchOrders,
  login,
  register,
  getAllProducts,
  createSale,
  fetchSaleInfo,
  updateSaleStatus };

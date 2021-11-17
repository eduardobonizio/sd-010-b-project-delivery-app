import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001',
  headers: {
    'Content-type': 'application/json',
  },
});

// const loginApi = async (email, password) => ;
const create = (data) => api.post('/login', data);
const getAll = (data) => api.get('/login', data);
const getAllSales = () => api.get('/sales');
const getAllSalesProducts = () => api.get('/checkout');

const register = (data) => api.post('/register', data);
export default { create, getAll, getAllSales, getAllSalesProducts, register };

import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001',
  headers: {
    'Content-type': 'application/json',
  },
});

const config = (token) => ({
  headers: {
    authorization: token,
  },
});

// const loginApi = async (email, password) => ;
const create = (data) => api.post('/login', data);
const getAll = (data) => api.get('/login', data);
const getAllSales = (tokenLogin) => api.get('/sales', config(tokenLogin));

export default { create, getAll, getAllSales };

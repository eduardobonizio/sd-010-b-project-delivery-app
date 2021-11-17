import axios from 'axios';
import { getStorage } from '../utils/localStorage';

const token = () => ({
  headers: { authorization: getStorage('user').token },
});

export const login = async (body) => axios.post('http://localhost:3001/login', body)
  .then(({ data }) => data)
  .catch((err) => err.response.data);

export const register = async (body) => axios.post('http://localhost:3001/register', body)
  .then(({ data }) => data)
  .catch((err) => err.response.data);

export const getProducts = async () => axios.get('http://localhost:3001/products', token())
  .then(({ data }) => data)
  .catch((err) => err.response);

export const getSellers = async () => axios.get('http://localhost:3001/user/sellers', token())
  .then(({ data }) => data)
  .catch((err) => err.response);

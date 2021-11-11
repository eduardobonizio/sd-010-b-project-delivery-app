import axios from 'axios';
import { getStorage } from '../utils/localStorage';

const token = {
  headers: { authorization: getStorage('user').token },
};

export const login = async (body) => axios.post('http://localhost:3001/users/login', body)
  .then(({ data }) => data)
  .catch((err) => err.response.data);

export const register = async (body) => axios.post('http://localhost:3001/users/register', body)
  .then(({ data }) => data)
  .catch((err) => err.response.data);

export const getProducts = async () => axios.get('http://localhost:3001/products', token)
  .then(({ data }) => data)
  .catch(( err ) => err.response.data);
  
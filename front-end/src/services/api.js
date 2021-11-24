import axios from 'axios';
import { getStorage } from '../utils/localStorage';

const token = () => ({
  headers: { authorization: getStorage('user').token },
});

export const login = async (body) => axios.post('http://localhost:3001/login', body)
  .then(({ data }) => data)
  .catch((err) => err.response.data);

export const register = async (body) => axios.post('http://localhost:3001/register/customer', body)
  .then(({ data }) => data)
  .catch((err) => err.response.data);

export const getProducts = async () => axios.get('http://localhost:3001/products', token())
  .then(({ data }) => data)
  .catch((err) => err.response);

export const getSellers = async () => axios.get('http://localhost:3001/user/sellers', token())
  .then(({ data }) => data)
  .catch((err) => err.response);

export const checkoutProducts = async (body) => axios.post('http://localhost:3001/sales', body, token())
  .then(({ data }) => data)
  .catch((err) => err.response);

export const getOrders = async () => axios.get('http://localhost:3001/sales', token())
  .then(({ data }) => data)
  .catch((err) => err.response);

<<<<<<< HEAD
export const getSellerOrder = async () => axios.get('http://localhost:3001/', token())
=======
export const getUserList = async () => axios.get('http://localhost:3001/user/all', token())
  .then(({ data }) => data)
  .catch((err) => err.response);

export const registerUser = async (body) => axios.post('http://localhost:3001/register/admin', body, token())
>>>>>>> d213b095e06b70435581eef29ece6db6df7f2589
  .then(({ data }) => data)
  .catch((err) => err.response);

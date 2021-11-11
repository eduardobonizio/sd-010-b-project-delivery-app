import axios from 'axios';

export const login = async (body) => axios.post('http://localhost:3001/users/login', body)
  .then(( data ) => data)
  .catch(( err ) => err);

export const register = async (body) => axios.post('http://localhost:3001/users/register', body)
  .then(({ data }) => data)
  .catch(( err ) => err);
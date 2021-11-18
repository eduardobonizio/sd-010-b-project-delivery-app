import axios from 'axios';

const apiUrl = 'http://localhost:3001';

export const getSales = () => axios.get(`${apiUrl}/sales`);

export const postSales = (data) => axios.post(`${apiUrl}/sales`, data);

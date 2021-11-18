import axios from 'axios';

const apiUrl = 'http://localhost:3001';

export const getSales = () => axios.get(`${apiUrl}/sales`);

export const postSales = (data, token) => axios.post(`${apiUrl}/sales`, data, {
  headers: { Authorization: token },
});

export const postSaleProducts = (data, token) => axios
  .post(`${apiUrl}/sales/products`, data, { headers: { Authorization: token },
  });

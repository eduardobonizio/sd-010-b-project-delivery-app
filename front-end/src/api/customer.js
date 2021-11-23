import api from '../services/api';

export async function getAllProductsApi() {
  const response = await api.get('/products');

  return response.data;
}

export async function getAllSellersApi() {
  const response = await api.get('/sellers');

  return response.data;
}

export async function newOrderApi(token, data) {
  const headers = {
    'Content-Type': 'application/json',
    Authorization: token,
  };

  const response = await api.post('/neworder', data, { headers });

  return response.data.saleId;
}

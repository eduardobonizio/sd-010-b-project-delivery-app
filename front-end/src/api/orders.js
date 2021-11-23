import api from '../services/api';

export async function getOneOrderApi(id) {
  const response = await api.get(`/oneorder/${id}`);
  return response.data;
}

export async function getAllOrdersApi(token) {
  const headers = {
    'Content-Type': 'application/json',
    Authorization: token,
  };

  const response = await api.get('/allorders', { headers });
  return response.data;
}

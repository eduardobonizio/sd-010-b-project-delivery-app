import api from '../services/api';

function headers(token) {
  return {
    'Content-Type': 'application/json',
    Authorization: token,
  };
}

export async function getAllUsersApi(token) {
  const response = await api.get('/admin', headers(token));

  return response.data;
}

export async function removeUserApi(id, token) {
  await api.delete(`/admin/manage/${id}`, headers(token));
}

export async function addUserApi(data, token) {
  const response = await api.post('/admin/manage', data, headers(token));
  return response.data;
}

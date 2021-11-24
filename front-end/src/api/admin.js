import api from '../services/api';

function headers(token) {
  return {
    'Content-Type': 'application/json',
    Authorization: token,
  };
}

export async function getAllUsersApi() {
  const response = await api.get('/allusersadm');

  return response.data;
}

export async function removeUserApi(id) {
  await api.delete(`/deleteuser/${id}`);
  return 'ok';
}

export async function addUserApi(data, token) {
  const response = await api.post('/register', data, { headers: headers(token) });
  return response.data;
}

import api from '../services/api';

export async function loginApi(data) {
  const response = await api.post('/login', data);
  const dataLocalStorage = {
    name: response.data.name,
    email: response.data.email,
    role: response.data.role,
    token: response.data.token,
  };
  return dataLocalStorage;
}

export async function createUserApi(dataRegister) {
  await api.post('/register', dataRegister);

  const { email, password } = dataRegister;

  const dataLogin = { email, password };
  const loginResponse = await api.post('/login', dataLogin);

  const dataLocalStorage = {
    name: loginResponse.data.name,
    email: loginResponse.data.email,
    role: loginResponse.data.role,
    token: loginResponse.data.token,
  };

  return dataLocalStorage;
}

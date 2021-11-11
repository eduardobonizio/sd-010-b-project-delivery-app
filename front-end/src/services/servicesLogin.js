import axios from 'axios';

export async function loginService({ email, password }) {
  const END_POINT = 'http://localhost:3001/login';
  try {
    const { data } = await axios.post(END_POINT, { email, password });
    return data;
  } catch (error) {
    console.log(error.message, 'errooooooo');
  }
}

export async function seilah(parametros) {
  const { email, senha } = parametros;
  console.log(email, senha);
}

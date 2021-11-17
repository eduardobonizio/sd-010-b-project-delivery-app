import axios from 'axios';

async function loginService({ email, password }) {
  const END_POINT = 'http://localhost:3001/login';
  try {
    const { data } = await axios.post(END_POINT, { email, password });
    return data;
  } catch (error) {
    return error;
  }
}

export default loginService;

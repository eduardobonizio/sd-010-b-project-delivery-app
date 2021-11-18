import axios from 'axios';

export const loginService = async ({ email, password }) => {
  const END_POINT = 'http://localhost:3001/login';
  try {
    const { data } = await axios.post(END_POINT, { email, password });
    return data;
  } catch (error) {
    return error;
  }
};

export const sendNewUser = async (name, email, password) => {
  const path = 'http://localhost:3001/register';

  try {
    const { data } = await axios.post(path, { name, email, password });
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

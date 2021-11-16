import { postAll } from '../httpService';

async function apiCreateUser(userObject) {
  try {
    const newUser = await postAll('/user', userObject);
    return newUser;
  } catch (error) {
    return error.response.data;
  }
}

export default apiCreateUser;

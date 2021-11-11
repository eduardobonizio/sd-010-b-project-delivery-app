import { postAll } from '../httpService';

async function apiCreateLogin(userObject) {
  try {
    const newUser = await postAll('/register', userObject);
    return newUser;
  } catch (error) {
    console.log(error);
  }
}

export default apiCreateLogin;

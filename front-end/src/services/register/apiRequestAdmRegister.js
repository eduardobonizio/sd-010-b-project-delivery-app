import { postAll } from '../httpService';

export default function apiAdmCreateUser(userObject, token) {
  try {
    const newUser = postAll('/user/admin', userObject, token);
    return newUser;
  } catch (error) {
    return error.response.data;
  }
}

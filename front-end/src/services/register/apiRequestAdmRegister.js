import { postAll } from '../httpService';

export default async function apiAdmCreateUser(userObject) {
  try {
    const newUser = await postAll('/user/admin', userObject);
    return newUser;
  } catch (error) {
    return error.response.data;
  }
}

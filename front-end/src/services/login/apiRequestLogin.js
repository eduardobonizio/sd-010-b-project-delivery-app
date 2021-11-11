import { getAll, postAll } from '../httpService';

export async function apiGetAllLogin() {
  try {
    const allUsers = await getAll('/login');
    return allUsers;
  } catch (error) {
    console.log(error);
  }
}

export async function apiRequestLogin(user) {
  try {
    const users = await postAll('/login', user);
    return users;
  } catch (error) {
    console.log(error);
  }
}

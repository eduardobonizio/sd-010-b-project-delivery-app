import { getAll, postAll } from '../httpService';

export async function apiGetAllUsers() {
  try {
    const allUsers = await getAll('/user');
    return allUsers;
  } catch (error) {
    return error.response.data;
  }
}

// adicionando tratamento do error
export async function apiRequestLogin(user) {
  try {
    const users = await postAll('/login', user);
    return users;
  } catch (error) {
    return error.response.data;
  }
}

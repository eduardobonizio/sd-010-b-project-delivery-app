import { postAll } from '../httpService';

async function apiRequestAdmin(sale, token) {
  const config = {
    headers: { authorization: token },
  };
  try {
    const users = await postAll('/user/admin', sale, config);
    return users;
  } catch (error) {
    return error.response.data;
  }
}

export default apiRequestAdmin;

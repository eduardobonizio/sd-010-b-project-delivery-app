import axios from 'axios';
import { serverUrl } from '../contants';

const checkExistence = async (email) => {
  const success = 200;
  try {
    const exists = await axios.post(`${serverUrl}/register/check`, { email });
    if (exists.status === success) return true;
    return false;
  } catch (e) {
    return false;
  }
};

export default checkExistence;

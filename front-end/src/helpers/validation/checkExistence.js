import axios from 'axios';

const checkExistence = async (email) => {
  const success = 200;
  try {
    const exists = await axios.post('http://localhost:3001/register/check', { email });
    if (exists.status === success) return true;
    return false;
  } catch (e) {
    return false;
  }
};

export default checkExistence;

import axios from 'axios';

const checkExistence = async (email, password) => {
  const success = 200;
  const exists = await axios.post('http://localhost:3001/login', { email, password });
  if (exists.status === success) return true;
  return false;
};

export default checkExistence;

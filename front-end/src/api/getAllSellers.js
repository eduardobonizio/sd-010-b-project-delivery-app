import axios from './api';

const URL = '/seller';

const getAllSellers = async () => {
  const result = await axios.get(`${URL}`);
  return result.data;
};

export default getAllSellers;

import axios from 'axios';

const getPurchase = async (userId) => {
  const response = await axios.get('http://localhost:3001/customer/orders', { userId });
  return response;
};

export default {
  getPurchase,
};

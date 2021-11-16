import axios from 'axios';

const URL_PRODUCTS = 'http://localhost:3001/products';
const URL_SALLERS = 'http://localhost:3001/sellers';

const getProducts = async () => {
  const result = await axios.get(URL_PRODUCTS);
  return result;
};

const getSallers = async () => {
  const result = await axios.get(URL_SALLERS);
  return result;
};

export default {
  getProducts,
  getSallers,
};

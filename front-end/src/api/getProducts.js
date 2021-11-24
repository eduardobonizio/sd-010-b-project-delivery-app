import axios from './api';

const URL_PRODUCTS = '/products';

const getProducts = async (role) => {
  const result = await axios.get(`${role}${URL_PRODUCTS}`);
  return result;
};

export default getProducts;

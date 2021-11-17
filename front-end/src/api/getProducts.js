import axios from './api';

const URL_PRODUCTS = '/products';

const getProducts = async () => {
  const result = await axios.get(URL_PRODUCTS);
  return result;
};

export default getProducts;

import { getAll } from '../httpService';

async function apiGetAllProducts() {
  try {
    const allProducts = await getAll('/products');
    return allProducts;
  } catch (error) {
    console.log(error);
  }
}

export default apiGetAllProducts;

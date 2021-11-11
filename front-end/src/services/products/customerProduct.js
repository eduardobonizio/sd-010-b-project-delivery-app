import { getAll } from '../httpService';

export async function apiGetAllProducts() {
  try {
    const allProducts = await getAll('/customer/products');
    return allProducts;
  } catch (error) {
    console.log(error);
  }
}

export default apiGetAllProducts;

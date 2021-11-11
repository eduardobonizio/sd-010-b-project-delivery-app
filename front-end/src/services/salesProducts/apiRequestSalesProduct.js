import { postAll, getAll, edit } from '../httpService';

export async function apiGetAllSales() {
  try {
    const allUsers = await getAll('/customer/orders/');
    return allUsers;
  } catch (error) {
    console.log(error);
  }
}

export async function apiRequestOrdersByID(id) {
  try {
    const allProducts = await getAll(`/customer/orders/${id}`);
    return allProducts;
  } catch (error) {
    console.log(error);
  }
}

async function apiRequestSalesProduct(id) {
  try {
    const users = await postAll(`/customer/orders/${id}`);
    return users;
  } catch (error) {
    console.log(error);
  }
}

export async function apiUpdateFlashCard(Id, sales) {
  try {
    const updateSales = await edit(`/customer/orders/${Id}`, sales);
    return updateSales;
  } catch (error) {
    console.log(erro);
  }
}

export default apiRequestSalesProduct;

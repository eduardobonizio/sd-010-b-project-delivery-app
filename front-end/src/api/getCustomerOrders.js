import axios from './api';

const URL = 'sale/orders/customer/';

const getCustomerOrders = async (id) => {
  const result = await axios.get(`/${URL}${id}`);
  return result;
};

export default getCustomerOrders;

import axios from 'axios';

export const getAllProcuts = async ({ token }) => {
  const END_POINT = 'http://localhost:3001/customer/products';
  try {
    const { data } = await axios.get(END_POINT, {
      headers: {
        Authorization: token,
      },
    });
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

export const getAllOrders = async ({ token }) => {
  const URL_ORDER = 'http://localhost:3001/customer/orders';
  try {
    const { data } = await axios.get(URL_ORDER, {
      headers: {
        Authorization: token,
      },
    });
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

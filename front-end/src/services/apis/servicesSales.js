import axios from 'axios';

export const createSale = async (saleData, token) => {
  const END_POINT = 'http://localhost:3001/customer/orders';
  try {
    const { data } = await axios.post(END_POINT,
      { ...saleData },
      {
        headers: {
          Authorization: token,
        },
      });
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

export const createSaleProducts = async (saleData, token) => {
  const END_POINT = 'http://localhost:3001/customer/checkout';
  try {
    const { data } = await axios.post(END_POINT,
      { ...saleData },
      {
        headers: {
          Authorization: token,
        },
      });
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

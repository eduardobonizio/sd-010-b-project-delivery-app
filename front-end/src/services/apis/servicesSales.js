import axios from 'axios';

const createSale = async (saleData, token) => {
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

export default createSale;

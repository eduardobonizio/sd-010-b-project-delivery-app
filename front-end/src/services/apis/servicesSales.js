import axios from 'axios';

const createSale = async (saleData, token) => {
  // const { seller_id, total_price, address, number, status}
  const END_POINT = 'http://localhost:3001/customer/orders';
  try {
    const { data } = await axios.post(END_POINT,
      {
        headers: {
          Authorization: token,
        },
        body: JSON.stringify(saleData),
      });
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

export default createSale;

import axios from 'axios';

const getOrderDetails = async (token, id) => {
  const END_POINT = `http://localhost:3001/customer/orders/details/${id}`;

  try {
    const { data } = await axios.get(END_POINT, {
      headers: {
        Authorization: token,
      },
    });
    return data;
  } catch (error) {
    return {
      erro: true,
      message: error.message,
    };
  }
};

export default getOrderDetails;

import axios from 'axios';

const getAllSellers = async (token) => {
  const END_POINT = 'http://localhost:3001/seller/';
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

export default getAllSellers;

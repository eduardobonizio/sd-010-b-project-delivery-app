import axios from 'axios';

const getAllProcuts = async ({ token }) => {
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

export default getAllProcuts;

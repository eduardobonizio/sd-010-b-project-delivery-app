import axios from 'axios';

const getPurchase = async (userId) => {
  const response = await axios.get('http://localhost:3001/customer/orders', { userId });
  return response;
};

const getAllProducts = async () => {
  const endpoint = 'http://localhost:3001/products';
  // const token = localStorage.getItem('token');

  const responses = fetch(endpoint, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      // authorization: token,
    },
  })
    .then((response) => response.json())
    .then((data) => data)
    .catch((err) => err);

  const data = await responses;
  if (data.err) { return console.log(data.err.message); }

  return data.data;
};

export {
  getPurchase,
  getAllProducts,
};

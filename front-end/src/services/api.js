import axios from 'axios';

const postPurchase = async (checkoutObj, token) => {
<<<<<<< HEAD
  console.log('to no post', checkoutObj, token, axios);
  const { data } = await axios.post(
=======
  const response = await axios.post(
>>>>>>> 528ad7297d27edcc090cb2d9c5232cc96ac99699
    'http://localhost:3001/customer/orders', checkoutObj, {
      headers: { Authorization: token },
    },
  );
  console.log(response);
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
  postPurchase,
  getAllProducts,
};

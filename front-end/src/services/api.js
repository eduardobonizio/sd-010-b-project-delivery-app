import axios from 'axios';

const postPurchase = async (checkoutObj, token) => {
  const { data } = await axios.post(
    'http://localhost:3001/customer/orders', checkoutObj, {
      headers: { Authorization: token },
    },
  );
  return data;
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

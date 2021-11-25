import axios from 'axios';

const APPLICATION = 'application/json';

const postPurchase = async (checkoutObj, token) => {
  const response = await axios.post(
    'http://localhost:3001/customer/orders', checkoutObj, {
      headers: { Authorization: token },
    },
  );
  return response;
};

const getAllProducts = async () => {
  const endpoint = 'http://localhost:3001/products';

  const responses = fetch(endpoint, {
    method: 'GET',
    headers: {
      'Content-Type': APPLICATION,
    },
  })
    .then((response) => response.json())
    .then((data) => data)
    .catch((err) => err);

  const data = await responses;
  if (data.err) { return console.log(data.err.message); }

  return data.data;
};

const getAllOrdersBySellerId = async (id) => {
  const endpoint = `http://localhost:3001/seller/orders/purchase/${id}`;

  const responses = fetch(endpoint, {
    method: 'GET',
    headers: {
      'Content-Type': APPLICATION,
      // authorization: token,
    },
  })
    .then((response) => response.json())
    .then((data) => data)
    .catch((err) => err);

  const data = await responses;
  if (data.err) { return console.log(data.err.message); }

  return data;
};

const setOrdersStatus = async (id, status) => {
  await axios({
    method: 'patch',
    url: `http://localhost:3001/seller/orders/purchase/${id}`,
    data: {
      status,
    },
  })
    .then((data) => data)
    .catch((err) => err);
};

export {
  postPurchase,
  getAllProducts,
  getAllOrdersBySellerId,
  setOrdersStatus,

};

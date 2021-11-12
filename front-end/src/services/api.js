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

export default getAllProducts;

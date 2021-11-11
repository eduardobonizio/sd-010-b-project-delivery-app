const URL_PRODUCTS = 'http://localhost:3001/products';

const fetchProducts = () => (
  fetch(URL_PRODUCTS, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => error)
);

export default fetchProducts;

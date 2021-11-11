const URL_PRODUCTS = 'http://localhost:3001/products';

const fetchProducts = () => (
  fetch(URL_PRODUCTS, {
    method: 'GET',
    headers: {
      Accept: APPLICATION_JSON,
      'Content-Type': APPLICATION_JSON,
    },
  })
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => error)
);

export default fetchProducts;

const URL = 'http://localhost:3001/products';

export const getAll = () => {
  const products = fetch(URL)
    .then((response) => response.json())
    .then((data) => data);

  return products;
};

export const getProductById = (id) => {
  const product = fetch(`${URL}/${id}`)
    .then((response) => response.json())
    .then((data) => data);

  return product;
};

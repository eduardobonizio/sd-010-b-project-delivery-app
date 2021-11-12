const URL = 'http://localhost:3001/products';

export const getAll = () => {
  const products = fetch(URL)
    .then((response) => response.json())
    .then((data) => data);

  return products;
};

export const getProductById = () => {
  const productss = fetch(URL)
    .then((response) => response.json())
    .then((data) => console.log(data));

  return productss;
};

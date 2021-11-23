const URL = 'http://localhost:3001/sales';

export const getAll = () => {
  const sales = fetch(URL)
    .then((response) => response.json())
    .then((data) => data);

  return sales;
};

export const getProductById = (id) => {
  const sale = fetch(`${URL}/${id}`)
    .then((response) => response.json())
    .then((data) => data);

  return sale;
};

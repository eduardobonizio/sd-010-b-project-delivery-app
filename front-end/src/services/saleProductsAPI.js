const URL_SALES = 'http://localhost:3001/sale-products';

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

const fetchGetSaleProducts = ({ id }) => (
  fetch(`${URL_SALES}/${id}`, {
    method: 'GET',
    headers,
  })
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => error)
);

export default fetchGetSaleProducts;

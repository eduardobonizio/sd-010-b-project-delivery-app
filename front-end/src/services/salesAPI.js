const URL_SALES = 'http://localhost:3001/sales';

const fetchGetSales = ({ id }) => (
  fetch(`${URL_SALES}/${id}`, {
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

export const fetchSetStatusSale = ({ id, status }) => (
  fetch(`${URL_SALES}/${id}`, {
    method: 'GET',
    headers,
    body: JSON.stringify({
      status,
    }),
  })
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => error)
);

export default fetchGetSales;

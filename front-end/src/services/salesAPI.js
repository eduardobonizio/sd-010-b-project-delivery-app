const URL_SALES = 'http://localhost:3001/sales';

const fetchSales = ({ id }) => (
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

export default fetchSales;

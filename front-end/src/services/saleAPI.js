const URL_SALES = 'http://localhost:3001/sales';

const postSale = (payload, token) => (
  fetch(URL_SALES, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: token,
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => error)
);

export default postSale;

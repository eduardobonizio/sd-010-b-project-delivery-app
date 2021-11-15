const URL_SALES = 'http://localhost:3001/sales';
const URL_SALES_USER = 'http://localhost:3001/sales-user';

const APPLICATION_JSON = 'application/json';

const postSale = (payload, token) => (
  fetch(URL_SALES, {
    method: 'POST',
    headers: {
      Accept: APPLICATION_JSON,
      'Content-Type': APPLICATION_JSON,
      Authorization: token,
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => error)
);

export const fetchGetSalesByIdSeller = ({ id }) => (
  fetch(`${URL_SALES}/${id}`, {
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

export const fetchGetSalesByIdCustomer = ({ id }) => (
  fetch(`${URL_SALES_USER}/${id}`, {
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

export const fetchSetStatusSale = ({ id, status }) => (
  fetch(`${URL_SALES}/${id}`, {
    method: 'PATCH',
    headers: {
      Accept: APPLICATION_JSON,
      'Content-Type': APPLICATION_JSON,
    },
    body: JSON.stringify({
      status,
    }),
  })
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => error)
);

export default postSale;

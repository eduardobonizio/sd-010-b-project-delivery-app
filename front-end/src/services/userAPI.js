const URL_LOGIN = 'http://localhost:3001/login';
const URL_SELLER = 'http://localhost:3001/sellers';

const APPLICATION_JSON = 'application/json';

export const fetchAuthUser = (email, password) => (
  fetch(URL_LOGIN, {
    method: 'POST',
    headers: {
      Accept: APPLICATION_JSON,
      'Content-Type': APPLICATION_JSON,
    },
    body: JSON.stringify({
      email,
      password,
    }),
  })
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => error)
);

export const fetchAllSellers = () => (
  fetch(URL_SELLER, {
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

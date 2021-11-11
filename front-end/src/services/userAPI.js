const URL = 'http://localhost:3001/login';

const fetchAuthUser = (email, password) => (
  fetch(URL, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
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

export default fetchAuthUser;

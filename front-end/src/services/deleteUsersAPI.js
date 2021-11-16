const URL_ALL_USERS = 'http://localhost:3001/users';

const fetchAllUsers = (id) => (
  fetch(URL_ALL_USERS, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id,
    }),
  })
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => error)
);

export default fetchAllUsers;

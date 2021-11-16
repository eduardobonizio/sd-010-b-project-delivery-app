const URL_ALL_USERS = 'http://localhost:3001/users';

const fetchAllUsers = () => (
  fetch(URL_ALL_USERS, {
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

export default fetchAllUsers;

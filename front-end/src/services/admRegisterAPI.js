const URL = 'http://localhost:3001/ADMregister';

const admRegisterAPI = (newUser, token) => (
  fetch(URL, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      authorization: token,
    },
    body: JSON.stringify({
      name: newUser.name,
      email: newUser.email,
      password: newUser.password,
      role: newUser.role,
    }),
  })
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => error)
);

export default admRegisterAPI;

import axios from 'axios';

const reqUserLogin = async ({ email, password }) => {
  const endPoint = 'http://localhost:3001/login';
  try {
    const { data } = await axios.post(endPoint, { email, password });
    return data;
  } catch (error) {
    return error;
  }
};

export default reqUserLogin;

// const URL = 'http://localhost:3001/login';

// const reqUserLogin = (email, password) => (
//   fetch(URL, {
//     method: 'POST',
//     headers: {
//       Accept: 'application/json',
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       email,
//       password,
//     }),
//   })
//     .then((response) => response.json())
//     .then((data) => data)
//     .catch((error) => error)
// );

// export default reqUserLogin;

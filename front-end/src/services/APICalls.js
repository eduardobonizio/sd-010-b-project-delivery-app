// import axios from 'axios';
// require('dotenv').config();
// const api = axios.create({
//   baseURL: process.env.REACT_APP_BACKEND_URL
// });

// Just for tests
const SELLERS_ARRAY = [
  {
    id: 2,
    name: 'Fulana Pereira',
    email: 'fulana@deliveryapp.com',
    password: '3c28d2b0881bf46457a853e0b07531c6',
    role: 'seller',
  },
  {
    id: 4,
    name: 'Matheus',
    email: 'matheus@seller.com',
    password: '123456',
    role: 'seller',
  },
];

const getAllSellers = async () => {
  const promise = new Promise((res) => {
    res(SELLERS_ARRAY);
  });

  return promise.then((res) => res);
};
// --------------

export default { getAllSellers };

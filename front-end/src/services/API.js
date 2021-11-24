import axios from 'axios';

const login = async (email, password) => {
  const endPoint = 'http://localhost:3001/login';
  const { data } = await axios.post(endPoint, { email, password });
  return data;
};

const register = async (name, password, email) => {
  const endPoint = 'http://localhost:3001/register';
  const { data } = await axios.post(endPoint, {
    name,
    password,
    email,
  });
  return data;
};

const getAllProduct = async (token) => {
  const endPoint = 'http://localhost:3001/products';
  const { data } = await axios.get(endPoint, { headers: { Authorization: token } });
  return data;
};

const getAllSales = async (token) => {
  const endPoint = 'http://localhost:3001/sales';
  try {
    const { data } = await axios.get(endPoint, { headers: { Authorization: token } });
    return data;
  } catch (error) {
    return error;
  }
};

const postSale = async (token, sale) => {
  const endPoint = 'http://localhost:3001/sales';
  const { data } = await axios.post(
    endPoint, { sale },
    { headers: { Authorization: token } },
  );
  console.log(data);
  return data;
};

const getAllSellers = async (token) => {
  const endPoint = 'http://localhost:3001/users/sellers';
  try {
    const { data } = await axios.get(endPoint, { headers: { Authorization: token } });
    return data;
  } catch (error) {
    return error;
  }
};

export {
  getAllProduct,
  getAllSales,
  login,
  postSale,
  getAllSellers,
  register,
};

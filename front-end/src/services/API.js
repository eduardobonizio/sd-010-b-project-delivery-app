import axios from 'axios';

const { token } = JSON.parse(localStorage.user);

const getAllProduct = async () => {
  const endPoint = 'http://localhost:3001/products';
  try {
    const { data } = await axios.get(endPoint, { headers: { Authorization: token } });
    return data;
  } catch (error) {
    return error;
  }
};

const getAllSales = async () => {
  const endPoint = 'http://localhost:3001/sales';
  try {
    const { data } = await axios.get(endPoint, { headers: { Authorization: token } });
    return data;
  } catch (error) {
    return error;
  }
};

const login = async (email, password) => {
  const endPoint = 'http://localhost:3001/login';
  try {
    const { data } = await axios.post(endPoint, { email, password });
    return data;
  } catch (error) {
    return error;
  }
};

const postSale = async (sale) => {
  const endPoint = 'http://localhost:3001/sales';
  try {
    const { data } = await axios.post(
      endPoint, { sale },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: token,
        },
      },
    );
    return data;
  } catch (error) {
    return error;
  }
};

const getAllSellers = async () => {
  const endPoint = 'http://localhost:3001/users/sellers';
  try {
    const { data } = await axios.get(endPoint);
    return data;
  } catch (error) {
    return error;
  }
};

const register = async (name, password, email) => {
  try {
    const { data } = await axios.post('http://localhost:3001/register', {
      name,
      password,
      email,
    });
    return data;
  } catch (err) {
    return err;
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

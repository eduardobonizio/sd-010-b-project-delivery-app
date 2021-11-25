import axios from 'axios';

const LOCALHOST = 'http://localhost:3001/';

const login = async (email, password) => {
  const endPoint = `${LOCALHOST}login`;
  const { data } = await axios.post(endPoint, { email, password });
  return data;
};

const register = async (name, password, email) => {
  const endPoint = `${LOCALHOST}register`;
  const { data } = await axios.post(endPoint, {
    name,
    password,
    email,
  });
  return data;
};

const getAllProduct = async () => {
  const { token } = JSON.parse(localStorage.user);
  const endPoint = `${LOCALHOST}products`;
  const { data } = await axios.get(endPoint, { headers: { Authorization: token } });
  return data;
};

const getAllSales = async () => {
  const { token } = JSON.parse(localStorage.user);
  const endPoint = `${LOCALHOST}sales`;
  const { data } = await axios.get(endPoint, { headers: { Authorization: token } });
  return data;
};

const postSale = async (sale) => {
  const { token } = JSON.parse(localStorage.user);
  const endPoint = `${LOCALHOST}sales`;
  const { data } = await axios.post(
    endPoint, { sale },
    { headers: { Authorization: token } },
  );
  console.log(data);
  return data;
};

const getAllSellers = async () => {
  const { token } = JSON.parse(localStorage.user);
  const endPoint = `${LOCALHOST}users/sellers`;
  const { data } = await axios.get(endPoint, { headers: { Authorization: token } });
  return data;
};

const getSaleById = async (id) => {
  const { token } = JSON.parse(localStorage.user);
  const endpoint = `${LOCALHOST}sales/${id}`;
  const { data } = await axios.get(endpoint, { headers: { Authorization: token } });
  return data;
};

const updateSaleStatus = async (id, status) => {
  const { token } = JSON.parse(localStorage.user);
  const endpoint = `${LOCALHOST}sales/${id}`;
  await axios.patch(
    endpoint,
    { status },
    { headers: { Authorization: token } },
  );
};

export {
  getAllProduct,
  getAllSales,
  login,
  postSale,
  getAllSellers,
  register,
  getSaleById,
  updateSaleStatus,
};

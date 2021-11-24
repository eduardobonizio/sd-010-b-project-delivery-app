import axios from 'axios';

const getSaleById = async (id) => {
  const { token } = JSON.parse(localStorage.getItem('user'));
  const endpoint = `http://localhost:3001/sales/${id}`;
  const { data } = await axios.get(endpoint, { headers: { Authorization: token } });
  return data;
};

const updateSaleStatus = async (id, status) => {
  const { token } = JSON.parse(localStorage.getItem('user'));
  const endpoint = `http://localhost:3001/sales/${id}`;
  try {
    await axios.patch(
      endpoint,
      { status },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: token,
        },
      },
    );
  } catch (error) {
    console.log(error.message);
    return error.message;
  }
};

export {
  getSaleById,
  updateSaleStatus,
};

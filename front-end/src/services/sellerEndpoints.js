import axios from 'axios';

const getSaleById = async (id) => {
  const endpoint = `http://localhost:3001/sales/${id}`;
  const { data } = await axios.get(endpoint);
  return data;
};

const updateSaleStatus = async (id, status) => {
  const endpoint = `http://localhost:3001/sales/${id}`;
  try {
    await axios.patch(
      endpoint,
      { status },
      {
        headers: {
          'Content-Type': 'application/json',
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

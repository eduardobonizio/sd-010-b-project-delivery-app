import axios from 'axios';

const END_POINT = 'http://localhost:3001/admin/manage';

export const getAllUsers = async (token) => {
  try {
    const { data } = await axios.get(END_POINT, {
      headers: {
        Authorization: token,
      },
    });
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

export const createUser = async (body, token) => {
  try {
    const { data } = await axios.post(END_POINT,
      { ...body },
      {
        headers: {
          Authorization: token,
        },
      });
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

export const removeUser = async (id, token) => {
  try {
    await axios.delete(`${END_POINT}/${id}`,
      {
        headers: {
          Authorization: token,
        },
      });
    return { status: 200 };
  } catch (error) {
    console.log(error.message);
  }
};

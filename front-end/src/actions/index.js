const setEmail = (content) => ({
  type: 'SET_EMAIL',
  payload: {
    content,
  },
});

const setPassword = (content) => ({
  type: 'SET_PASSWORD',
  payload: {
    content,
  },
});

export {
  setEmail,
  setPassword,
};

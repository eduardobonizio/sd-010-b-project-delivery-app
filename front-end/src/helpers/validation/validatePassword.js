const validatePassword = (password) => {
  const minLength = 5;
  return (password.length > minLength);
};

export default validatePassword;

const validateEmailFormat = (email) => {
  const regexp = /\S+@\S+\.\S+/;
  return regexp.test(email);
};

export default validateEmailFormat;

const validatePassword = (p) => {
  const minLength = 6;
  const isValid = p.length >= minLength;
  return isValid;
};

const validateEmail = (email) => {
  const emailRegex = /^[_a-z0-9-]+(.[_a-z0-9-]+)@[a-z0-9-]+(.[a-z0-9-]+)(.[a-z]{2,4})$/;
  const isValid = emailRegex.test(email);
  return isValid;
};

const validateName = (name) => {
  const minLength = 12;
  return name.length >= minLength;
};

module.exports = {
  validateEmail,
  validatePassword,
  validateName,
};

const validRegister = ({ registerName, registerEmail, registerPassword }) => {
  const nameLength = 12;
  const validName = registerName.length >= nameLength;
  // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test
  const emailRegex = /\S+@\S+\.\S+/; // /^\S+@\S+\.\S+$/
  const validEmail = emailRegex.test(registerEmail);
  const passwordLength = 6;
  const validPassword = registerPassword.length >= passwordLength;

  return validName && validEmail && validPassword;
};

export default {
  validRegister,
};

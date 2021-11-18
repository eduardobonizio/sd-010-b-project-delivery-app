// import invokeAlert from '../functions/invokeAlert';
// import { INVALID_EMAIL_PASSWORD, EMPTY_FIELD, INVALID_NICKNAME_NAME } from '../errorMsgs';

const INVALID_NAME = 'Nome inválido';
const INVALID_PASSWORD = 'Senha inválido';
const INVALID_EMAIL = 'E-mail inválido';
const EMPTY_FIELDS = 'todos os campos devem estar preeenchidos';

export const validateIfFieldsAreFilled = (data) => {
  const { name, email, password, role } = data;
  if (!name || !role || !email || !password) {
    return EMPTY_FIELDS;
  }

  return true;
};

export const validateIfFieldsAreCorrect = (data) => {
  const { name, email, password } = data;
  console.log(data);

  const mailFormat = /[a-z]+@[a-z]+.com/g;
  const less = 6;
  validateIfFieldsAreFilled(data);

  if (name < less) {
    return INVALID_NAME;
  }
  if (password < less) return INVALID_PASSWORD;
  if (!email.match(mailFormat)) return INVALID_EMAIL;

  return true;
};

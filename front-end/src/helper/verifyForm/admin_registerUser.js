// import invokeAlert from '../functions/invokeAlert';
// import { INVALID_EMAIL_PASSWORD, EMPTY_FIELD, INVALID_NICKNAME_NAME } from '../errorMsgs';

const INVALID_NAME = 'Nome inválido';
const INVALID_PASSWORD = 'Senha inválido';
const INVALID_EMAIL = 'E-mail inválido';
const EMPTY_FIELDS = 'Campos não preenchidos';

export const validateIfFieldsAreFilled = (data) => {
  const { name, email, password, role } = data;
  if (!name || !role || !email || !password) {
    return EMPTY_FIELDS;
  }

  return true;
};

export const validateIfFieldsAreCorrect = (data) => {
  const { name, email, password } = data;

  const mailFormat = /[a-z0-9]+@[a-z]+.com/g;
  const less = 6;
  const nameLess = 12;
  const errorArr = [];
  const fields = validateIfFieldsAreFilled(data);
  if (fields) {
    errorArr.push(fields);
  }

  if (name.length < nameLess) {
    errorArr.push(INVALID_NAME);
  }
  if (password.length < less) {
    errorArr.push(INVALID_PASSWORD);
  }
  if (!email.match(mailFormat)) {
    errorArr.push(INVALID_EMAIL);
  }
  console.log(errorArr, 'error arr');

  if (errorArr.length > 1) return errorArr;

  return true;
};

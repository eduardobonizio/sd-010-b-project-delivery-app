const PASSWORD_LENGTH = 6;
const NAME_LENGTH = 11;

export function validateName(name) {
  if (name.length > NAME_LENGTH) {
    return true;
  }
}

export function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

export function validatePassword(password) {
  if (password.length >= PASSWORD_LENGTH) {
    return true;
  }
}

export function isValidateRegister(name, email, password) {
  const isEmailChecked = validateEmail(email);
  const isPasswordChecked = validatePassword(password);
  const isNameChecked = validateName(name);

  if (!(isEmailChecked && isPasswordChecked && isNameChecked)) {
    return false;
  }

  return true;
}

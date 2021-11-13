const PASSWORD_LENGTH = 6;

export function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

export function validatePassword(password) {
  if (password.length >= PASSWORD_LENGTH) {
    return true;
  }
}

export function isValidateLogin(email, password) {
  const isEmailChecked = validateEmail(email);
  const isPasswordChecked = validatePassword(password);

  if (!(isEmailChecked && isPasswordChecked)) {
    return false;
  }

  return true;
}

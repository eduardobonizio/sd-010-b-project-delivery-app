const PASSWORD_LENGTH = 6;
const NAME_LENGTH = 12;

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

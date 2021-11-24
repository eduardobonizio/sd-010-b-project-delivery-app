export default function isValidRegister(name, email, password) {
  const validEmail = /\S+@\S+\.\S+/;
  const minOfCaracteres = 6;
  const minName = 12;

  if (name.length >= minName
    && password.length >= minOfCaracteres
    && validEmail.test(email)) {
    return false;
  }
  return true;
}

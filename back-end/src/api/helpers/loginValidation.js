const emailValidation = (email) => {
  const testEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;

  if (!email.match(testEmail)) {
    return { fieldError: true, message: 'Invalid email' };
  }

  if (email === '') {
    return { fieldError: true, message: 'Email cant be empty' };
  }

  if (!email) {
    return { fieldError: true, message: 'Email is required' };
  }
};

const passwordValidation = (password) => {
  if (password.length < 6) return { fieldError: true, message: 'Invalid password' };
};

module.exports = {
  emailValidation,
  passwordValidation,
}
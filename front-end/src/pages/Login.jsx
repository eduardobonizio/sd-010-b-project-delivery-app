import React, { useState } from 'react';

function Login() {
  const [passwordIsValid, setPasswordIsValid] = useState(false);
  const [password, setPassword] = useState('');
  const [email, setemail] = useState('');
  const [emailIsValid, setemailIsValid] = useState(false);

  const validatePassword = (p) => {
    const minLength = 6;
    const isValid = p.length >= minLength;
    console.log('password', isValid, p, typeof p);
    console.log(password);
    setPasswordIsValid(isValid);
  };

  const savePassword = (p) => {
    setPassword(p);
  };

  const handlePasswordChange = (event) => {
    const { target: { value } } = event;
    validatePassword(value);
    savePassword(value);
    console.log(password);
  };

  const validateEmail = (email2) => {
    const emailRe = /^[_a-z0-9-]+(.[_a-z0-9-]+)@[a-z0-9-]+(.[a-z0-9-]+)(.[a-z]{2,4})$/;
    const isValid = emailRe.test(email2);
    setemailIsValid(isValid);
  };

  const saveEmail = (e) => {
    setemail(e);
  };

  const handleEmailChange = (event) => {
    const { target: { value } } = event;
    validateEmail(value);
    saveEmail(value);
    console.log(email);
  };

  return (
    <div>
      <h1>App de Delivery</h1>
      <form>
        <label htmlFor="email">
          Login
          <input
            data-testid="common_login__input-email"
            id="email"
            type="email"
            onChange={ handleEmailChange }
          />
        </label>
        <label htmlFor="password">
          Senha
          <input
            data-testid="common_login__input-password"
            id="password"
            type="email"
            onChange={ handlePasswordChange }
          />
        </label>
        <button
          data-testid="common_login__button-login"
          type="button"
          disabled={ !passwordIsValid || !emailIsValid }
        >
          Login

        </button>
        <button data-testid="common_login__button-register" type="button">
          Ainda não tenho conta
        </button>
      </form>
      <p data-testid="common_login__element-invalid-email" />
    </div>
  );
}

export default Login;

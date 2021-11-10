import React, { useState } from 'react';
<<<<<<< HEAD
=======
import { login } from '../api';
>>>>>>> 02ff7728924ff3d07fd1f72570700e756b55646f

function Login() {
  const [passwordIsValid, setPasswordIsValid] = useState(false);
  const [password, setPassword] = useState('');
  const [email, setemail] = useState('');
  const [emailIsValid, setemailIsValid] = useState(false);
<<<<<<< HEAD
=======
  const [error, setError] = useState(null);
>>>>>>> 02ff7728924ff3d07fd1f72570700e756b55646f

  const validatePassword = (p) => {
    const minLength = 6;
    const isValid = p.length >= minLength;
<<<<<<< HEAD
    console.log('password', isValid, p, typeof p);
    console.log(password);
=======
>>>>>>> 02ff7728924ff3d07fd1f72570700e756b55646f
    setPasswordIsValid(isValid);
  };

  const savePassword = (p) => {
    setPassword(p);
  };

  const handlePasswordChange = (event) => {
<<<<<<< HEAD
    const { target: { value } } = event;
    validatePassword(value);
    savePassword(value);
    console.log(password);
=======
    const {
      target: { value },
    } = event;
    validatePassword(value);
    savePassword(value);
>>>>>>> 02ff7728924ff3d07fd1f72570700e756b55646f
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
<<<<<<< HEAD
    const { target: { value } } = event;
    validateEmail(value);
    saveEmail(value);
    console.log(email);
=======
    const {
      target: { value },
    } = event;
    validateEmail(value);
    saveEmail(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = { email, password };
      await login(user);
    } catch (err) {
      setError(err);
    }
>>>>>>> 02ff7728924ff3d07fd1f72570700e756b55646f
  };

  return (
    <div>
      <h1>App de Delivery</h1>
<<<<<<< HEAD
      <form>
=======
      <form onSubmit={ handleSubmit }>
>>>>>>> 02ff7728924ff3d07fd1f72570700e756b55646f
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
<<<<<<< HEAD
            type="email"
=======
            type="password"
>>>>>>> 02ff7728924ff3d07fd1f72570700e756b55646f
            onChange={ handlePasswordChange }
          />
        </label>
        <button
          data-testid="common_login__button-login"
<<<<<<< HEAD
          type="button"
          disabled={ !passwordIsValid || !emailIsValid }
        >
          Login

=======
          type="submit"
          disabled={ !passwordIsValid || !emailIsValid }
        >
          Login
>>>>>>> 02ff7728924ff3d07fd1f72570700e756b55646f
        </button>
        <button data-testid="common_login__button-register" type="button">
          Ainda não tenho conta
        </button>
      </form>
<<<<<<< HEAD
      <p data-testid="common_login__element-invalid-email" />
=======
      {error && (
        <p data-testid="common_login__element-invalid-email">
          Email ou senha inválidos
        </p>
      )}
>>>>>>> 02ff7728924ff3d07fd1f72570700e756b55646f
    </div>
  );
}

export default Login;

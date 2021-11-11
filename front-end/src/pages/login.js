import React, { useState, useEffect } from 'react';

const Joi = require('joi');

function Login() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [button, setButton] = useState(true);
  const minPasswordLength = 6;

  const loginSchema = Joi.object({
    login: Joi.string().email({ tlds: { allow: false } }).required(),
    password: Joi.string().min(minPasswordLength).required(),
  });

  const validateLogin = () => {
    const { error } = loginSchema.validate({ login, password });
    if (!error) setButton(false);
    else setButton(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'login') setLogin(value);
    if (name === 'password') setPassword(value);

    validateLogin();
  };

  useEffect(() => {
    validateLogin();
  }, [login, password]);

  return (
    <div>
      <form>
        <label htmlFor="login-input">
          Login
          <input
            type="text"
            placeholder="email@trybeer.com"
            id="login-input"
            name="login"
            data-testid="common_login__input-email"
            onChange={ handleChange }
            value={ login }
          />
        </label>
        <label htmlFor="password-input">
          Senha
          <input
            type="password"
            placeholder="********"
            id="password-input"
            name="password"
            data-testid="common_login__input-password"
            onChange={ handleChange }
            value={ password }
          />
        </label>

        <button
          type="submit"
          data-testid="common_login__button-login"
          disabled={ button }
        >
          Login
        </button>
        <button
          type="button"
          data-testid="common_login__button-register"
        >
          Ainda não tenho conta
        </button>

        <p id="error-msg" data-testid="common_login__element-invalid-email">erro</p>
      </form>
    </div>
  );
}

export default Login;

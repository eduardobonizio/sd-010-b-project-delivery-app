import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import { loginUser } from '../services/user';
import redirect from '../utils/loginRedirect';

const Joi = require('joi');

function Login() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [button, setButton] = useState(true);
  const [token, setToken] = useState('');
  const [role, setRole] = useState('');
  const [loggedUser, setLoggedUser] = useState('');
  const minPasswordLength = 6;
  // const exactUserObjLength = 4;

  const loginSchema = Joi.object({
    login: Joi.string().email({ tlds: { allow: false } }).required(),
    password: Joi.string().min(minPasswordLength).required(),
  });

  const validateLogin = () => {
    const { error } = loginSchema.validate({ login, password });
    if (!error) setButton(false);
    else setButton(true);
  };

  const saveLogin = () => {
    if (localStorage.getItem('user')) {
      const user = JSON.parse(localStorage.getItem('user'));
      setLoggedUser(user);
    }
    console.log(token);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'login') setLogin(value);
    if (name === 'password') setPassword(value);

    validateLogin();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const logged = await loginUser({ email: login, password });
    setRole(logged.data.role);
    localStorage.setItem('user', JSON.stringify(logged.data));
    localStorage.setItem('carrinho', JSON.stringify({}));
    // if (logged.data.token) setToken(logged.data.token);
    setToken(logged.data.token);
  };

  useEffect(() => {
    validateLogin();
  }, [login, password]);

  useEffect(() => {
    saveLogin();
  }, []);

  if (loggedUser !== '') return <Redirect to="/customer/products" />;
  return (
    <div>
      <form onSubmit={ handleSubmit }>
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
          onSubmit={ handleSubmit }
        >
          Login
        </button>
        <Link to="/register">
          <button
            type="button"
            data-testid="common_login__button-register"
          >
            Ainda não tenho conta
          </button>
        </Link>
        {token !== ''
          ? <Redirect to={ { pathname: redirect(role), state: token } } /> : null}
        <p id="error-msg" data-testid="common_login__element-invalid-email">erro</p>
      </form>
    </div>
  );
}

export default Login;

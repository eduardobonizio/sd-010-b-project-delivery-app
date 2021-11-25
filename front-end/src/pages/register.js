import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router';
import { create } from '../services/user';
import logo from '../images/mainLogo.png';
// import { Link } from 'react-router-dom';

const Joi = require('joi');

function Register() {
  const [userName, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [button, setButton] = useState(true);
  const [token, setToken] = useState('');
  const minPasswordLength = 6;
  const minNameLength = 12;

  const registerSchema = Joi.object({
    userName: Joi.string().min(minNameLength).required(),
    email: Joi.string().email({ tlds: { allow: false } }).required(),
    password: Joi.string().min(minPasswordLength).required(),
  });

  const validateLogin = () => {
    const { error } = registerSchema.validate({ userName, email, password });
    if (!error) setButton(false);
    else setButton(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'userName') setName(value);
    if (name === 'email') setEmail(value);
    if (name === 'password') setPassword(value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const register = await create({ name: userName, email, password });
    if (register.data.token) setToken(register.data.token);
  };

  useEffect(() => {
    validateLogin();
  }, [userName, email, password, validateLogin]);

  return (
    <div className="main-login-div">
      <img src={ logo } alt="Delivery app logo" className="main-logo" />
      <form onSubmit={ handleSubmit } className="form-login">
        <div className="label-login">
          <label htmlFor="login-input">
            <input
              className="login-input"
              type="text"
              placeholder="seu nome"
              id="name-input"
              name="userName"
              data-testid="common_register__input-name"
              onChange={ handleChange }
            // value={ userName }
            />
          </label>
        </div>
        <div className="label-login">
          <label htmlFor="email-input">
            <input
              className="login-input"
              type="text"
              placeholder="email"
              id="email-input"
              name="email"
              data-testid="common_register__input-email"
              onChange={ handleChange }
            // value={ email }
            />
          </label>
        </div>
        <div className="label-login">
          <label htmlFor="password-input">
            <input
              className="login-input"
              type="password"
              placeholder="senha"
              id="password-input"
              name="password"
              data-testid="common_register__input-password"
              onChange={ handleChange }
            // value={ password }
            />
          </label>
        </div>
        <button
          className="button-login"
          type="submit"
          data-testid="common_register__button-register"
          disabled={ button }
        >
          Cadastrar
        </button>
        {/** Source https://stackoverflow.com/questions/52064303/reactjs-pass-props-with-redirect-component */}
        {token !== ''
          ? <Redirect to={ { pathname: '/customer/products', state: token } } /> : null}
        <p id="error-msg" data-testid="common_register__element-invalid_register">erro</p>
      </form>
    </div>
  );
}

export default Register;

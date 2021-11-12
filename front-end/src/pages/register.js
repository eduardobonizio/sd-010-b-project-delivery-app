import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router';
import { create } from '../services/user';
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
    console.log(register);
    if (register.data.token) setToken(register.data.token);
  };

  useEffect(() => {
    validateLogin();
  }, [userName, email, password, validateLogin]);

  return (
    <div>
      <form onSubmit={ handleSubmit }>
        <label htmlFor="login-input">
          Nome
          <input
            type="text"
            placeholder="Seu nome"
            id="name-input"
            name="userName"
            data-testid="common_register__input-name"
            onChange={ handleChange }
            // value={ userName }
          />
        </label>
        <label htmlFor="email-input">
          Email
          <input
            type="text"
            placeholder="email@trybeer.com"
            id="email-input"
            name="email"
            data-testid="common_register__input-email"
            onChange={ handleChange }
            // value={ email }
          />
        </label>
        <label htmlFor="password-input">
          Senha
          <input
            type="password"
            placeholder="********"
            id="password-input"
            name="password"
            data-testid="common_register__input-password"
            onChange={ handleChange }
            // value={ password }
          />
        </label>

        <button
          type="submit"
          data-testid="common_register__button-register"
          disabled={ button }
        >
          Cadastrar
        </button>
        {token !== ''
          ? <Redirect to={ { pathname: '/customer/products', state: token } } /> : null}
        <p id="error-msg" data-testid="common_register__element-invalid_register">erro</p>
      </form>
    </div>
  );
}

export default Register;

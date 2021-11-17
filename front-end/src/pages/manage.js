import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import Navbar from '../components/navbar';

const Joi = require('joi');

function ManagePage() {
  const [userName, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [type, setType] = useState('Vendedor');
  const [button, setButton] = useState(true);
  const minPasswordLength = 6;
  const minNameLength = 12;

  const manageSchema = Joi.object({
    userName: Joi.string().min(minNameLength).required(),
    email: Joi.string().email({ tlds: { allow: false } }).required(),
    password: Joi.string().min(minPasswordLength).required(),
  });

  const validateLogin = () => {
    const { error } = manageSchema.validate({ userName, email, password });
    if (!error) setButton(false);
    else setButton(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'name') setName(value);
    if (name === 'email') setEmail(value);
    if (name === 'password') setPassword(value);
    if (name === 'type') setType(value);

    console.log(value);

    validateLogin();
  };

  useEffect(() => {
    validateLogin();
    console.log(type);
  }, [userName, email, type, password, validateLogin]);

  return (
    <div>
      {/* <Navbar /> */}
      <h4>Cadastrar novo usuário</h4>
      <form>
        <label htmlFor="name-input">
          Nome
          <input
            type="text"
            placeholder="Nome e sobrenome"
            id="nome-input"
            name="name"
            data-testid="admin_manage__input-name"
            onChange={ handleChange }
            value={ userName }
          />
        </label>
        <label htmlFor="email-input">
          Email
          <input
            type="text"
            placeholder="seu-email@site.com.br"
            id="email-input"
            name="email"
            data-testid="admin_manage__input-email"
            onChange={ handleChange }
            value={ email }
          />
        </label>
        <label htmlFor="password-input">
          Senha
          <input
            type="password"
            placeholder="********"
            id="password-input"
            name="password"
            data-testid="admin_manage__input-password"
            onChange={ handleChange }
            value={ password }
          />
        </label>
        <label htmlFor="type">
          Tipo
          <select
            name="type"
            id="type"
            data-testid="admin_manage__select-role"
            onChange={ handleChange }
          >
            <option value="vendedor">Vendedor</option>
            <option value="cliente">Cliente</option>
            <option value="adm">Administrador</option>
          </select>
        </label>
        <button
          type="submit"
          data-testid="admin_manage__button-register"
          disabled={ button }
        >
          Cadastrar
        </button>
      </form>
    </div>
  );
}

export default ManagePage;

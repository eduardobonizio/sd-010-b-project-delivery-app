import React, { useState, useEffect } from 'react';

const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
const MIN_NAME = 12;
const MIN_PASSWORD = 6;

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disableBtn, setDisableBtn] = useState(true);
  const [showMessage] = useState(false);

  const sendNewUser = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    const isValidEmail = regex.test(email);
    const isValidName = name.length >= MIN_NAME;
    const isValidPassword = password.length >= MIN_PASSWORD;

    if (isValidEmail && isValidName && isValidPassword) {
      setDisableBtn(false);
    } else {
      setDisableBtn(true);
    }
  }, [name, email, password]);

  return (
    <div className="register">
      <h1>cadastro</h1>
      <form onSubmit={ sendNewUser }>
        <label htmlFor="name">
          <input
            id="name"
            type="text"
            placeholder="Seu nome"
            value={ name }
            onChange={ ({ target: { value } }) => setName(value) }
            data-testid="common_register__input-name"
          />
        </label>
        <label htmlFor="email">
          <input
            id="email"
            type="text"
            placeholder="Seu-email@site.com.br"
            value={ email }
            onChange={ ({ target: { value } }) => setEmail(value) }
            data-testid="common_register__input-email"
          />
        </label>
        <label htmlFor="senha">
          <input
            type="password"
            placeholder="******"
            value={ password }
            onChange={ ({ target: { value } }) => setPassword(value) }
            data-testid="common_register__input-password"
          />
        </label>
        <button
          type="submit"
          data-testid="common_register__button-register"
          disabled={ disableBtn }
        >
          Cadastrar
        </button>
      </form>
      {
        showMessage
        && (
          <span
            data-testid="common_register__element-invalid_register"
          >
            Ivalid
          </span>
        )
      }
    </div>
  );
}

export default Register;

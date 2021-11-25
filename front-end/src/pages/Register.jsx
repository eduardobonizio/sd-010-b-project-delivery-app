// import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router';
import { sendNewUser } from '../services/apis/servicesLogin';
import { setOnLocalStorage } from '../services/helpers/servicesLocalStorage';
import Context from '../context/Context';

const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
const MIN_NAME = 12;
const MIN_PASSWORD = 6;

function Register() {
  const history = useHistory();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disableBtn, setDisableBtn] = useState(true);
  const { setUser } = useContext(Context);
  const [showMessage, setShowMessage] = useState(false);
  const [showMessageError, setShowMessageError] = useState('Erro');

  const checkRole = (message) => {
    setOnLocalStorage('user', message);
    setUser(message);
    history.push('/customer/products');
  };

  const handleClick = async () => {
    const checkLogin = await sendNewUser(name, email, password);
    if (checkLogin.message.id) {
      const { message } = checkLogin;
      checkRole(message);
    } else {
      setShowMessageError('Email ou usuário já existente!');
      setShowMessage(true);
    }
  };

  // const sendNewUser = async (e) => {
  //   e.preventDefault();
  //   const path = 'http://localhost:3001/register';

  //   try {
  //     const { data } = await axios.post(path, { name, email, password });
  //     await setOnLocalStorage('user', data);
  //     history.push('/customer/products');
  //   } catch (err) {
  //     setShowMessageError('Email ou usuário já existente!');
  //     setShowMessage(true);
  //   }
  // };

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
      {/* <form onSubmit={ handleClick }> */}
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
        onClick={ handleClick }
      >
        Cadastrar
      </button>
      {/* </form> */}
      {
        showMessage
        && (
          <span
            data-testid="common_register__element-invalid_register"
          >
            { showMessageError }
          </span>
        )
      }
    </div>
  );
}

export default Register;

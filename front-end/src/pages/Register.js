import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { Context } from '../context/ContextGlobal';
import '../styles/Register.css';

const axios = require('axios');

function Register() {
  const {
    errorMessage,
    setErrorMessage,
    nameUser,
    setNameUser,
    emailRegister,
    setEmailRegister,
    passwordRegister,
    setPasswordRegister } = useContext(Context);

  const history = useHistory();
  const URL = 'http://localhost:3001/register';
  const passLength = 5;
  const nameLength = 11;
  const fiveSeconds = 5000;

  const register = async (name, email, password) => {
    try {
      const { data } = await axios.post(URL, { name, email, password });
      localStorage.setItem('user', JSON.stringify(data));
      history.push('/customer/products');
    } catch (error) {
      console.log(error);
      setErrorMessage('Email or name already exists');
      setTimeout(() => {
        setErrorMessage('');
      }, fiveSeconds);
    }
  };

  return (
    <div className="register__container">
      <h1>Cadastre-se!</h1>
      <form className="register-body">
        <h4 className="register-title">Nome</h4>
        <input
          value={ nameUser }
          className="register-input"
          autoComplete="off"
          onChange={ ({ target }) => setNameUser(target.value) }
          data-testid="common_register__input-name"
        />
        <h4 className="register-title">Email</h4>
        <input
          value={ emailRegister }
          className="register-input"
          onChange={ ({ target }) => setEmailRegister(target.value) }
          data-testid="common_register__input-email"
        />
        <h4 className="register-title">Senha</h4>
        <input
          type="password"
          value={ passwordRegister }
          className="register-input"
          onChange={ ({ target }) => setPasswordRegister(target.value) }
          data-testid="common_register__input-password"
        />
        <Button
          className="register-button"
          onClick={ () => register(nameUser, emailRegister, passwordRegister) }
          data-testid="common_register__button-register"
          disabled={
            !(/^[^\s@]+@[^\s@]+\.[^\s@]+$/).test(emailRegister)
        || passwordRegister.length <= passLength
        || nameUser.length <= nameLength
          }
        >
          CADASTRAR
        </Button>
      </form>
      {errorMessage
          && (
            <p
              className="register-errorMessage"
              data-testid="common_register__element-invalid_register"
            >
              { errorMessage }
            </p>)}
    </div>
  );
}

export default Register;

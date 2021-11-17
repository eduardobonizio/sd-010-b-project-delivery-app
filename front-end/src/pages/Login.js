import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { Context } from '../context/ContextGlobal';
import Logo from '../images/logo.png';
import '../styles/Login.css';

const axios = require('axios');

function Login() {
  const {
    errorMessage,
    setErrorMessage,
    emailLogin,
    setEmailLogin,
    passwordLogin,
    setPasswordLogin } = useContext(Context);

  const URL = 'http://localhost:3001/login';
  const history = useHistory();
  const passLength = 5;

  const login = async (email, password) => {
    try {
      const { data } = await axios.post(URL, { email, password });
      localStorage.setItem('user', JSON.stringify(data));
      history.push('/customer/products');
    } catch (error) {
      console.log(error);
      setErrorMessage('Email or password are invalid');
      setTimeout(() => {
        setErrorMessage('');
      } , 5000);
    }
  };

  return (
    <div className="login__container">
      <div className="login-heroTitle__container">
        <h1 className="login-hero">A experiência definitiva em entrega de cerveja!</h1>
      </div>
      <div className="login-sub__container">
        <img src={ Logo } alt="logo" className="login-logo" />
        <form className="login-body">
          <h4 className="login-title">Login</h4>
          <input
            value={ emailLogin }
            autoComplete="off"
            className="login-input"
            onChange={ ({ target }) => setEmailLogin(target.value) }
            data-testid="common_login__input-email"
          />
          <h4 className="login-title">Senha</h4>
          <input
            type="password"
            value={ passwordLogin }
            className="login-input"
            onChange={ ({ target }) => setPasswordLogin(target.value) }
            data-testid="common_login__input-password"
          />
          <Button
            className="login-button1"
            variant="success"
            onClick={ () => login(emailLogin, passwordLogin) }
            data-testid="common_login__button-login"
            disabled={
              !(/^[^\s@]+@[^\s@]+\.[^\s@]+$/).test(emailLogin)
            || passwordLogin.length <= passLength
            }
          >
            LOGIN
          </Button>
          <Link to="/register">
            <Button
              className="login-button2"
              data-testid="common_login__button-register"
            >
              Ainda não tenho conta
            </Button>
          </Link>
        </form>
        {errorMessage
          && (
            <p
              className="login-errorMessage"
              data-testid="common_login__element-invalid-email"
            >
              { errorMessage }
            </p>)}
      </div>
    </div>
  );
}

export default Login;

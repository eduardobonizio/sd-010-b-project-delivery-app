import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { Context } from '../context/ContextGlobal';
import '../styles/Login.css';

function Login() {
  const { errorMessage, email, setEmail, password, setPassword } = useContext(Context);
  const passLength = 5;

  return (
    <div className="login__container">
      <h1>Login</h1>
      <form className="login-body">
        <label htmlFor="login-title">
          <h4 className="login-title" id="login-title">Login</h4>
          <input
            id="login"
            value={ email }
            autoComplete="off"
            onChange={ ({ target }) => setEmail(target.value) }
            data-testid="common_login__input-email"
          />
        </label>
        <label htmlFor="login-title">
          <h4 className="login-title" id="login-title">Senha</h4>
          <input
            id="login"
            type="password"
            value={ password }
            onChange={ ({ target }) => setPassword(target.value) }
            data-testid="common_login__input-password"
          />
        </label>
        <Button
          className="login-button"
          type="submit"
          data-testid="common_login__button-login"
          disabled={
            !(/^[^\s@]+@[^\s@]+\.[^\s@]+$/).test(email)
          || password.length <= passLength
          }
        >
          LOGIN
        </Button>
        <Button
          className="login-button"
          data-testid="common_login__button-register"
        >
          Ainda não tenho conta

        </Button>
      </form>
      {errorMessage && <span>Error message</span>}
    </div>
  );
}

export default Login;

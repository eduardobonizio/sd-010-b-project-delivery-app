import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { Context } from '../context/ContextGlobal';
// import LoginGif from '../images/login.gif';
import '../styles/Login.css';

function Login() {
  const {
    errorLogin,
    emailLogin,
    setEmailLogin,
    passwordLogin,
    setPasswordLogin } = useContext(Context);

  const passLength = 5;

  return (
    <div className="login__container">
      <div className="login-sub__container">
        <div className="login-rightSide">
          <h1>Login</h1>
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
              className="login-button"
              type="submit"
              data-testid="common_login__button-login"
              disabled={
                !(/^[^\s@]+@[^\s@]+\.[^\s@]+$/).test(emailLogin)
              || passwordLogin.length <= passLength
              }
            >
              LOGIN
            </Button>
            <Link to="/register">
              {/* <Button
                className="login-button"
                data-testid="common_login__button-register"
              >
                Ainda não tenho conta
              </Button> */}
            </Link>
          </form>
          {errorLogin
            && <span data-testid="common_login__element-invalid-email">{ error }</span>}
        </div>
      </div>
    </div>
  );
}

export default Login;

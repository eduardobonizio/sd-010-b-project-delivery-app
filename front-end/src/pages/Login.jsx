import React from 'react';
import { Redirect } from 'react-router-dom';
import Button from '../components/Button';
import LoginForm from '../components/LoginForm';

import '../styles/loginPage.css';
import '../styles/formsRegister.css';

function Login() {
  const [redirect, setRedirect] = React.useState(false);
  return (
    <>
      { redirect ? <Redirect to="/register" /> : null }

      <div className="login-page">
        <main className="main-login">
          <LoginForm />
          <Button
            formbtn={ false }
            id="register-btn"
            className="register__btn"
            value="Ainda não tenho conta"
            testId="common_login__button-register"
            onClick={ () => setRedirect(true) }
          />
        </main>
        <span
          id="invalid-message"
          className="invalid-message"
          data-testid="common_login__element-invalid-email"
        >
          Login inválido
        </span>
      </div>

    </>
  );
}

export default Login;

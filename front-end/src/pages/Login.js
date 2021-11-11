import React from 'react';
import Button from '../components/Button';
import LoginForm from '../components/LoginForm';

import '../styles/loginPage.css';

function Login() {
  return (
    <section>
      <div className="login-page">
        <main className="main-login">
          <LoginForm />
          <Button
            formbtn={ false }
            id="register-btn"
            className="register-btn"
            value="Ainda não tenho conta"
            testId="common_login__button-register"
            onClick={ () => console.log('registro de usuario') }
          />
        </main>
        <span
          style={ { visibility: 'hidden' } }
          data-testid="common_login__element-invalid-email"
        >
          [Elemento oculto (Mensagens de erro)]
        </span>
      </div>
    </section>
  );
}

export default Login;

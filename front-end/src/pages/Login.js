import React from 'react';
import Button from '../components/Button';
import LoginForm from '../components/LoginForm';

import '../styles/loginPage.css';

function Login() {
  return (
    <>
      <div>
        <main>
          <LoginForm />
          <Button
            formbtn={ false }
            id="register-btn"
            className="register-btn"
            value="Ainda não tenho conta"
            data-testeid="common_login__button-login"
            onClick={ () => console.log('registro de usuario') }
          />
        </main>
        <span
          style={ { visibility: 'hidden' } }
          data-testeid="common_login__element-invalid-email"
        >
          [Elemento oculto (Mensagens de erro)]
        </span>
      </div>
    </>
  );
}

export default Login;

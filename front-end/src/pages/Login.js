import React from 'react';
import { Redirect } from 'react-router-dom';
import Button from '../components/Button';
import LoginForm from '../components/LoginForm';

import '../styles/loginPage.css';

function Login() {
  const [redirect, setRedirect] = React.useState(false);
  return (
    <>
      { redirect ? <Redirect to="/register" /> : null }
      <section>
        <div>
          <main>
            <LoginForm />
            <Button
              formbtn={ false }
              id="register-btn"
              className="register-btn"
              value="Ainda não tenho conta"
              testId="common_login__button-register"
              onClick={ () => setRedirect(true) }
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
    </>
  );
}

export default Login;

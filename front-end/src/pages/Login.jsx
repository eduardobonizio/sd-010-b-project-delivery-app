import React, { useState, useEffect } from 'react';
import rockGlass from '../images/rockGlass.svg';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isDisable, setIsDisable] = useState(true);
  useEffect(() => {
    const isValid = () => {
      const validEmail = email.match(/[a-z]+@[a-z]+.com/g);
      const minLength = 6;
      const validPassword = password.length > minLength;
      if (validEmail) {
        if (validPassword) {
          setIsDisable(false);
        }
      } else {
        setIsDisable(true);
      }
    };
    isValid();
  }, [email, password, isDisable]);

  return (
    <>
      <span className="logo">TRYBE</span>
      <object className="rocksGlass" type="image/svg+xml" data={ rockGlass }>
        Glass
      </object>
      <form action="">
        <label htmlFor="loginInput">
          Login
          <input
            type="email"
            name="loginInput"
            placeholder="email@trybeer.com.br"
            data-testid="common_login__input-email"
            onChange={ ({ target }) => setEmail(target.value) }
          />
        </label>
        <label htmlFor="passwordInput">
          Senha
          <input
            type="password"
            name="passwordInput"
            placeholder="***********"
            data-testid="common_login__input-password"
            onChange={ ({ target }) => setPassword(target.value) }
          />
        </label>
        <button
          type="button"
          data-testid="common_login__button-login"
          disabled={ isDisable }
        >
          LOGIN
        </button>
        <button
          type="button"
          data-testid="common_login__button-register"
        >
          Ainda não tenho conta
        </button>
        <span data-testid="common_login__element-invalid-email">
          Isso vai ficar oculto
        </span>
      </form>
    </>
  );
}

export default Login;

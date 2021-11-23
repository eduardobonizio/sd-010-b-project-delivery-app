import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import setLoginLocalStorage from '../helpers/setLoginLocalStorage';

function Login() {
  const history = useHistory();
  const [loginButtonDisabled, setLoginButtonDisabled] = useState(true);
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [isEmailInvalid, setIsEmailInvalid] = useState(false);

  const minPasswordLength = 6;

  const onChange = (value, setState) => {
    setIsEmailInvalid(false);
    setState(value);
  };

  useEffect(() => {
    const isDisabled = ((() => {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (password.length >= minPasswordLength && re.test(login)) {
        setLoginButtonDisabled(false);
      } else {
        setLoginButtonDisabled(true);
      }
    }));
    isDisabled();
  }, [password, login]);

  return (
    <div>
      <form>
        <h1>LOGIN</h1>
        <label htmlFor="username">
          Email:
          <input
            autoComplete
            value={ login }
            onChange={ (e) => onChange(e.target.value, setLogin) }
            placeholder="email@tryber.com"
            data-testid="common_login__input-email"
          />
        </label>
        <label htmlFor="password">
          Senha:
          <input
            type="password"
            value={ password }
            onChange={ (e) => onChange(e.target.value, setPassword) }
            placeholder="Digite sua senha"
            data-testid="common_login__input-password"
          />
        </label>
      </form>
      <button
        data-testid="common_login__button-login"
        disabled={ loginButtonDisabled }
        type="button"
        onClick={ () => setLoginLocalStorage({ login, password, history }) }
      >
        ENTRAR
      </button>
      <Link to="/register">
        <button
          data-testid="common_login__button-register"
          type="button"
        >
          Ainda não tenho conta
        </button>
      </Link>
      {isEmailInvalid ? (
        <h4
          data-testid="common_login__element-invalid-email"
        >
          Email ou senha incorretos

        </h4>)
        : null}
    </div>
  );
}

export default Login;

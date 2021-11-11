import React, { useState, useEffect } from 'react';
// import { Box } from '@mui/material';
// import PropTypes from 'prop-types';
function Login() {
  const [loginButtonDisabled, setLoginButtonDisabled] = useState(true);
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [isEmailInvalid, setIsEmailInvalid] = useState(false);

  const minPasswordLength = 6;
  // const isDisabled = ((() => {
  //   if (password.length >= minPasswordLength && re.test(login)) {
  //     setLoginButtonDisabled(false);
  //   } else {
  //     setLoginButtonDisabled(true);
  //   }
  // }));
  const onChange = (value, setState) => {
    setIsEmailInvalid(false);
    setState(value);
  };
  const fetchUser = () => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: login, password }),
    };
    fetch('http://localhost:3001/login', requestOptions)
      .then((response) => {
        console.log(response);
        if (response.ok === false) {
          setIsEmailInvalid(true);
        }
      });
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
            value={ login }
            onChange={ (e) => onChange(e.target.value, setLogin) }
            placeholder="email@tryber.com"
            data-testid="common_login__input-email"
          />
        </label>
        <label htmlFor="password">
          Senha:
          <input
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
        onClick={ () => fetchUser() }
      >
        ENTRAR

      </button>
      <button
        data-testid="common_login__button-register"
        type="button"
      >
        Ainda não tenho conta
      </button>
      {isEmailInvalid ? (
        <h4
          data-testid="common_login__element-invalid-email"
        >
          Email inválido

        </h4>)
        : null}
    </div>
  );
}

export default Login;

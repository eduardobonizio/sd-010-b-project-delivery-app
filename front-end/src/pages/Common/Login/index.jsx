import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import validateEmail from './functions';
import * as style from './style';
// import { apiRequestLogin } from '../../../services/login/apiRequestLogin';
// const axios = require('axios');

export default function Login() {
  const [validEmail, setValidEmail] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const logIn = () => {
    console.log('LogIn efetuado');
  };

  useEffect(() => {
    setValidEmail(validateEmail(email));
  }, [email]);

  // Chamada da API utilizando apiRequestLogin

  // useEffect(async () => {
  //   const result = await apiRequestLogin(
  //     {
  //       email: 'maado@teste.com',
  //       password: '123456789',
  //     },
  //   );
  //   console.log('resultado: ', result);
  // }, []);

  useEffect(() => {
    const enableBtn = () => {
      if (validEmail) {
        setDisabled(false);
      } else {
        setDisabled(true);
      }
    };

    enableBtn();
  }, [email, password, validEmail]);

  return (
    <style.CommonContainer>

      <style.LoginContainer />

      <style.CommonForm>
        <style.InputLabel>
          Login
          <br />
          <style.InputEmail
            type="text"
            onChange={ (e) => setEmail(e.target.value) }
            data-testid="common_login__input-email"
          />
        </style.InputLabel>
        <style.InputLabel>
          Senha
          <br />
          <style.InputPassword
            type="password"
            onChange={ (e) => setPassword(e.target.value) }
            data-testid="common_login__input-password"
          />
        </style.InputLabel>
        <style.LoginButton
          disabled={ disabled }
          type="submit"
          data-testid="common_login__button-login"
          onClick={ () => logIn() }
        >
          Login
        </style.LoginButton>
        <style.RegisterButton type="submit" data-testid="common_login__button-register">
          <Link to="/register">
            Ainda nao tenho conta
          </Link>
        </style.RegisterButton>
        <p
          id="erro"
          data-testid={ `common_login__element-invalid-email${'elemento'}` }
        >
          {' '}
        </p>

      </style.CommonForm>
    </style.CommonContainer>
  );
}

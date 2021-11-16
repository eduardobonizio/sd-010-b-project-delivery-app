import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import DeliveryContext from '../context/DeliveryContext';

const Login = () => {
  const [isValidPW, setIsValidPW] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const navigate = useNavigate();
  const { email, setEmail, password, setPassword, validarEmail, validarSenha,
  } = useContext(DeliveryContext);

  useEffect(() => {
    console.log('loop');
    if (validarEmail(email) && validarSenha(password)) {
      return setIsDisabled(false);
    }
    return setIsDisabled(true);
  }, [email, password, validarEmail, validarSenha]);

  const buttonLogin = async () => {
    try {
      const { data } = await axios.post('http://localhost:3001/login', { email, password });
      localStorage.setItem('token', `${JSON.stringify(data)}`);
    } catch (error) {
      setIsValidPW(true);
      return error;
    }
    return navigate('/customer/products');
  };

  // const validarEmail = (e) => {
  //   const emailTester = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/i;

  //   if (!emailTester.test(e)) return false;

  //   return true;
  // };

  // const validarSenha = (senha) => {
  //   const SENHA_LENGTH = 6;
  //   console.log(senha);

  //   if (senha.length < SENHA_LENGTH) {
  //     return false;
  //   }
  //   return true;
  // };

  const handleChange = ({ target }) => {
    const { value, name } = target;
    if (name === 'email') {
      setEmail(value);
    } else {
      setPassword(value);
    }
  };

  const TEST_INVALID_EMAIL = 'common_login__element-invalid-email';

  return (
    <div className="App">
      <form action="">
        <input
          data-testid="common_login__input-email"
          type="text"
          onChange={ (event) => handleChange(event) }
          name="email"
          value={ email }
          placeholder="E-mail"
        />
        <input
          data-testid="common_login__input-password"
          type="text"
          name="password"
          onChange={ (event) => handleChange(event) }
          value={ password }
          placeholder="Password"
        />
        <button
          data-testid="common_login__button-login"
          type="button"
          onClick={ buttonLogin }
          disabled={ isDisabled }
        >
          LOGIN
        </button>
        <button
          data-testid="common_login__button-register"
          onClick={ () => navigate('/register') }
          type="button"
        >
          Ainda não tenho conta
        </button>
        {
          isValidPW
            ? <span data-testid={ TEST_INVALID_EMAIL }>Password ou E-mail invalido!</span>
            : null
        }
      </form>
    </div>
  );
};

export default Login;

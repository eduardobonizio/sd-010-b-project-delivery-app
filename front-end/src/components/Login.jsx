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
    if (validarEmail(email) && validarSenha(password)) {
      return setIsDisabled(false);
    }
    return setIsDisabled(true);
  }, [email, password, validarEmail, validarSenha]);

  const buttonLogin = async () => {
    try {
      const { data } = await axios.post('http://localhost:3001/login', { email, password });
      localStorage.setItem('token', `${JSON.stringify(data)}`);
      return navigate('/customer/products');
    } catch (error) {
      setIsValidPW(true);
      return error;
    }
  };

  const TEST_INVALID_EMAIL = 'common_login__element-invalid-email';

  return (
    <div className="App">
      <form action="">
        <input
          data-testid="common_login__input-email"
          type="text"
          onChange={ ({ target }) => setEmail(target.value) }
          name="email"
          value={ email }
          placeholder="E-mail"
        />
        <input
          data-testid="common_login__input-password"
          type="text"
          name="password"
          onChange={ ({ target }) => setPassword(target.value) }
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

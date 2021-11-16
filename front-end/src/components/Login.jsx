import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import DeliveryContext from '../context/DeliveryContext';

const Login = () => {
  const [isValidPW, setIsValidPW] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const navigate = useNavigate();
  const { email, setEmail, password, setPassword, validarEmail, validarSenha,
  } = useContext(DeliveryContext);

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

  const handleChange = ({ target }) => {
    const { value, name } = target;
    name === 'email' ? setEmail(value) : setPassword(value);
    return setIsValid(!(validarEmail(email) && validarSenha(password)));
  };

  // const isValid = () => {
  //   if (validarEmail(email) && validarSenha(password)) {
  //     return false;
  //   }
  //   return true;
  // };

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
          disabled={ isValid }
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

import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../services/API';
import '../styles/Login.css';
import DeliveryContext from '../context/DeliveryContext';

const Login = () => {
  const [isValidPW, setIsValidPW] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const navigate = useNavigate();
  const { email, setEmail, password, setPassword, validarEmail, validarSenha,
  } = useContext(DeliveryContext);

  useEffect(() => {
    if (localStorage.user) {
      const { role } = JSON.parse(localStorage.user);
      switch (role) {
      case 'administrator':
        return navigate('/admin/manage');
      case 'seller':
        return navigate('/seller/orders');
      case 'customer':
        return navigate('/customer/products');
      default:
        break;
      }
    }

    if (validarEmail(email) && validarSenha(password)) {
      return setIsDisabled(false);
    }
    return setIsDisabled(true);
  }, [email, navigate, password, validarEmail, validarSenha]);

  const buttonLogin = async () => {
    try {
      const data = await login(email, password);
      localStorage.setItem('user', `${JSON.stringify(data)}`);
      setPassword('');
      if (data.role === 'seller') {
        return navigate('/seller/orders');
      }
      if (data.role === 'administrator') {
        return navigate('/admin/manage');
      }
      return navigate('/customer/products');
    } catch (error) {
      setIsValidPW(true);
      return error;
    }
  };

  const TEST_INVALID_EMAIL = 'common_login__element-invalid-email';

  return (
    <div className="App">
      <form action="" className="form-login">
        {
          isValidPW
            ? <span data-testid={ TEST_INVALID_EMAIL }>Password ou E-mail invalido!</span>
            : null
        }
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
          type="password"
          name="password"
          onChange={ ({ target }) => setPassword(target.value) }
          value={ password }
          placeholder="Password"
        />
        <div className="conteiner-login-button">
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
        </div>
      </form>
    </div>
  );
};

export default Login;

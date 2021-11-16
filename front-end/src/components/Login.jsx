import axios from 'axios';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import DeliveryContext from '../context/DeliveryContext';

const Login = () => {
  const navigate = useNavigate();
  const { email, setEmail, password, setPassword } = useContext(DeliveryContext);

  const buttonLogin = async (event) => {
    event.preventDefault();
    try {
      const { data: { token } } = await axios.post('http://localhost:3001/login/', { email, password });
      localStorage.setItem('token', `${token}`);
      navigate('/products');
    } catch (error) {
      return error;
    }
  };

  const handleChange = ({ target }) => {
    const { value, name } = target;
    return name === 'email' ? setEmail(value) : setPassword(value);
  };

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
          disabled={ false }
          type="button"
          onClick={ buttonLogin }
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
      </form>
    </div>
  );
};

export default Login;

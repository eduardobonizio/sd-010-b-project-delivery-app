import axios from 'axios';
import React, { useContext } from 'react';
// import './App.css';

import DeliveryContext from '../context/DeliveryContext';

const Login = () => {
  const { email, setEmail, password, setPassword } = useContext(DeliveryContext);

  const buttonLogin = async (event) => {
    event.preventDefault();
    const { data: { token } } = await axios.post('http://localhost:3001/login/', { email, password });
    localStorage.setItem('token', `${token}`);
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
        type="button" onClick={ buttonLogin }>Entrar</button>
      </form>
    </div>
  );
};

export default Login;

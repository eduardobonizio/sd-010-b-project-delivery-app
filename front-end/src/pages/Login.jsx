import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setEmail, setPassword } from '../actions';

function Login() {
  const dispatch = useDispatch();
  const [email, setStateEmail] = useState();
  const [password, setStatePassword] = useState();
  const [disabled, setDisable] = useState(true);
  const [hideErrorMessage, setHideErrorMessage] = useState(true);
  const navigate = useNavigate();

  const changeDisabled = () => {
    if (email && password) {
      setDisable(false);
    }
  };

  const dispatchOnSubmit = () => {
    dispatch(setEmail(email));
    dispatch(setPassword(password));
    const fail = true;
    if (fail) return setHideErrorMessage(!hideErrorMessage);
    return navigate('/customer/products');
  };

  return (
    <div className="login">
      <p>LOGO</p>
      <p>NOME DO APP</p>
      <span hidden={ hideErrorMessage }>
        Usuário/Senha inválidos
      </span>
      <label htmlFor="email">
        Login
        <input
          name="email"
          id="email"
          data-testid="common_login__input-email"
          onChange={ (e) => setStateEmail(e.target.value) }
          type="text"
        />
      </label>
      <label htmlFor="password">
        Senha
        <input
          data-testid="common_login__input-email"
          onChange={ (e) => {
            setStatePassword(e.target.value);
            changeDisabled();
          } }
          type="password"
        />
      </label>
      <button
        data-testid="common_login__button-login"
        disabled={ disabled }
        onClick={ dispatchOnSubmit }
        type="button"
      >
        LOGIN
      </button>
      <button
        onClick={ () => navigate('/register') }
        data-testid="common_login__button-register"
        type="button"
      >
        Ainda não tenho conta
      </button>
    </div>
  );
}

export default Login;

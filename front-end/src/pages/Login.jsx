import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { setEmail, setPassword } from '../actions';

function Login() {
  const dispatch = useDispatch();
  const [email, setStateEmail] = useState();
  const [password, setStatePassword] = useState();
  const [disabled, setDisable] = useState(true);
  const navigate = useNavigate();

  const changeDisabled = () => {
    if (email && password) {
      setDisable(false);
    }
  };

  const dispatchOnSubmit = () => {
    dispatch(setEmail(email));
    dispatch(setPassword(password));
    return <Navigate to="/customer/products" />;
  };

  return (
    <div className="login">
      <p>LOGO</p>
      <p>NOME DO APP</p>
      <input
        data-testid="common_login__input-email"
        onChange={ (e) => setStateEmail(e.target.value) }
        type="text"
      />
      <input
        data-testid="common_login__input-email"
        onChange={ (e) => {
          setStatePassword(e.target.value);
          changeDisabled();
        } }
        type="password"
      />
      <button
        data-testid="common_login__button-login"
        disabled={ disabled }
        onClick={ dispatchOnSubmit }
        type="button"
      >
        LOGIN
      </button>
      <Link to="/register">
        <Button type="button">
          Ainda não tenho conta
        </Button>
      </Link>
    </div>
  );
}

export default Login;

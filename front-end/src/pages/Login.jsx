import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';
import { NavLink as RRNavLink, Navigate } from 'react-router-dom';
import { setEmail, setPassword } from '../actions';

function Login() {
  const dispatch = useDispatch();
  const [email, setStateEmail] = useState();
  const [password, setStatePassword] = useState();
  const [disabled, setDisable] = useState(true);
  const [changePage, setChangePage] = useState(false);

  const changeDisabled = () => {
    if (email && password) {
      setDisable(false);
    }
  };

  const dispatchOnSubmit = () => {
    dispatch(setEmail(email));
    dispatch(setPassword(password));
    redirect('/customer/products');
  };

  const toRegister = () => {
    setChangePage(true);
    console.log(changePage);
    return <Navigate to="/register" />;
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
      <Button
        onClick={ toRegister }
        type="button"
        tag={ RRNavLink }
        to="/register"
      >
        Ainda não tenho conta
      </Button>
      {/* <button
        data-testid="common_login__button-register"
        type="button"
        onClick={ toRegister }
      >
        Ainda não tenho conta
      </button> */}
    </div>
  );
}

export default Login;

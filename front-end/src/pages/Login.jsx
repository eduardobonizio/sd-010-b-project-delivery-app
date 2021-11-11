import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setEmail, setPassword } from '../actions';
import EmailInput from '../components/EmailInput';
import LoginButton from '../components/LoginButton';
import PasswordInput from '../components/PasswordInput';
import RegisterButton from '../components/RegisterButton';

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
      <span data-testid="common_login__element-invalid-email" hidden={ hideErrorMessage }>
        Usuário/Senha inválidos
      </span>
      <EmailInput setStateEmail={ setStateEmail } />
      <PasswordInput
        setStatePassword={ setStatePassword }
        changeDisabled={ changeDisabled }
      />
      <LoginButton dispatchOnSubmit={ dispatchOnSubmit } disabled={ disabled } />
      <RegisterButton />
    </div>
  );
}

export default Login;

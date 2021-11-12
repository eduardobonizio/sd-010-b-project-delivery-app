import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setEmail, setPassword } from '../actions';
import EmailInput from '../components/EmailInput';
import LoginButton from '../components/LoginButton';
import PasswordInput from '../components/PasswordInput';
import LoginErrorMessage from '../components/LoginErrorMessage';
import RegisterButton from '../components/RegisterButton';
import { validateEmailFormat, validatePassword } from '../helpers/validation';

function Login() {
  const dispatch = useDispatch();
  const [email, setStateEmail] = useState('');
  const [password, setStatePassword] = useState('');
  const [disabled, setDisable] = useState(true);
  const [hideErrorMessage, setHideErrorMessage] = useState(true);
  const navigate = useNavigate();
  const emailTestId = 'common_login__input-email';
  const passwordTestId = 'common_login__input-password';
  const title = 'Login';

  useEffect(() => {
    if (password && email) {
      if (validateEmailFormat(email) && validatePassword(password)) {
        setDisable(false);
      } else {
        setDisable(true);
      }
    }
  }, [email, password]);

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
      <LoginErrorMessage hideErrorMessage={ hideErrorMessage } />
      <EmailInput
        title={ title }
        setStateEmail={ setStateEmail }
        emailTestId={ emailTestId }
      />
      <PasswordInput
        setStatePassword={ setStatePassword }
        passwordTestId={ passwordTestId }
      />
      <LoginButton dispatchOnSubmit={ dispatchOnSubmit } disabled={ disabled } />
      <RegisterButton />
    </div>
  );
}

export default Login;

import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import axios from 'axios';

import RedirectToRegister from '../../components/RegisterComponents/RedirectToRegister';

import '../../styles/login.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disabledBtn, setDisabledBtn] = useState(true);
  const [loginError, setLoginError] = useState(false);
  const [redirectPage, setRedirectPage] = useState('');
  const [userLogged, setUserLogged] = useState(false);

  const validationEmailPwd = () => {
    const regex = /^[a-z0-9._]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    const Email = regex.test(email);
    const Pwd = password.length;
    const minPwdLength = 6;

    if (Email && Pwd >= minPwdLength) {
      setDisabledBtn(false);
    } else {
      setDisabledBtn(true);
    }
  };

  const handleLocalStorage = (user) => {
    const { userRole, userName, userEmail, key, userId } = user;
    localStorage.setItem('user', JSON.stringify({
      userId,
      name: userName,
      email: userEmail,
      role: userRole,
      token: key,
    }));
  };

  const login = async () => {
    setLoginError(false);
    await axios({
      method: 'post',
      url: 'http://localhost:3001/login',
      data: {
        login: email,
        password,
      },
    })
      .then(({ data }) => {
        switch (true) {
        case (data.userRole === 'administrator'):
          setRedirectPage('/admin/manage');
          break;
        case (data.userRole === 'seller'):
          setRedirectPage('/seller/orders');
          break;
        default:
          setRedirectPage('/customer/products');
        }
        handleLocalStorage(data);
        setUserLogged(true);
      })
      .catch(() => {
        setLoginError(true);
      });
  };

  useEffect(validationEmailPwd, [email, password]);

  return (
    <div className="login-content">
      <form className="form-login">
        <div>
          <label className="label-login" htmlFor="email">
            Login
            <input
              autoComplete="off"
              className="input-login"
              type="text"
              name="email"
              data-testid="common_login__input-email"
              onChange={ (e) => setEmail(e.target.value) }
            />
          </label>
          <label className="label-login" htmlFor="password">
            Senha
            <input
              autoComplete="off"
              className="input-login"
              type="password"
              name="password"
              data-testid="common_login__input-password"
              onChange={ (e) => setPassword(e.target.value) }
            />
          </label>
          <button
            className="login-btn"
            type="button"
            data-testid="common_login__button-login"
            disabled={ disabledBtn }
            onClick={ async () => login() }
          >
            LOGIN
          </button>
          <RedirectToRegister />
        </div>
      </form>
      {
        loginError
        && <span data-testid="common_login__element-invalid-email">Login Inválido!</span>
      }
      {
        userLogged && <Redirect to={ redirectPage } />
      }
    </div>
  );
}

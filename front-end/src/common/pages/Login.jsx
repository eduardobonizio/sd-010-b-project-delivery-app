import React, { useEffect, useState } from 'react';
import RedirectToRegister from '../../components/RegisterComponents/RedirectToRegister';

import '../../styles/login.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disabledBtn, setDisabledBtn] = useState(true);

  const validationEmailPwd = () => {
    const regex = /^[a-z0-9._]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    const Email = regex.test(email);
    console.log(Email);
    const Pwd = password.length;
    const minPwdLength = 6;

    if (Email && Pwd >= minPwdLength) {
      setDisabledBtn(false);
    } else {
      setDisabledBtn(true);
    }
  };

  useEffect(validationEmailPwd, [email, password]);

  return (
    <div className="login-content">
      <form action="">
        <div>
          <label htmlFor="email">
            Login
            <input
              autoComplete="off"
              type="text"
              name="email"
              data-testid="common_login__input-email"
              onChange={ (e) => setEmail(e.target.value) }
            />
          </label>
          <label htmlFor="password">
            Senha
            <input
              autoComplete="off"
              type="password"
              name="password"
              data-testid="common_login__input-password"
              onChange={ (e) => setPassword(e.target.value) }
            />
          </label>
          <button
            type="submit"
            data-testid="common_login__button-login"
            disabled={ disabledBtn }
          >
            LOGIN
          </button>
          <RedirectToRegister />
        </div>
      </form>
      <span
        data-testid="common_login__element-invalid-email"
        hidden
      >
        Erro!
      </span>
    </div>
  );
}

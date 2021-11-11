import React, { useState } from 'react';
// import PropTypes from 'prop-types';
function Login() {
  const [loginButtonDisabled, setLoginButtonDisabled] = useState(true);
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const minPasswordLength = 6;
  const isDisabled = () => {
    if (re.test(login) && password.length > minPasswordLength) {
      setLoginButtonDisabled(false);
    } else {
      setLoginButtonDisabled(true);
    }
  };
  const onChange = (value, setState) => {
    setState(value);
    isDisabled();
  };
  return (
    <div>
      <form>
        <h1>LOGIN</h1>
        <label htmlFor="username">
          Email:
          <input
            value={ login }
            onChange={ (e) => onChange(e.target.value, setLogin) }
            placeholder="email@tryber.com"
            data-testid="common_login__input-email"
          />
        </label>
        <label htmlFor="password">
          Senha:
          <input
            value={ password }
            onChange={ (e) => onChange(e.target.value, setPassword) }
            placeholder="Digite sua senha"
            data-testid="common_login__input-password"
          />
        </label>
      </form>
      <button
        data-testid="common_login__button-login"
        disabled={ loginButtonDisabled }
        type="button"
      >
        ENTRAR

      </button>
      <button
        data-testid="common_login__button-register"
        type="button"
      >
        Ainda não tenho conta
      </button>
    </div>
  );
}

// NavBar.propTypes = {
//   username: PropTypes.string.isRequired,
//   user: PropTypes.string.isRequired,
// };

export default Login;

import React, { useState } from 'react';

function Login() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [button, setButton] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'login') setLogin(value);
    if (name === 'password') setPassword(value);
    setButton(false);
    console.log(login, password);
  };

  // handleChange({ target }) {
  //   const { name } = target;
  //   const value = target.type === 'checkbox' ? target.checked : target.value;

  //   this.setState({
  //     [name]: value,
  //   });
  // }

  return (
    <div>
      <form>
        <label htmlFor="login-input">
          Login
          <input
            type="text"
            placeholder="email@trybeer.com"
            id="login-input"
            name="login"
            data-testid="common_login__input-email"
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="password-input">
          Senha
          <input
            type="password"
            placeholder="********"
            id="password-input"
            name="password"
            data-testid="common_login__input-password"
            onChange={ handleChange }
          />
        </label>

        <button
          type="submit"
          data-testid="common_login__button-login"
          disabled={ button }
        >
          Login
        </button>
        <button
          type="button"
          data-testid="common_login__button-register"
        >
          Ainda não tenho conta
        </button>

        <p id="error-msg" data-testid="common_login__element-invalid-email">erro</p>
      </form>
    </div>
  );
}

export default Login;

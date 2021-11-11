import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      disableBtn: true,
      errorMessage: false,
    };

    this.changeState = this.changeState.bind(this);
    this.validateData = this.validateData.bind(this);
  }

  changeState(key, value) {
    this.setState({ [key]: value });
  }

  validateData() {
    // Ref- https://pt.stackoverflow.com/questions/1386/express%C3%A3o-regular-para-valida%C3%A7%C3%A3o-de-e-mail
    const validation = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    const MIN_LEN_PASS = 6;

    const email = document.getElementById('email-login').value;
    const password = document.getElementById('password-login').value;

    if (validation.test(email) && password.length >= MIN_LEN_PASS) {
      this.setState({ disableBtn: false });
    } else {
      this.setState({ disableBtn: true });
    }
  }

  render() {
    const { disableBtn, errorMessage } = this.state;
    const x = 'common_login__element-invalid-email';

    return (
      <div>
        <h1>Login page</h1>

        <label htmlFor="email-login">
          Login
          <input
            type="email"
            id="email-login"
            data-testid="common_login__input-email"
            onChange={ () => this.validateData() }
          />
        </label>

        <label htmlFor="password-login">
          Senha
          <input
            type="password"
            id="password-login"
            data-testid="common_login__input-email"
            onChange={ () => this.validateData() }
          />
        </label>

        <button
          type="button"
          data-testid="common_login__button-login"
          // onClick={ () => this.setState({ errorMessage: true }) }
          disabled={ disableBtn }
        >
          Login
        </button>

        <button
          type="button"
          data-testid="common_login__button-register"
        >
          Ainda não tenho conta
        </button>

        {errorMessage && <div data-testid={ x }> Mensagem de erro</div>}

      </div>
    );
  }
}

export default Login;

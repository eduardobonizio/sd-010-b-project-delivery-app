import React, { useState } from 'react';

const RegisterComponent = () => {
  const [name, setName] = useState({
    invalidName: true,
  });
  const [email, setEmail] = useState({
    invalidEmail: true,
  });
  const [password, setPassword] = useState({
    invalidPassword: true,
  });
  const [msgError, setMsgError] = useState();

  const handleChangeName = ({ value }) => {
    const twelve = 12;
    if (value.length > twelve) {
      setName({
        invalidName: false,
      });
      setMsgError('');
    } else {
      setName({
        invalidName: true,
      });
      setMsgError('*Invalid name');
    }
  };

  const handleChangeEmail = ({ value }) => {
    const regexEmail = /^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/;
    if (regexEmail.test(value)) {
      setEmail({
        invalidEmail: false,
      });
      setMsgError('');
    } else {
      setEmail({
        invalidEmail: true,
      });
      setMsgError('*Invalid email');
    }
  };
  const handleChangePassword = ({ value }) => {
    const six = 6;
    if (value.length >= six) {
      setPassword({
        invalidPassword: false,
      });
      setMsgError('');
    } else {
      setPassword({
        invalidPassword: true,
      });
      setMsgError('*Invalid password');
    }
  };

  return (
    <section className="container-register">
      <div>
        <h3>Cadastro</h3>
      </div>
      <div className="form-register">
        <label className="label-register" htmlFor="name">
          Nome
          <input
            onChange={ ({ target }) => handleChangeName(target) }
            data-testid="common_register__input-name"
            className="input-general"
            type="text"
            name="name"
          />
        </label>
        <label className="label-register" htmlFor="email">
          Email
          <input
            onChange={ ({ target }) => handleChangeEmail(target) }
            data-testid="common_register__input-email"
            className="input-general"
            type="text"
            name="email"
          />
        </label>
        <label className="label-register" htmlFor="password">
          Senha
          <input
            onChange={ ({ target }) => handleChangePassword(target) }
            data-testid="common_register__input-password"
            className="input-general"
            type="password"
            name="password"
          />
        </label>
        <button
          disabled={ name.invalidName || email.invalidEmail || password.invalidPassword }
          data-testid="common_register__button-register"
          className="btn-general"
          type="button"
        >
          CADASTRAR
        </button>
      </div>
      <div id="message-error">
        <span
          data-testId="common_register__element-invalid_register"
        >
          { msgError }
        </span>
      </div>
    </section>
  );
};

export default RegisterComponent;

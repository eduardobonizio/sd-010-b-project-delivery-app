import React, { useState } from 'react';
import md5 from 'crypto';
import { Redirect } from 'react-router-dom';

const RegisterComponent = () => {
  const [loginAllowed, setLoginAllowed] = useState(false);
  const [name, setName] = useState({
    invalidName: true,
    fieldName: '',
  });
  const [email, setEmail] = useState({
    invalidEmail: true,
    fieldEmail: '',
  });
  const [password, setPassword] = useState({
    invalidPassword: true,
    fieldPassword: '',
  });
  const [msgError, setMsgError] = useState();

  const handleChangeName = ({ value }) => {
    const twelve = 12;
    if (value.length > twelve) {
      setName({
        invalidName: false,
        fieldName: value,
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
    const regexEmail = /\S+@\S+\.\S+/;
    if (regexEmail.test(value)) {
      setEmail({
        invalidEmail: false,
        fieldEmail: value,
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
      // referencia https://gist.github.com/kitek/1579117
      const passwordMd5 = md5.createHash('md5').update(value).digest('hex');
      setPassword({
        invalidPassword: false,
        fieldPassword: passwordMd5,
      });
      setMsgError('');
    } else {
      setPassword({
        invalidPassword: true,
      });
      setMsgError('*Invalid password');
    }
  };

  const handleClick = (async () => {
    const response = await fetch('http://localhost:3001/createUser', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name.fieldName,
        email: email.fieldEmail,
        password: password.fieldPassword,
      }),
    });
    const data = await response.json();
    console.log(data);
    if (data.message) {
      setMsgError(data.message);
    } else {
      setName({
        invalidName: true,
        fieldName: '',
      });
      setEmail({
        invalidEmail: true,
        fieldEmail: '',
      });
      setPassword({
        invalidPassword: true,
        fieldPassword: '',
      });
      setLoginAllowed(true);
    }
    return data;
  });

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
          onClick={ handleClick }
          disabled={ name.invalidName || email.invalidEmail || password.invalidPassword }
          data-testid="common_register__button-register"
          className="btn-general"
          type="button"
        >
          CADASTRAR
        </button>
      </div>
      <div className="message-error">
        <span
          data-testid="common_register__element-invalid_register"
        >
          { msgError }
        </span>
      </div>
      { loginAllowed && <Redirect to="/customer/products" />}
    </section>
  );
};

export default RegisterComponent;

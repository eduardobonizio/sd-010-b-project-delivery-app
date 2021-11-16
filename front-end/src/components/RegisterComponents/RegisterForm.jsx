import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import RegisterErrorMessages from './RegisterErrorMessages';

export default function RegisterForm() {
  const [redirectToProducts, setRedirectToProducts] = useState(false);
  const [registerButtonDisabled, setRegisterButtonDisabled] = useState(false);
  const [userName, setUserName] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [somethingIsWrong, setSomethingIsWrong] = useState({
    nameRegister: true,
    emailRegister: true,
    passwordRegister: true,
    alreadyExists: false,
  });

  useEffect(() => {
    const somethingIsMissing = () => {
      const { nameRegister, emailRegister, passwordRegister } = somethingIsWrong;
      if (nameRegister === true
        || emailRegister === true
        || passwordRegister === true) {
        setRegisterButtonDisabled(true);
      } else {
        setRegisterButtonDisabled(false);
      }
    };
    somethingIsMissing();
  }, [somethingIsWrong]);

  const changeName = (value) => {
    const maxCharacterNameLength = 12;
    console.log(/[a-zA-Z]+/i.test(value));
    if (value.length < maxCharacterNameLength) {
      setSomethingIsWrong({
        ...somethingIsWrong,
        nameRegister: true,
      });
    } else {
      setSomethingIsWrong({
        ...somethingIsWrong,
        nameRegister: false,
      });
    }
    setUserName(value);
  };

  const changeEmail = (value) => {
    if (!/[\w.-]+@[a-zA-Z]+\.+[a-zA-Z]+/i.test(value)) {
      setSomethingIsWrong({
        ...somethingIsWrong,
        emailRegister: true,
      });
    } else {
      setSomethingIsWrong({
        ...somethingIsWrong,
        emailRegister: false,
      });
      setUserEmail(value);
    }
  };

  const changePassword = (value) => {
    const maxCharacterPasswordLength = 6;
    if (value.length < maxCharacterPasswordLength) {
      setSomethingIsWrong({
        ...somethingIsWrong,
        passwordRegister: true,
      });
    } else {
      setSomethingIsWrong({
        ...somethingIsWrong,
        passwordRegister: false,
      });
    }
    setUserPassword(value);
  };

  const registerFormChanged = (name, value) => {
    switch (true) {
    case (name === 'nameRegister'):
      changeName(value);
      break;
    case (name === 'emailRegister'):
      changeEmail(value);
      break;
    default:
      changePassword(value);
    }
  };

  const registerUser = async () => {
    await axios({
      method: 'post',
      url: 'http://localhost:3001/register',
      data: {
        name: userName,
        email: userEmail,
        password: userPassword,
      },
    })
      .then(() => setRedirectToProducts(true))
      .catch((e) => console.error(e));
  };

  return (
    <section>
      <form>
        <label htmlFor="nameRegisterField">
          <input
            type="text"
            name="nameRegister"
            id="nameRegisterField"
            onChange={ ({ target: { name, value } }) => registerFormChanged(name, value) }
            data-testid="common_register__input-name"
          />
        </label>
        <label htmlFor="emailRegisterField">
          <input
            type="email"
            name="emailRegister"
            id="emailRegisterField"
            onChange={ ({ target: { name, value } }) => registerFormChanged(name, value) }
            data-testid="common_register__input-email"
          />
        </label>
        <label htmlFor="passwordRegisterField">
          <input
            type="password"
            name="passwordRegister"
            id="passwordRegisterField"
            onChange={ ({ target: { name, value } }) => registerFormChanged(name, value) }
            data-testid="common_register__input-password"
          />
        </label>
        <button
          type="button"
          name="register"
          id="registerUser"
          disabled={ registerButtonDisabled }
          onClick={ async () => registerUser() }
          data-testid="common_register__button-register"
        >
          CADASTRAR
        </button>
      </form>
      <RegisterErrorMessages somethingIsWrong={ somethingIsWrong } />
      { redirectToProducts && <Redirect to="/customer/products" /> }
    </section>
  );
}

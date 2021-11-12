import React, { useState, useEffect } from 'react';
import EmailInput from '../components/EmailInput';
import PasswordInput from '../components/PasswordInput';
import NameInput from '../components/NameInput';
// import { validateEmailFormat, validatePassword } from '../helpers/validation';

function Register() {
  const [name, setStateName] = useState();
  const [email, setStateEmail] = useState();
  const [password, setStatePassword] = useState();

  const nameTestId = 'common_register__input-name';
  const emailTestId = 'common_register__input-email';
  const passwordTestId = 'common_register__input-password';
  const title = 'Email';

  useEffect(() => {
    // if (password && email) {
    //   if (validateEmailFormat(email) && validatePassword(password)) {
    //     setDisable(false);
    //   } else {
    //     setDisable(true);
    //   }
    // }
  }, [email, name, password]);

  return (
    <div>
      <NameInput
        nameTestId={ nameTestId }
        setStateName={ setStateName }
      />
      <EmailInput
        emailTestId={ emailTestId }
        setStateEmail={ setStateEmail }
        title={ title }
      />
      <PasswordInput
        passwordTestId={ passwordTestId }
        setStatePassword={ setStatePassword }
      />
      <button
        data-testid="common_register__button-register"
        onClick={ () => navigate('/register') }
        type="button"
      >
        Cadastrar
      </button>
    </div>
  );
}

export default Register;

import React, { useContext } from 'react';
import Context from '../context/Context';
import ErrorRegister from '../components/ErrorRegister';

function Register() {
  const {
    errorMsg,
    handleClick,
  } = useContext(Context);

  return (
    <form>
      <input
        data-testid="common_register__input-name"
        type="text"
        name="nome"
        id="nome"
      />
      <input
        data-testid="common_register__input-email"
        type="email"
        name="e-mail"
        id="e-mail"
      />
      <input
        data-testid="common_register__input-password"
        type="password"
        name="password"
        id="password"
      />
      <input
        data-testid="common_register__button-register"
        type="button"
        value="Cadastrar"
        onClick={ () => handleClick() }
      />
      { errorMsg ? <ErrorRegister /> : '' }
    </form>
  );
}

export default Register;

import React from 'react';
import PropTypes from 'prop-types';

export default function ButtonRegiter({ name, email, password, valid }) {
  // const [isValidEntry, setIsValidEntry] = useState(true);

  const buttonActivation = () => {
    // fonte: https://www.w3resource.com/javascript/form/email-validation.php
    const EMAILREGEX = /\S+@\S+\.\S+/;

    const PASSWORDMIN = 6;
    const NAME = 12;
    if (name.length >= NAME
      && email.match(EMAILREGEX) && password.length >= PASSWORDMIN) {
      return false;
    }
    return true;
  };
  return (
    <>
      <button
        disabled={ buttonActivation() }
        type="submit"
        data-testid="common_register__button-register"
      >
        CADASTRAR
      </button>
      { !valid
          && (
            <span data-testid="common_register__element-invalid_register">
              Usuário já existente
            </span>
          )}
    </>
  );
}

ButtonRegiter.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
}.isRequired;

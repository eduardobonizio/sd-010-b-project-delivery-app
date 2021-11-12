import React, { useEffect, useState, useCallback } from 'react';
import PropTypes from 'prop-types';

export default function RegisterErrorMessages({ somethingIsWrong }) {
  const [inputErrors, setInputErrors] = useState([]);

  const invalidName = 'Nome inválido';
  const invalidEmail = 'Email inválido';
  const invalidPassword = 'Senha inválida';
  const invalidUser = 'Este usuário já existe';

  const showMeAnError = useCallback(() => {
    const errorMessage = [];

    if (somethingIsWrong.nameRegister) {
      errorMessage.push(invalidName);
    }

    if (somethingIsWrong.emailRegister) {
      errorMessage.push(invalidEmail);
    }

    if (somethingIsWrong.passwordRegister) {
      errorMessage.push(invalidPassword);
    }

    if (somethingIsWrong.alreadyExists) {
      errorMessage.push(invalidUser);
    }

    setInputErrors(
      errorMessage.map((phrase, index) => <li key={ index }>{ phrase }</li>),
    );
  }, [somethingIsWrong]);

  useEffect(() => {
    showMeAnError();
  }, [somethingIsWrong, showMeAnError]);

  return (
    <div data-testid="common_register__element-invalid_register">
      <ul>
        { inputErrors }
      </ul>
    </div>
  );
}

RegisterErrorMessages.propTypes = {
  somethingIsWrong: PropTypes.shape({
    nameRegister: PropTypes.bool,
    emailRegister: PropTypes.bool,
    passwordRegister: PropTypes.bool,
    alreadyExists: PropTypes.bool,
  }).isRequired,
};

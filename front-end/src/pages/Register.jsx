import React, { useState } from 'react';

import fields from '../services/formFields';

import {
  validateEmail,
  validatePassword,
  validateName,
} from '../util/valdations';

function Register() {
  const [state, setState] = useState({ name: '', email: '', password: '' });

  const validateInputs = (name, email, password) => {
    const validation = validateEmail(email)
    && validateName(name) && validatePassword(password);
    return validation;
  };

  const handleInputValue = (e) => {
    const { name } = e.target;
    setState({ ...state, [name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <h1>App de Delivery</h1>
      <form onSubmit={ handleSubmit }>
        {fields.map((el) => (
          <div key={ el.id }>
            <label htmlFor={ el.value }>{el.label}</label>
            <input
              type={ el.type }
              id={ el.value }
              name={ el.value }
              value={ state[el.value] }
              onChange={ handleInputValue }
              data-testid={ el.testId }
            />
          </div>
        ))}
        <button
          data-testid="common_register__button-register"
          type="submit"
          disabled={ !validateInputs(state.name,
            state.email, state.password) }
        >
          Cadastrar
        </button>
      </form>
      {error && (
        <p data-testid="common_register__element-invalid_register">
          Email já utilizado
        </p>
      )}
    </div>
  );
}

export default Register;

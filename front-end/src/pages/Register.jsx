import React, { useState } from 'react';
import fields from '../services/formFields';

import { validateEmail, validatePassword, validateName } from '../util/valdations';

function Register() {
  const [state, setState] = useState({ name: '', email: '', password: '' });

  const validateInputs = (name, email, password) => {
    const validation = validateEmail(email)
    && validateName(name) && validatePassword(password);
    return validation;
  };
  const handleInputValue = async (e) => {
    const { name } = e.target;
    await setState({ ...state, [name]: e.target.value });
  };

  const handleSubmit = (e) => {
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
          disabled={ !validateInputs(state.name, state.email, state.password) }
        >
          Cadastrar
        </button>

      </form>

      <p data-testid="common_login__element-invalid-email">
        Email ou senha inválidos
      </p>

    </div>
  );
}

export default Register;

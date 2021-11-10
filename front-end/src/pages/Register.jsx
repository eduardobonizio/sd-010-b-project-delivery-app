import React, { useState } from 'react';
import fields from '../services/formFields';

function Register() {
  const [state, setState] = useState({ name: '', email: '', password: '' });

  const handleInputValue = (e) => {
    const { name } = e.target;
    setState({ ...state, [name]: e.target.value });
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
          // disabled={ !passwordIsValid || !emailIsValid }
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

import React from 'react';
import Joi from 'joi';
import { useValidator } from 'react-joi';

export default function Register() {
  const TWELVE = 12;
  const SIX = 6;
  const { state, setData, setExplicitField, validate } = useValidator({
    initialData: {
      name: null,
      email: null,
      password: null,
    },
    schema: Joi.object({
      name: Joi.string().min(TWELVE).required(),
      email: Joi.string()
        .email({
          tlds: { allow: false },
        }).required(),
      password: Joi.string().min(SIX).required(),
    }),
    explicitCheck: {
      name: true,
      email: true,
      password: true,
    },
  });
  const updateName = (e) => {
    e.persist();
    setData((old) => ({
      ...old,
      name: e.target.value,
    }));
  };

  const updateEmail = (e) => {
    // react < v17
    e.persist();

    setData((old) => ({
      ...old,
      email: e.target.value,
    }));
  };

  const updatePassword = (e) => {
    // react < v17
    e.persist();

    setData((old) => ({
      ...old,
      password: e.target.value,
    }));
  };

  return (
    <>
      <h2>REGISTRO</h2>

      <form>
        <label htmlFor="name">
          Nome
          <input
            type="text"
            name="name"
            data-testid="common_register__input-name"
            onChange={ updateName }
            // onBlur={ () => setExplicitField('name', true) }
          />
        </label>
        <br />
        {console.log(state)}
        {state.$errors.name.map((data) => data.$message).join(',')}
        <br />

        <label htmlFor="email">
          Email
          <input
            type="email"
            name="email"
            data-testid="common_register__input-email"
            onChange={ updateEmail }
            onBlur={ () => setExplicitField('email', true) }
          />
        </label>
        <br />
        {state.$errors.email.map((data) => data.$message).join(',')}
        <br />

        <label htmlFor="password">
          Senha
          <input
            type="password"
            name="password"
            data-testid="common_register__input-password"
            onChange={ updatePassword }
            onBlur={ () => setExplicitField('password', true) }
          />
        </label>
        <br />
        {state.$errors.password.map((data) => data.$message).join(',')}
        <br />
      </form>

      <button
        type="submit"
        name="registerButton"
        data-testid="common_register__button-register"
        disabled={ state.$all_source_errors.length !== 0 }
        onClick={ validate }
      >
        CADASTRAR

      </button>

      <p
        data-testid="common_register__element-invalid_register"
      >
        MENSAGEM DE ERRO - ELEMENTO OCULTO

      </p>
    </>
  );
}

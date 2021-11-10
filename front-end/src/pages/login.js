import React from 'react';
import Joi from 'joi';
import {useValidator} from 'react-joi';

export default function Login() {
  const { state, setData, setExplicitField, validate } = useValidator({
    initialData: {
      email: null,
      password: null,
    },
    schema: Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().min(6).required(),
    }),
    explicitCheck: {
      email: false,
      password: false,
    },
})

const updateName = (e) => {
  // react < v17
  e.persist()

  setData((old) => ({
      ...old,
      name: e.target.value,
  }))
}

const updateEmail = (e) => {
  // react < v17
  e.persist()

  setData((old) => ({
      ...old,
      email: e.target.value,
  }))
}

  return (
    <>
      <form>

        <label htmlFor="email">
          Email:
          <input type="email" name="email" data-testid="common_login__input-email" />
        </label>

        <label htmlFor="password">
          Senha:
          <input
            type="password"
            name="password"
            data-testid="common_login__input-password"
          />
        </label>
      </form>

      <button
        type="submit"
        name="loginButton"
        data-testid="common_login__button-login"
      >
        Login

      </button>

      <button
        type="button"
        name="noAccount"
        data-testid="common_login__button-register"
      >
        Ainda não tenho conta

      </button>
    </>
  );
}

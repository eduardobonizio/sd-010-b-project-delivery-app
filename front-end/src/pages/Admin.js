import React, { useState, useEffect } from 'react';
import Joi from 'joi';
import { useValidator } from 'react-joi';
import api from '../services';

export default function Admin() {
  const TWELVE = 12;
  const SIX = 6;
  const { state, setData, validate } = useValidator({
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

  const [isDisabled, setIsDisable] = useState(true);
  const [role, setRole] = useState('customer');
  const [isErr, setIsErr] = useState(false);

  useEffect(() => {
    const disabled = state.$all_source_errors.length !== 0;
    setIsDisable(disabled);
  }, [state]);

  const updateName = (e) => {
    e.persist();
    setData((old) => ({
      ...old,
      name: e.target.value,
    }));
  };

  const updateEmail = (e) => {
    e.persist();

    setData((old) => ({
      ...old,
      email: e.target.value,
    }));
  };

  const updatePassword = (e) => {
    e.persist();

    setData((old) => ({
      ...old,
      password: e.target.value,
    }));
  };

  const updateRole = (e) => setRole(e.target.value);

  const register = async () => {
    try {
      const info = { ...state.$data, role };
      console.log(info);
      await api.register(info);
      // return window.location.replace('/customer/products');
      // console.log(data);
    } catch (error) {
      setIsErr(true);
    }
  };

  return (
    <>
      Cadastrar novo usuário:
      <form>
        <label htmlFor="name">
          Nome
          <input
            type="text"
            name="name"
            data-testid="admin_manage__input-name"
            onChange={ updateName }
          />
        </label>
        <br />
        {state.$errors.name.map((data) => data.$message).join(',')}
        <br />

        <label htmlFor="email">
          Email
          <input
            type="email"
            name="email"
            data-testid="admin_manage__input-email"
            onChange={ updateEmail }
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
            data-testid="admin_manage__input-password"
            onChange={ updatePassword }
          />
        </label>
        <br />
        {state.$errors.password.map((data) => data.$message).join(',')}
        <br />

        <label htmlFor="type">
          Tipo
          <select
            name="type"
            data-testid="admin_manage__select-role"
            onChange={ updateRole }
          >
            <option defaultValue="customer">Cliente</option>
            <option value="seller">Vendedor</option>
            <option value="administrator">Administrador</option>
          </select>
        </label>

      </form>

      <button
        type="submit"
        name="register"
        data-testid="admin_manage__button-register"
        disabled={ isDisabled }
        onClick={ async () => { validate(); await register(); } }
      >
        CADASTRAR
      </button>

      {isErr && <p>Erro: Email já cadastrado </p>}
    </>
  );
}

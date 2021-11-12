import React, { useEffect, useState } from 'react';
import Joi from 'joi';
import { useValidator } from 'react-joi';
import { Link } from 'react-router-dom';
import api from '../services';
import NotFound from '../components/notFound';

export default function Login() {
  // const history = useHistory();
  const SIX = 6;
  const { state, setData, setExplicitField, validate } = useValidator({
    initialData: {
      email: null,
      password: null,
    },
    schema: Joi.object({
      email: Joi.string()
        .email({
          tlds: { allow: false },
        }),
      password: Joi.string().min(SIX).required(),
    }),
    explicitCheck: {
      email: true,
      password: true,
    },
  });

  const [isDisabled, setIsDisable] = useState(true);
  const [isErr, setIsErr] = useState(false);
  // const [user, setUser] = useState({});

  useEffect(() => {
    const disabled = state.$all_source_errors.length !== 0;
    setIsDisable(disabled);
  }, [state]);

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

  const redirect = ({ role }) => {
    switch (role) {
    case 'administrator': return window.location.replace('/customer/products');
    case 'customer': return window.location.replace('/customer/products');
    case 'seller': return window.location.replace('/customer/seller');
      // case 'seller':
    default:
      break;
    }
  };

  const userLogin = async () => {
    try {
      const user = state.$data;
      const { data } = await api.create(user);
      // setUser(response);
      redirect(data);
    } catch (error) {
      setIsErr(true);
    }
  };

  return (
    <>
      <form>

        <label htmlFor="email">
          Email:
          <input
            type="email"
            name="email"
            data-testid="common_login__input-email"
            onChange={ updateEmail }
            onBlur={ () => setExplicitField('email', true) }
          />
        </label>
        <br />
        {state.$errors.email.map((data) => data.$message).join(',')}
        <br />

        <label htmlFor="password">
          Senha:
          <input
            type="password"
            name="password"
            data-testid="common_login__input-password"
            onChange={ updatePassword }
            onBlur={ () => setExplicitField('password', true) }
          />
        </label>
        <br />
        {/* {state.$errors.password.map((data) => data.$message).join(',')} */}
        <br />
      </form>

      <button
        type="submit"
        name="loginButton"
        data-testid="common_login__button-login"
        disabled={ isDisabled }
        onClick={ async () => { validate(); await userLogin(); } }
      >
        Login

      </button>

      <Link to="/register">
        <button
          type="button"
          name="noAccount"
          data-testid="common_login__button-register"
        >
          Ainda não tenho conta

        </button>
      </Link>

      {isErr && <NotFound />}
    </>
  );
}

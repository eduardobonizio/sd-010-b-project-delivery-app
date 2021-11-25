import React, { useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { isValidateLogin } from '../../../helpers/validateLogin';
import logo from '../../../images/logo.png';
import '../login.scss';
import { loginApi } from '../../../api/user';
import redirectUser from './helpres';

function Form() {
  const history = useHistory();
  const mountedRef = useRef(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValidate, setIsValidade] = useState(true);
  const [isNotFound, setIsNotFound] = useState(false);

  const user = JSON.parse(localStorage.getItem('user'));

  if (user && user.role === 'customer') {
    history.push('/customer/products');
  }

  useEffect(() => {
    const validateForm = isValidateLogin(email, password);

    if (validateForm) {
      setIsValidade(false);
    } else {
      setIsValidade(true);
    }
  }, [email, password]);

  async function handleLogin(event) {
    event.preventDefault();
    setIsNotFound(false);
    try {
      const data = {
        email,
        password,
      };

      const dataLocalStorage = await loginApi(data);

      localStorage.setItem('user', JSON.stringify(dataLocalStorage));

      redirectUser(dataLocalStorage.role, history);
    } catch (error) {
      console.log(error);
      setEmail('');
      setPassword('');
      return setIsNotFound(true);
    }

    // zebirita@email.com
    // $#zebirita#$

    // fulana@deliveryapp.com
    // fulana@123

    // adm@deliveryapp.com
    // --adm2@21!!--
  }

  useEffect(() => {
    mountedRef.current = false;
  }, []);

  function handleRegister() {
    history.push('/register');
  }

  return (
    <div
      className="row custom-login"
    >
      <div className="col text-center">
        <img src={ logo } alt="logo" width="150" />
        <h1 className="text-warning">TryBeer</h1>
      </div>
      <form
        action=""
        className="col"
      >
        <div className="row d-flex flex-column">
          <div className="col">
            <p>E-mail</p>
            <input
              type="email"
              placeholder="trybber@email.com"
              name="email"
              value={ email }
              onChange={ (e) => setEmail(e.target.value) }
              data-testid="common_login__input-email"
              className="form-control"
            />
          </div>
          <div className="col">
            <p>Password</p>
            <input
              type="password"
              placeholder="******"
              name="password"
              value={ password }
              onChange={ (e) => setPassword(e.target.value) }
              data-testid="common_login__input-password"
              className="form-control"
            />
          </div>
          <div className="col mt-2">
            <button
              type="submit"
              data-testid="common_login__button-login"
              onClick={ handleLogin }
              disabled={ isValidate }
              className="btn btn-primary w-100"
            >
              LOGIN
            </button>
          </div>
          <div className="col mt-2">
            <button
              type="button"
              onClick={ handleRegister }
              data-testid="common_login__button-register"
              className="btn btn-outline-primary w-100"
            >
              Ainda não tenho conta
            </button>
          </div>
          {
            isNotFound
            && (
              <p data-testid="common_login__element-invalid-email">
                usuário não encontrado
              </p>
            )
          }
        </div>
      </form>
    </div>

  );
}

export default Form;

import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { Context } from '../context/ContextGlobal';
import '../styles/Register.css';

function Register() {
  const {
    errorMessage,
    nameUser,
    emailRegister,
    setEmailRegister,
    passwordRegister,
    setPasswordRegister } = useContext(Context);

  const passLength = 5;
  const nameLength = 11;

  return (
    <div className="register__container">
      <h1>Cadastre-se!</h1>
      <form className="register-body">
        <h4 className="register-title">Nome</h4>
        <input
          value={ nameUser }
          className="register-input"
          autoComplete="off"
          onChange={ ({ target }) => setNameRegister(target.value) }
        />
        <h4 className="register-title">Email</h4>
        <input
          value={ emailRegister }
          className="register-input"
          onChange={ ({ target }) => setEmailRegister(target.value) }
          data-testid="common_register__input-email"
        />
        <h4 className="register-title">Senha</h4>
        <input
          type="password"
          value={ passwordRegister }
          className="register-input"
          onChange={ ({ target }) => setPasswordRegister(target.value) }
          data-testid="common_register__input-password"
        />
        <Link to="/customer/products">
          <Button
            className="register-button"
            type="submit"
            data-testid="common_register__button-register"
            disabled={
              !(/^[^\s@]+@[^\s@]+\.[^\s@]+$/).test(emailRegister)
          || passwordRegister.length <= passLength
          || nameRegister.length <= nameLength
            }
          >
            CADASTRAR
          </Button>
        </Link>
      </form>
      { errorMessage
       && <span data-testid="common_register__element-invalid_register">{ error }</span>}
    </div>
  );
}

export default Register;

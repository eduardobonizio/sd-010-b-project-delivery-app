import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { isValidateRegister } from '../../../helpers/validateRegister';
import api from '../../../services/api';

function Form() {
  const history = useHistory();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValidate, setIsValidade] = useState(true);
  const [isNotFound, setIsNotFound] = useState(false);

  useEffect(() => {
    const validateForm = isValidateRegister(name, email, password);
    if (validateForm) {
      setIsValidade(false);
    } else {
      setIsValidade(true);
    }
  }, [email, password, name]);

  async function handleRegister(event) {
    event.preventDefault();
    setIsNotFound(false);

    try {
      const dataRegister = { email, password, name };
      await api.post('/register', dataRegister);

      const dataLogin = { email, password };
      const loginResponse = await api.post('/login', dataLogin);

      const dataLocalStorage = {
        name: loginResponse.data.name,
        email: loginResponse.data.email,
        role: loginResponse.data.role,
        token: loginResponse.data.token,
      };

      localStorage.setItem('user', JSON.stringify(dataLocalStorage));

      history.push('/customer/products');
    } catch (error) {
      setName('');
      setPassword('');
      setEmail('');
      return setIsNotFound(true);
    }

    // Cliente Zé Birita
    // zebirita@email.com
    // $#zebirita#$
  }

  return (
    <div className="d-flex justify-content-center">
      <div className="row d-flex flex-column bg-secondary py-4">
        <p className="text-center">Cadastro</p>
        <div className="col">
          <span className="form-label">Nome</span>
          <input
            type="text"
            name="name"
            id="name"
            className="form-control"
            data-testid="common_register__input-name"
            value={ name }
            onChange={ (e) => setName(e.target.value) }
          />
        </div>
        <div className="col">
          <span className="form-label">Email</span>
          <input
            type="email"
            name="email"
            id="email"
            className="form-control"
            data-testid="common_register__input-email"
            value={ email }
            onChange={ (e) => setEmail(e.target.value) }
          />
        </div>
        <div className="col">
          <span className="form-label">Senha</span>
          <input
            type="password"
            name="password"
            id="password"
            className="form-control"
            data-testid="common_register__input-password"
            value={ password }
            onChange={ (e) => setPassword(e.target.value) }
          />
        </div>
        <div className="col mt-2">
          <button
            type="button"
            className="btn btn-primary w-100"
            data-testid="common_register__button-register"
            disabled={ isValidate }
            onClick={ handleRegister }
          >
            CADASTRAR
          </button>
        </div>
        {
          isNotFound
            && (
              <p data-testid="common_register__element-invalid_register">
                usuário já cadastrado
              </p>
            )
        }
      </div>
    </div>
  );
}

export default Form;

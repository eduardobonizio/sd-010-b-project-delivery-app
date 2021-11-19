import React, { useState, useEffect } from 'react';
import { isValidateRegister } from '../../../helpers/validateRegister';
import './Form.scss';

function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('seller');
  const [isValidate, setIsValidade] = useState(true);

  useEffect(() => {
    const validateForm = isValidateRegister(name, email, password);
    if (validateForm) {
      setIsValidade(false);
    } else {
      setIsValidade(true);
    }
  }, [email, password, name]);

  function handleSubmit(event) {
    event.preventDefault();
    const data = {
      name,
      email,
      password,
      role,
    };
    console.log(data);
    setName('');
    setEmail('');
    setPassword('');
    setRole('seller');
  }

  return (
    <div className="row flex-column custom-form">
      <div className="col">
        <h3>Cadastrar novo usuario</h3>
      </div>
      <div className="col d-flex flex-column">
        <span>Nome</span>
        <input
          type="text"
          className="form-control"
          data-testid="admin_manage__input-name"
          value={ name }
          onChange={ (e) => setName(e.target.value) }
        />
      </div>
      <div className="col d-flex flex-column">
        <span>Email</span>
        <input
          type="email"
          className="form-control"
          data-testid="admin_manage__input-email"
          value={ email }
          onChange={ (e) => setEmail(e.target.value) }
        />
      </div>
      <div className="col d-flex flex-column">
        <span>Senha</span>
        <input
          type="password"
          className="form-control"
          data-testid="admin_manage__input-password"
          value={ password }
          onChange={ (e) => setPassword(e.target.value) }
        />
      </div>
      <div className="col d-flex flex-column">
        <select
          name=""
          id=""
          data-testid="admin_manage__select-role"
          className="form-select"
          value={ role }
          onChange={ (e) => setRole(e.target.value) }
        >
          <option value="seller">Vendedor</option>
          <option value="customer">Cliente</option>
          <option value="administrator">Administrador</option>
        </select>
      </div>
      <div className="col d-flex flex-column">
        <button
          type="submit"
          className="btn btn-warning"
          data-testid="admin_manage__select-role"
          disabled={ isValidate }
          onClick={ handleSubmit }
        >
          CADASTRAR
        </button>
      </div>
    </div>
  );
}

export default Form;

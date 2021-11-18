import React, { useState, useEffect } from 'react';
import { isValidateRegister } from '../../../helpers/validateRegister';

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
    <div>
      <div>
        <h3>Cadastrar novo usuario</h3>
        <form>
          <div>
            <span>Nome</span>
            <input
              type="text"
              data-testid="admin_manage__input-name"
              value={ name }
              onChange={ (e) => setName(e.target.value) }
            />
          </div>
          <div>
            <span>Email</span>
            <input
              type="email"
              data-testid="admin_manage__input-email"
              value={ email }
              onChange={ (e) => setEmail(e.target.value) }
            />
          </div>
          <div>
            <span>Senha</span>
            <input
              type="password"
              data-testid="admin_manage__input-password"
              value={ password }
              onChange={ (e) => setPassword(e.target.value) }
            />
          </div>
          <select
            name=""
            id=""
            data-testid="admin_manage__select-role"
            value={ role }
            onChange={ (e) => setRole(e.target.value) }
          >
            <option value="seller">Vendedor</option>
            <option value="customer">Cliente</option>
            <option value="administrator">Administrador</option>
          </select>
          <button
            type="submit"
            data-testid="admin_manage__select-role"
            disabled={ isValidate }
            onClick={ handleSubmit }
          >
            CADASTRAR
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;

import React, { useState, useEffect } from 'react';
import isValidRegister from '../../../helpers/validRegister';

export default function Management() {
  const [btnDisable, setBtnDisable] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const isValid = isValidRegister(name, email, password);
    setBtnDisable(isValid);
  }, [name, email, password]);

  return (
    <div>
      <form>
        Nome
        <input
          type="text"
          data-testid="admin_manage__input-name"
          onChange={ (e) => setName(e.target.value) }
        />
        Email
        <input
          type="text"
          data-testid="admin_manage__input-email"
          onChange={ (e) => setEmail(e.target.value) }
        />
        Password
        <input
          type="password"
          data-testid="admin_manage__input-password"
          onChange={ (e) => setPassword(e.target.value) }
        />
        <select name="Tipo" id="tipo" data-testid="admin_manage__select-role">
          <option>Select</option>
          <option value="seller">seller</option>
          <option value="customer">customer</option>
          <option value="audi">Audi</option>
        </select>
        <button
          type="submit"
          disabled={ btnDisable }
          data-testid="admin_manage__button-register"
        >
          BOTÃO
        </button>
      </form>
    </div>
  );
}

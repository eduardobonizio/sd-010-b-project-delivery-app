import React, { useState } from 'react';

export default function Management() {
  const [btnDisable] = useState(true);
  return (
    <div>
      <form>
        Nome
        <input
          type="text"
          data-testid="admin_manage__input-name"
        />
        Email
        <input
          type="text"
          data-testid="admin_manage__input-email"
        />
        Password
        <input
          type="password"
          data-testid="admin_manage__input-password"
        />
        <select name="Tipo" id="tipo" data-testid="admin_manage__select-role">
          <option value="Vendedor">Vendedor</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
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

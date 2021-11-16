import React, { useState } from 'react';

export default function Register() {
  const [btnDisable] = useState(true);

  return (
    <div>
      <h1>Register</h1>
      <form>
        <input type="text" data-testid="common_register__input-name" />
        <input type="text" data-testid="common_register__input-email" />
        <input type="password" data-testid="common_register__input-password" />
        <button
          type="submit"
          default={ btnDisable }
          data-testid="common_register__button-register"
        >
          a
        </button>
      </form>
    </div>
  );
}

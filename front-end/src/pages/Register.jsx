import React from 'react';

function Register() {
  return (
    <form>
      <input type="text" name="nome" id="nome" />
      <input type="email" name="e-mail" id="e-mail" />
      <input type="password" name="password" id="password" />
      <input type="button" value="Cadastrar" />
    </form>
  );
}

export default Register;

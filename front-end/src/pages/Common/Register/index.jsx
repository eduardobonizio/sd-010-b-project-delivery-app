import React, { useState, useEffect } from 'react';

export default function Register() {
  const [btnDisable, setBtnDisable] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    function buttonAble() {
      const validEmail = /\S+@\S+\.\S+/;
      const minOfCaracteres = 6;
      const minName = 12;

      if (name.length >= minName
        && password.length >= minOfCaracteres
        && validEmail.test(email)) {
        setBtnDisable(false);
      } else {
        setBtnDisable(true);
      }
    }
    buttonAble();
  }, [name, email, password]);

  return (
    <div>
      <h1>Register</h1>
      <form>
        <input
          type="text"
          data-testid="common_register__input-name"
          onChange={ (e) => setName(e.target.value) }
        />
        Nome
        <input
          type="text"
          data-testid="common_register__input-email"
          onChange={ (e) => setEmail(e.target.value) }
        />
        Email
        <input
          type="password"
          data-testid="common_register__input-password"
          onChange={ (e) => setPassword(e.target.value) }
        />
        Password
        <button
          type="submit"
          disabled={ btnDisable }
          data-testid="common_register__button-register"
          onClick={ (e) => console.log(e) }
        >
          desabilitando botao
        </button>
      </form>
    </div>
  );
}

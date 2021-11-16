import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import apiCreateUser from '../../../services/register/apiRequestRegister';

export default function Register() {
  const [btnDisable, setBtnDisable] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [erro] = useState();

  const navigate = useNavigate();

  const tryRegister = async (e) => {
    e.preventDefault();

    const register = await apiCreateUser({ name, email, password, role: 'customer' });

    if (register.token) navigate('../customer/products', { replace: true });
  };

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
          onClick={ (e) => tryRegister(e) }
        >
          desabilitando botao
        </button>
        <p data-testid="common_register__element-invalid_register">
          { erro ? 'Falhou' : ' '}
        </p>
      </form>
    </div>
  );
}

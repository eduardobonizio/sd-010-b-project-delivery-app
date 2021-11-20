import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DeliveryContext from '../context/DeliveryContext';
import ErrorMessage from './ErrorMessage';

function RegisterForm() {
  const navigate = useNavigate();
  const { validarNome, validarSenha, validarEmail } = useContext(DeliveryContext);

  const [registerInfo, setRegisterInfo] = useState({
    nome: '',
    email: '',
    senha: '',
  });

  const [isValidData, setIsValidData] = useState(true);

  const { nome, senha, email } = registerInfo;

  const ableButton = () => {
    if (validarNome(nome) && validarSenha(senha) && validarEmail(email)) {
      return false;
    }
    return true;
  };

  const handleRegisterForm = ({ target }) => {
    const { name, value } = target;
    setRegisterInfo((oldState) => ({
      ...oldState,
      [name]: value,
    }));
    ableButton();
  };

  const handleSendRegister = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axios.post('http://localhost:3001/register', {
        name: nome,
        password: senha,
        email,
      });
      const { role, token } = data;
      localStorage.setItem('user', `${JSON.stringify({ nome, email, role, token })}`);
      navigate('/customer/products');
    } catch (err) {
      console.log(err);
      setIsValidData(false);
      return err;
    }
  };

  return (
    <form>
      <label htmlFor="nome">
        Nome
        <input
          type="text"
          name="nome"
          placeholder="Insira seu nome"
          data-testid="common_register__input-name"
          onChange={ (event) => handleRegisterForm(event) }
        />
        {
          !validarNome(nome)
            ? <ErrorMessage input="nome" />
            : null
        }
      </label>
      <label htmlFor="email">
        Email
        <input
          type="email"
          name="email"
          placeholder="Insira seu email"
          data-testid="common_register__input-email"
          onChange={ (event) => handleRegisterForm(event) }
        />
        {
          !validarEmail(email)
            ? <ErrorMessage input="email" />
            : null
        }
      </label>
      <label htmlFor="password">
        Senha
        <input
          type="password"
          name="senha"
          placeholder="Insira sua senha"
          data-testid="common_register__input-password"
          onChange={ (event) => handleRegisterForm(event) }
        />
        {
          !validarSenha(senha)
            ? <ErrorMessage input="senha" />
            : null
        }
      </label>
      <button
        type="button"
        disabled={ ableButton() }
        onClick={ handleSendRegister }
        data-testid="common_register__button-register"
      >
        Registra-se
      </button>
      {
        isValidData
          ? null
          : <ErrorMessage input="invalid-data" />
      }
    </form>);
}

export default RegisterForm;

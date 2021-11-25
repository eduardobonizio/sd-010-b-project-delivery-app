/* import axios from 'axios'; */
import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import DeliveryContext from '../context/DeliveryContext';
import ID from '../utils/dataTestIdDict';
import { registerAdm } from '../services/API';
import ErrorMessage from './ErrorMessage';
import '../styles/FormAdm.css';

function RegisterFormAdm() {
  const { validarNome, validarSenha, validarEmail } = useContext(DeliveryContext);
  const navigate = useNavigate();

  const [registerInfo, setRegisterInfo] = useState({
    nome: '',
    email: '',
    senha: '',
    role: 'Seller',
  });

  const [isValidData, setIsValidData] = useState(true);

  const { nome, senha, email, role: papel } = registerInfo;

  useEffect(() => {
    const { role } = JSON.parse(localStorage.user);
    if (role !== 'administrator') {
      navigate(`/${role}/orders`);
    }
  }, [navigate]);

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
    /* const { token } = JSON.parse(localStorage.user); */
    event.preventDefault();
    try {
      registerAdm(nome, senha, email, papel);
      /* await axios.post('http://localhost:3001/register/adm', {
        name: nome,
        password: senha,
        email,
        role: papel,
      }, { headers: { Authorization: token } }); */
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
          data-testid={ ID.dataTestId65 }
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
          data-testid={ ID.dataTestId66 }
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
          data-testid={ ID.dataTestId78 }
          onChange={ (event) => handleRegisterForm(event) }
        />
        {
          !validarSenha(senha)
            ? <ErrorMessage input="senha" />
            : null
        }
      </label>
      <label htmlFor="tipo">
        Tipo
        <select
          name="role"
          data-testid={ ID.dataTestId68 }
          onChange={ (event) => handleRegisterForm(event) }
          defaultValue="Vendedor"
        >
          <option value="custumer">Usuário</option>
          <option value="seller">Vendedor</option>
          <option value="administrator">Administrador</option>
        </select>
      </label>
      <button
        type="button"
        disabled={ ableButton() }
        onClick={ handleSendRegister }
        data-testid={ ID.dataTestId69 }
      >
        Cadastrar
      </button>
      {
        isValidData
          ? null
          : <ErrorMessage input="invalid-data" />
      }
    </form>);
}

export default RegisterFormAdm;

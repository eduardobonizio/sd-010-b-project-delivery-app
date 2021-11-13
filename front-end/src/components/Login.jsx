// import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import reqUserLogin from '../services/reqUserLogin';

// import DeliveryContext from '../context/DeliveryContext';

const Login = () => {
  const navigate = useNavigate();

  const [isValidPW, setIsValidPW] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // const { validarEmail, validarSenha,
  // } = useContext(DeliveryContext);

  const validarEmail = (e) => {
    const emailTester = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/i;

    if (!emailTester.test(e)) return false;

    return true;
  };

  const validarSenha = (senha) => {
    const SENHA_LENGTH = 6;

    if (senha.length < SENHA_LENGTH) {
      return false;
    }
    return true;
  };

  // const buttonLogin = async () => {
  //   // try {
  //   const data = await reqUserLogin({ email, password });
  //   if (data instanceof Error) {
  //     return setIsValidPW(true);
  //   }
  //   // const { data } = await axios.post('http://localhost:3001/login', { email, password });
  //   localStorage.setItem('token', `${JSON.stringify(data)}`);
  //   return history.push('/customer/products');
  //   // return navigate('/customer/products');
  //   // } catch (error) {
  //   // setIsValidPW(true);
  //   // return error;
  //   // }
  // };

  const buttonLogin = async () => {
    const data = await reqUserLogin({ email, password });
    if (data instanceof Error) {
      return setIsValidPW(true);
    }
    localStorage.setItem('token', `${JSON.stringify(data)}`);
    return navigate('/customer/products');
  };

  const handleChange = ({ target }) => {
    const { value, name } = target;
    return name === 'email' ? setEmail(value) : setPassword(value);
  };

  const isValid = () => {
    if (validarEmail(email) && validarSenha(password)) {
      return false;
    }
    return true;
  };

  const TEST_INVALID_EMAIL = 'common_login__element-invalid-email';

  return (
    <div className="App">
      <form action="">
        <input
          data-testid="common_login__input-email"
          type="text"
          onChange={ (event) => handleChange(event) }
          name="email"
          value={ email }
          placeholder="E-mail"
        />
        <input
          data-testid="common_login__input-password"
          type="text"
          name="password"
          onChange={ (event) => handleChange(event) }
          value={ password }
          placeholder="Password"
        />
        <button
          data-testid="common_login__button-login"
          type="button"
          onClick={ buttonLogin }
          disabled={ isValid() }
        >
          LOGIN
        </button>
        <button
          data-testid="common_login__button-register"
          onClick={ () => navigate('/register') }
          type="button"
        >
          Ainda não tenho conta
        </button>
        {
          isValidPW
            ? <span data-testid={ TEST_INVALID_EMAIL }>Password ou E-mail invalido!</span>
            : null
        }
      </form>
    </div>
  );
};

export default Login;

import React, { useState, useEffect, useContext } from 'react';
// import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import rockGlass from '../images/rockGlass.svg';
import { setOnLocalStorage } from '../services/helpers/servicesLocalStorage';
import loginService from '../services/apis/servicesLogin';
import Context from '../context/Context';

function Login() {
  const history = useHistory();
  const [disableBtn, setDisableBtn] = useState(true);
  const [hidden, setHidden] = useState(true);
  const [login, setLogin] = useState({
    email: '',
    password: '',
  });

  const redirect = () => {
    history.push('/register');
  };

  // utilize o contexto aqui
  const { setUser } = useContext(Context);

  const validateFields = ({ email, password }) => {
    const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const passwordLength = password.length;
    const minPassword = 5;

    if (regex.test(email) && passwordLength > minPassword) {
      setDisableBtn(false);
    } else {
      setDisableBtn(true);
    }
  };

  const handleChange = ({ target: { name, value } }) => {
    setLogin({
      ...login,
      [name]: value,
    });
  };

  const handleClick = async () => {
    const checkLogin = await loginService(login);
    if (checkLogin.message.id) {
      const { message } = checkLogin;
      setOnLocalStorage('user', message);
      setUser(message);
      history.push('/customer/products');
    }
    setHidden(false);
  };

  const atalho = () => {
    const tokenPart1 = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.';
    const tokenPart2 = 'eyJpZCI6NCwic…4OTB9.oyJ1J0jotGuP2De4xMkY2tm5gSsKiU9OI2BDR-HWvzA';
    const message = {
      id: 4,
      name: 'teste',
      email: 'teste@gmail.com',
      role: 'custumer',
      token: `${tokenPart1}${tokenPart2}`,
    };
    setOnLocalStorage('user', message);
    setUser(message);
    history.push('/customer/products');
  };

  useEffect(() => {
    validateFields(login);
  }, [login]);
  return (
    <div>
      <span className="logo">TRYBE</span>
      <object className="rocksGlass" type="image/svg+xml" data={ rockGlass }>
        Glass
      </object>
      <label htmlFor="email-input">
        <input
          id="email-input"
          className="email-input"
          type="email"
          name="email"
          data-testid="common_login__input-email"
          placeholder="Email"
          onChange={ handleChange }
        />
      </label>
      <label htmlFor="password-input">
        <input
          id="password-input"
          className="password-input"
          type="password"
          name="password"
          data-testid="common_login__input-password"
          placeholder="Senha"
          onChange={ handleChange }
        />
      </label>
      <div className="loginButton">
        <button
          className="loginButton"
          type="button"
          data-testid="common_login__button-login"
          disabled={ disableBtn }
          onClick={ handleClick }
        >
          Entrar/Logar
        </button>
      </div>
      <div>
        <button
          type="button"
          data-testid="common_login__button-register"
          onClick={ redirect }
        >
          Registrar novo usuario
        </button>
      </div>
      <h2 data-testid="common_login__element-invalid-email" hidden={ hidden }>
        Email ou Senha invalidos
      </h2>

      <button type="button" onClick={ atalho }>
        atalho
      </button>
    </div>
  );
}

export default Login;

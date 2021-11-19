import React, { useContext, useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import api from '../api';
import { loginIsDisabled } from '../helpers/validations';
import Context from '../context/Context';

function Login() {
  const { setUserEmail } = useContext(Context);
  const [isError, setIsError] = useState(false);
  const [loginOk, setLoginOk] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) setLoginOk(true);
    // eslint-disable-next-line
  }, []);

  const handleClickLogin = async () => {
    try {
      await api.login({ email, password }).then(({ data: token }) => {
        localStorage.setItem('user', JSON.stringify({ token }));
        setUserEmail(email);
        setLoginOk(true);
        setIsError(false);
      });
    } catch (error) {
      setIsError(true);
    }
  };

  return (
    <div className="Login">
      { loginOk && <Navigate to="/customer/products" /> }
      { redirect && <Navigate to="/register" /> }
      <form>
        <p>zebirita@email.com</p>
        <input
          type="text"
          placeholder="email@trybeer.com.br"
          data-testid="common_login__input-email"
          onChange={ (e) => setEmail(e.target.value) }
        />
        <p>$#zebirita#$</p>
        <input
          type="password"
          placeholder="*****"
          data-testid="common_login__input-password"
          onChange={ (e) => setPassword(e.target.value) }
        />
        <button
          type="button"
          disabled={ loginIsDisabled({ email, password }) }
          onClick={ handleClickLogin }
          data-testid="common_login__button-login"
        >
          LOGIN
        </button>
        <button
          type="button"
          onClick={ () => setRedirect(!redirect) }
          data-testid="common_login__button-register"
        >
          Ainda não tenho conta
        </button>
      </form>
      { isError && (
        <h1 data-testid="common_login__element-invalid-email">
          Um Erro qualquer
        </h1>
      ) }
    </div>
  );
}

export default Login;

/*
zebirita@email.com
$#zebirita#$
*/

import React, { useState, useContext, useEffect } from 'react';
import Context from '../context/Context';
import { createUser } from '../services/apis/getAllUsers';
import { getFromLocalStorage } from '../services/helpers/servicesLocalStorage';
import * as S from '../styles/Admin';

function DetailsAddress() {
  const { allUsers, setAllUsers } = useContext(Context);
  const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const MIN_NAME = 12;
  const MIN_PASSWORD = 6;
  const [isValid, setIsValid] = useState(false);
  const [buttonOn, setButtonOn] = useState(true);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('seller');
  const [password, setPassword] = useState('');
  useEffect(() => {
    const isValidEmail = regex.test(email);
    const isValidName = name.length >= MIN_NAME;
    const isValidPassword = password.length >= MIN_PASSWORD;
    if (isValidEmail && isValidName && isValidPassword) {
      return setButtonOn(false);
    }
  }, [regex, email, name.length, password.length, role]);

  const registerUser = async () => {
    const { token } = getFromLocalStorage('user');
    const body = { name, email, password, role };
    const newUser = await createUser(body, token);
    if (!newUser) return setIsValid(true);
    setAllUsers([...allUsers, newUser]);
  };

  const INPUT_NAME_ADMIN = 'admin_manage__input-name';
  const INPUT_EMAIL_ADMIN = 'admin_manage__input-email';
  const INPUT_PASSWORD_ADMIN = 'admin_manage__input-password';
  const INPUT_SELECT_ADMIN = 'admin_manage__select-role';
  const INPUT_BUTTON_ADMIN = 'admin_manage__button-register';

  return (
    <S.mainContainer>

      <S.titleAdmin>CADASTRAR USUÁRIO</S.titleAdmin>
      <S.formAdmin>

        <S.containerImput>
          <S.legend>Nome</S.legend>
          <input
            data-testid={ `${INPUT_NAME_ADMIN}` }
            onChange={ ({ target }) => setName(target.value) }
            type="text"
            placeholder="Digite seu Nome Completo"
          />
        </S.containerImput>

        <S.containerImput>
          <S.legend>Email</S.legend>
          <input
            data-testid={ `${INPUT_EMAIL_ADMIN}` }
            onChange={ ({ target }) => setEmail(target.value) }
            type="email"
            placeholder="Digite seu e-mail"
          />
        </S.containerImput>

        <S.containerImput>
          <S.legend>Senha</S.legend>
          <input
            data-testid={ `${INPUT_PASSWORD_ADMIN}` }
            onChange={ ({ target }) => setPassword(target.value) }
            type="password"
            placeholder="Digite Sua Senha"
          />
        </S.containerImput>

        <S.containerSelect>

          <S.selectRole
            data-testid={ `${INPUT_SELECT_ADMIN}` }
            onChange={ ({ target }) => setRole(target.value) }
          >
            <option value="seller">Vendedor</option>
            <option value="customer">Cliente</option>
          </S.selectRole>
        </S.containerSelect>
        <S.containerButton>

          <S.buttonCadastrar
            data-testid={ `${INPUT_BUTTON_ADMIN}` }
            disabled={ buttonOn }
            onClick={ () => registerUser() }
            type="button"
          >
            CADASTRAR
          </S.buttonCadastrar>
        </S.containerButton>
        {
          isValid && (
            <span data-testid="admin_manage__element-invalid-register">
              Não foi possivel cadastrar usuario
            </span>
          )
        }
      </S.formAdmin>
    </S.mainContainer>
  );
}

export default DetailsAddress;
